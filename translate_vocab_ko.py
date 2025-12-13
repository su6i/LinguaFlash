import re

# Translation Map for B1 Sentences
translations = {
    "sent_environment": "우리는 환경을 보호해야 합니다.",
    "sent_freedom": "자유는 행복을 위해 필수적입니다.",
    "sent_success": "노력은 성공으로 이끕니다.",
    "sent_knowledge": "그는 역사에 대해 많은 지식을 가지고 있습니다.",
    "sent_opinion": "이 책에 대한 당신의 의견은 무엇입니까?",
    "sent_experience": "저는 5년의 업무 경험이 있습니다.",
    "sent_government": "정부가 세금을 인상했습니다.",
    "sent_culture": "우리는 다른 문화에 대해 배우는 것을 즐깁니다.",
    "sent_decision": "이 결정을 내리는 것은 어려웠습니다.",
    "sent_opportunity": "이것은 배울 수 있는 좋은 기회입니다.",
    "sent_society": "우리는 현대 사회에 살고 있습니다.",
    "sent_technology": "기술은 우리의 삶을 변화시켰습니다.",
    "sent_economy": "국가 경제가 성장하고 있습니다.",
    "sent_education": "교육은 미래의 열쇠입니다.",
    "sent_health": "건강은 부보다 더 중요합니다.",
    "sent_system": "컴퓨터 시스템이 다운되었습니다.",
    "sent_method": "이 방법은 매우 효과적입니다.",
    "sent_theory": "저것은 단지 이론일 뿐, 사실이 아닙니다.",
    "sent_solution": "우리는 해결책을 찾아야 합니다.",
    "sent_quality": "이 제품의 품질은 훌륭합니다.",
    "sent_goal": "저의 주된 목표는 프랑스어를 배우는 것입니다.",
    "sent_result": "시험 결과는 긍정적이었습니다.",
    "sent_reason": "당신이 늦은 이유는 무엇입니까?",
    "sent_advice": "제게 조언을 좀 해주시겠습니까?",
    "sent_agreement": "우리는 마침내 합의에 도달했습니다.",
    "sent_competition": "기업 간의 경쟁이 치열합니다.",
    "sent_event": "그 행사는 매년 열립니다.",
    "sent_development": "소프트웨어 개발에는 시간이 걸립니다.",
    "sent_responsibility": "프로젝트를 끝내는 것은 당신의 책임입니다.",
    "sent_industry": "그녀는 패션 산업에서 일합니다.",
    "sent_security": "공항 보안은 매우 엄격합니다.",
    "sent_population": "도시의 인구는 빠르게 증가하고 있습니다.",
    "sent_tradition": "차를 마시는 것은 오래된 전통입니다.",
    "sent_community": "그는 지역 사회의 활동적인 회원입니다.",
    "sent_process": "배움은 긴 과정입니다.",
    "sent_variety": "그 가게는 다양한 상품을 보유하고 있습니다.",
    "sent_difference": "이 둘의 차이점은 무엇입니까?",
    "sent_similarity": "그들 사이에는 강한 유사성이 있습니다.",
    "sent_activity": "수영은 제가 가장 좋아하는 활동입니다.",
    "sent_relationship": "그들은 이웃과 좋은 관계를 맺고 있습니다.",
    "sent_role": "사회에서 교육의 역할은 무엇입니까?",
    "sent_effect": "스트레스는 건강에 나쁜 영향을 미칩니다.",
    "sent_behavior": "학교에서 그의 행동이 개선되었습니다.",
    "sent_memory": "저는 이름에 대한 기억력이 좋지 않습니다.",
    "sent_imagination": "그녀는 매우 생생한 상상력을 가지고 있습니다.",
    "sent_communication": "좋은 의사소통은 성공의 열쇠입니다.",
    "sent_media": "미디어는 중요한 역할을 합니다.",
    "sent_politics": "저는 정치에 큰 관심이 없습니다.",
    "sent_science": "과학은 우리가 세상을 이해하는 데 도움을 줍니다.",
    "sent_argument": "그들은 설득력 있는 주장을 가지고 있었습니다."
}

file_path = 'vocabulary.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def inject_ko(match):
    full_str = match.group(0)
    word_id = match.group(1)
    
    if word_id in translations:
        # Check if ko already exists
        if 'ko:' not in full_str:
            # Inject ko at the end before closing brace
            # Remove closing brace and whitespace
            trimmed = full_str.rstrip(' }')
            new_ko = translations[word_id]
            # Assuming format ends with last lang value... 
            # We can just append , ko: "trans" }
            return f'{trimmed}, ko: "{new_ko}" }}'
        else:
            # If it exists (e.g. ko: "English"), replace it
            ko_part = re.search(r'ko:\s*"([^"]+)"', full_str)
            if ko_part:
                current_ko = ko_part.group(1)
                new_ko = translations[word_id]
                return full_str.replace(f'ko: "{current_ko}"', f'ko: "{new_ko}"')

    return full_str

# Match { id: "sent_...", ... }
# The ids for B1 sentences start with sent_
pattern = re.compile(r'\{\s*id:\s*"(sent_[^"]+)",[^}]+\}')

new_content = pattern.sub(inject_ko, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Translation Applied for B1 Sentences.")
