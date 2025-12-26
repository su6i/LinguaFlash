import sqlite3
import re
import json
import os

def migrate_to_sqlite_simple(js_path, db_path):
    print(f"Starting simplified migration to {db_path}...")
    
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    languages = ['en', 'fa', 'fr', 'de', 'it', 'es', 'ru', 'zh', 'ar', 'ko']
    words_data = []
    current_level = "Unknown"
    current_item = None
    in_word = False
    in_sentence = False

    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        level_match = re.search(r'level:\s*"(.*?)"', line)
        if level_match:
            current_level = level_match.group(1)
            continue
            
        id_match = re.search(r'id:\s*"(.*?)"', line)
        if id_match:
            if current_item: words_data.append(current_item)
            current_item = {
                'id': id_match.group(1),
                'level': current_level,
                'translations': {l: {'word': '', 'sentence': ''} for l in languages}
            }
            continue

        if 'word: {' in line: in_word = True; in_sentence = False; continue
        if 'sentence: {' in line: in_sentence = True; in_word = False; continue
        if line == '},' or line == '}': in_word = False; in_sentence = False; continue

        if current_item:
            for lang in languages:
                if line.startswith(f"{lang}:"):
                    val = re.search(r'":\s*"(.*?)"', line) or re.search(r':\s*"(.*?)"', line)
                    if val:
                        clean_val = val.group(1).replace('\\"', '"')
                        if in_word: current_item['translations'][lang]['word'] = clean_val
                        if in_sentence: current_item['translations'][lang]['sentence'] = clean_val

    if current_item: words_data.append(current_item)

    if os.path.exists(db_path): os.remove(db_path)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Unified Table
    cursor.execute('''
        CREATE TABLE vocabulary (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word_id TEXT,
            level TEXT,
            lang TEXT,
            word_text TEXT,
            sentence_text TEXT,
            is_valid BOOLEAN
        )
    ''')

    def has_native(text, lang):
        if lang in ['fa', 'ar']: return bool(re.search('[\u0600-\u06FF]', text))
        if lang == 'zh': return bool(re.search('[\u4e00-\u9fff]', text))
        if lang == 'ru': return bool(re.search('[\u0400-\u04FF]', text))
        if lang == 'ko': return bool(re.search('[\uac00-\ud7af]', text))
        return True

    seen_ids = {}
    valid_count = 0
    
    for item in words_data:
        original_id = item['id']
        if original_id in seen_ids:
            seen_ids[original_id] += 1
            final_id = f"{original_id}_{seen_ids[original_id]}"
        else:
            seen_ids[original_id] = 1
            final_id = original_id

        for lang in languages:
            word = item['translations'][lang]['word']
            sentence = item['translations'][lang]['sentence']
            
            is_fake = False
            # Relax is_valid for special categories (they often have English in Persian fields)
            if item['level'] == 'Grammar_Tips':
                is_valid = bool(word.strip())
            else:
                is_valid = not is_fake and bool(word.strip())

            # Smart Categorization for Grammar_Tips
            final_level = item['level']
            if final_level == "Grammar_Tips":
                en_word = item['translations']['en']['word'].lower()
                en_sentence = item['translations']['en']['sentence'].lower()
                
                if " vs " in en_word or " vs " in en_sentence:
                    final_level = "Confusing_Words"
                elif "+" in en_word or "phrasal verb" in en_word: # Matches "Verb + Preposition"
                    final_level = "Phrasal_Verbs"
                elif any(x in en_word for x in ["proverb", "quote", "wisdom", "idiom"]):
                    final_level = "Wisdom"
                elif any(x in en_sentence for x in ["proverb", "quote", "wisdom", "idiom"]):
                    final_level = "Wisdom"
                else:
                    final_level = "Grammar_Rules"

            cursor.execute('''
                INSERT INTO vocabulary (word_id, level, lang, word_text, sentence_text, is_valid)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (final_id, final_level, lang, word, sentence, is_valid))
            
            if is_valid: valid_count += 1

    conn.commit()
    conn.close()
    print(f"Migration finished. Data stored in 'vocabulary' table.")

if __name__ == "__main__":
    migrate_to_sqlite_simple("/Users/su6i/@-github/LinguaFlash/vocabulary.js", "/Users/su6i/@-github/LinguaFlash/linguaflash.db")
