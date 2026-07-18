# Result Screen

Version: 2.0

---

# 목적

Result Screen은

사용자의 현재 진행 상태에 따라

창제몬의 성향 또는 창제몬의 탄생을 보여주는 화면이다.

Result Screen은 사용자가 VBTI 테스트를 완료한 후
자신의 창제몬을 처음 만나는 화면이다.

단순한 테스트 결과가 아니라,

"나만의 창제몬이 태어나는 순간"

을 경험하도록 설계한다.

Loading Screen에서 분석이 완료된 후,

Result Screen은 현재 사용자의 진행 상태를 확인한다.

- 성장 에너지와 VBTI가 모두 완료된 경우에는 창제몬이 부화한다.
- 조건이 아직 충족되지 않은 경우에는 현재 진행 상황을 안내한다.

---

# UX 목표

사용자가 결과를 확인하는 것이 아니라,

창제몬을 처음 만나는 경험을 제공한다.

정보보다 감정을 먼저 전달하고,
캐릭터에게 애정을 느끼도록 만든다.

---

# 화면 흐름

Question

↓

Loading

↓

조건 확인

↓

조건 미충족

→ 진행 상황 안내

↓

Home

-------------------------

조건 충족

↓

Egg Reveal

↓

Hatching

↓

Monster Reveal

↓

First Greeting

↓

Encyclopedia Registration

↓

Result Card

↓

Home


# Result Branch

Result Screen은 현재 진행 상태를 확인한다.

## Case 1

성장 에너지 < 4

또는

VBTI 미완료

↓

창제몬은 아직 태어나지 않는다.

현재 진행 상황을 안내하고

Home Screen으로 이동한다.

---

## Case 2

성장 에너지 = 4

그리고

VBTI 완료

↓

창제몬이 부화한다.

Result Screen의 모든 연출을 실행한다.

---

# STEP 1

## Egg Reveal

화면 중앙에 창제몬 알이 등장한다.

알은 천천히 떠다니며
은은하게 빛난다.

애니메이션

- Float
- Glow

약 1초

---

# STEP 2

## Hatching

알이 강하게 빛난다.

↓

금이 간다.

↓

빛이 퍼진다.

↓

알이 깨진다.

애니메이션

- Glow
- Crack
- Particle

약 1초

---

# STEP 3

## Monster Reveal

창제몬이 등장한다.

예시

🦌 리프온

애니메이션

- Scale Up
- Bounce
- Shine

약 1초

---

# STEP 4

## First Greeting

창제몬이 사용자를 바라본다.

약 1초 동안
아무 UI 없이
창제몬만 보여준다.

예시

😊

"반가워!"

또는

"앞으로 잘 부탁해!"

(대사는 추후 copywriting.md에서 관리)

---

# STEP 5

## Encyclopedia Registration

도감 등록 화면이 표시된다.

━━━━━━━━━━━━━━

📖

새로운 창제몬 발견!

No.001

리프온

🌱 성장형

━━━━━━━━━━━━━━

✨ 도감 등록 완료!

━━━━━━━━━━━━━━

약 2초간 표시한다.

---

# STEP 6

## Result Card

┌─────────────────────────┐

          🦌

        리프온

       No.001

──────────────────────────

🌱 성장형

──────────────────────────

"조금씩 자라도 괜찮아."

──────────────────────────

당신은 꾸준한 성장을
가장 큰 행복으로 느끼는 사람입니다.

──────────────────────────

🌱 성장      ███████████████ 15

❤️ 공감      ████████████ 12

⭐ 희망      ██████████ 10

💎 지혜      █████████ 9

🔥 용기      ████████ 8

──────────────────────────

✨ 장점

✔ 꾸준함

✔ 배려심

✔ 성실함

──────────────────────────

🌱 오늘의 추천

□ 감사한 일 3가지 적기

□ 작은 목표 하나 달성하기

□ 주변 사람 칭찬하기

──────────────────────────

[ 공유하기 ]

[ 홈으로 ]

└─────────────────────────┘

---

# 성장 성향 그래프

다섯 가지 성향 점수를 모두 표시한다.

- 🌱 성장
- ❤️ 공감
- ⭐ 희망
- 💎 지혜
- 🔥 용기

가장 높은 점수는

- 대표 컬러 적용
- Glow 효과
- 약간 크게 표시

Progress Bar는 아래에서 위로 자연스럽게 채워진다.

---

# 공유하기

공유 이미지를 생성한다.

포함 내용

- 창제몬
- 이름
- 성향
- 대표 문구

---

# 홈으로

Home Screen으로 이동한다.

홈에서는

알 대신

획득한 창제몬이 기다리고 있다.

---

# Animation Timeline

Result 시작

↓

Egg Reveal

↓

Hatching

↓

Monster Reveal

↓

First Greeting

↓

Encyclopedia Registration

↓

Result Card

↓

Home

---

# Sound Effect

Egg Reveal

잔잔한 효과음

↓

Hatching

"팡!"

↓

Monster Reveal

반짝이는 효과음

↓

Encyclopedia Registration

"띠링✨"

↓

Result Card

부드러운 완료 효과음

---

# UX 원칙

사용자는 결과를 읽는 것이 아니라

창제몬을 만난다.

모든 연출은

결과 전달보다

첫 만남의 경험을 우선한다.

정보는 감정 이후에 전달한다.

---

# MVP Scope

이번 버전에서는

- 진행 상태 확인
- 조건 충족 시 부화 이벤트
- 조건 미충족 안내
- 도감 등록
- 결과 카드

만 구현한다.

---

# Future Scope

향후 추가 예정

- 진화 애니메이션
- 친밀도
- 성장 레벨
- 계절 연출
- 희귀 등장 연출
- 음성 효과

---

# 개발 규칙

- 모바일 전용
- 세로 모드 전용
- Result Screen은 Loading 완료 후 실행한다.
- Loading Screen에서는 부화 애니메이션을 실행하지 않는다.
- Hero 영역은 첫 화면에서 모두 보여야 한다.
- Progress Bar는 애니메이션을 적용한다.
- 모든 연출은 6초 이내에 완료한다.
Result Screen은

현재 사용자의 진행 상태를 먼저 확인한다.

조건

- 성장 에너지 4 / 4
- VBTI 완료

를 모두 만족하는 경우에만

부화 이벤트를 실행한다.

그 외에는 진행 상태를 안내하고 Home으로 이동한다.

---

# 관련 문서

- loading.md
- home.md
- collection.md
- monster-detail.md
- result-system.md
- monsters.md
- ui-guide.md