import sqlite3
import json

def export_db_to_json(db_path, json_path):
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM vocabulary")
    rows = cursor.fetchall()
    
    data = [dict(row) for row in rows]
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    conn.close()
    print(f"Exported {len(data)} rows to {json_path}")

if __name__ == "__main__":
    export_db_to_json("/Users/su6i/@-github/LinguaFlash/linguaflash.db", "/Users/su6i/@-github/LinguaFlash/vocabulary_db.json")
