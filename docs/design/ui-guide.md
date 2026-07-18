# UI Guide

Version: 1.0

---

# 디자인 컨셉

창제몬은 성향 테스트와 캐릭터 수집의 재미를 결합한 모바일 중심 웹앱이다.

전체적인 분위기는 **포켓몬 도감**과 **닌텐도 게임 UI**에서 영감을 받으며, 따뜻하고 친근한 느낌을 유지한다.

---


# 디자인 키워드

- Cute
- Clean
- Healing
- Nature
- Nintendo Style
- Pokémon Encyclopedia

---

# 디자인 원칙

- 모바일 퍼스트
- 한 화면에 하나의 행동만 유도
- 복잡한 메뉴 최소화
- 직관적인 카드 UI
- 둥근 모서리 사용
- 부드러운 애니메이션

---

# Device Policy

창제몬은 모바일 전용 웹앱으로 설계한다.

행사장에서 QR 또는 NFC를 통해 접속하여 사용하는 것을 기본 시나리오로 한다.

모든 화면은 세로 모드(Portrait)를 기준으로 제작한다.

가로 모드는 지원하지 않는다.


# 컬러 시스템

## Primary

Leaf Green

#71C96B

---

## Secondary

Hope Yellow

#FFD24A

---

## Accent Colors

Growth

#71C96B

Hope

#FFD24A

Courage

#F45B3A

Empathy

#8EC9FF

Wisdom

#A884F3

---

## Background

#F8FFF7

---

## Card

#FFFFFF

---

# Typography

Font

Pretendard

Title

Bold

Body

Regular

Button

SemiBold

---

# Border Radius

Card

24px

Button

18px

Input

16px

---

# Animation

- Fade In
- Scale Up
- Float
- Bounce
- Progress Animation

모든 애니메이션은 0.2 ~ 0.4초 사이로 설정한다.

---

# Screen Flow

Splash

↓

Home

↓

Question

↓

Loading
(점수 계산)

↓

Result Animation
(알 → 부화 → 도감 등록)

↓

Result
(성향 그래프, 설명)

↓

Collection

↓

Monster Detail

---

# Splash

구성

- 창제몬 로고
- 대표 창제몬 등장
- Start 버튼

버튼

[ 테스트 시작 ]

---

# Home

구성

- 로고
- 소개 문구
- 테스트 시작
- 도감 보기

버튼

[ 테스트 시작 ]

[ 창제몬 도감 ]

---

# Question

상단

Question 3 / 10

Progress Bar

---------------------

질문

---------------------

선택지 A

선택지 B

---------------------

이전

다음

---

# Loading

중앙

창제몬 알

빛나는 효과

텍스트

"당신의 창제몬을 찾고 있습니다."

Loading Animation

약 2~3초

---

# Result

결과 화면은 가장 중요한 화면이다.

포켓몬 도감을 처음 등록하는 순간의 느낌을 목표로 한다.

레이아웃

━━━━━━━━━━━━━━

        🦌

      리프온

No.001

━━━━━━━━━━━━━━

🌱 성장형

━━━━━━━━━━━━━━

"조금씩 자라도 괜찮아."

━━━━━━━━━━━━━━

도감 설명

━━━━━━━━━━━━━━

성향 그래프

━━━━━━━━━━━━━━

🌱 성장      ███████████████

❤️ 공감      ███████████

⭐ 희망      █████████

💎 지혜      ███████

🔥 용기      ██████

━━━━━━━━━━━━━━

추천 실천

━━━━━━━━━━━━━━

[ 공유하기 ]

[ 다시 테스트 ]

━━━━━━━━━━━━━━

🎉 도감 등록 완료!

---


# Result Animation

결과 화면 진입 시 아래 순서대로 애니메이션을 실행한다.

## Step 1

창제몬 알이 화면 중앙에 등장한다.

(약 0.8초)

↓

## Step 2

알이 빛나기 시작한다.

Glow Animation

↓

## Step 3

알이 깨지며 창제몬이 등장한다.

Scale Animation

↓

## Step 4

도감 카드가 펼쳐진다.

Book Open Animation

↓

## Step 5

창제몬 카드가 도감 안으로 등록된다.

Slide Animation

↓

## Step 6

"No.001 도감 등록 완료!"

메시지를 표시한다.

약 1초 후

↓

## Step 7

최종 결과 화면을 표시한다.


# Collection

카드 형태

[🦌]

리프온

No.001

------------

[🦊]

라이트닝

No.002

------------

잠금된 몬스터는

???

실루엣

회색 처리

---

# Monster Detail

상단

큰 일러스트

↓

이름

↓

번호

↓

성향

↓

도감 설명

↓

성격

↓

좋아하는 것

↓

대표 대사

↓

진화

↓

뒤로가기

---

# Progress Bar

질문 화면

██████░░░░

30%

결과 화면

██████████

100%

---

# Button Style

Primary

초록색

둥근 버튼

Shadow

Secondary

흰색

회색 테두리

---

# Card Style

Background

White

Radius

24px

Padding

20px

Shadow

Light

---

# UX 원칙

- 한 화면에는 하나의 목적만 존재한다.
- 모든 버튼은 엄지손가락으로 누르기 쉽게 배치한다.
- 결과 화면은 스크롤 한 번으로 모든 정보를 볼 수 있도록 설계한다.
- 사용자가 가장 먼저 창제몬을 보도록 한다.
- 그래프는 텍스트보다 먼저 보여준다.


# Interaction

모든 인터랙션은 엄지손가락 하나로 조작 가능해야 한다.

사용자는 대부분 한 손으로 사용한다.

따라서

- 버튼은 화면 하단에 배치한다.
- 중요 버튼은 하단 중앙에 배치한다.
- 터치 영역은 최소 48px 이상으로 한다.

---

# Responsive

기준

390px

지원

320px ~

768px

Desktop은 모바일 레이아웃을 중앙 정렬하여 표시한다.

---

# 관련 문서

- project.md
- world.md
- monsters.md
- question-system.md
- questions.md
- result-system.md
- art-guide.md