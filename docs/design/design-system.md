# Design System

Version: 1.0

---

# 디자인 철학

창제몬은 성장을 응원하는 따뜻한 웹앱이다.

모든 UI는

- 친근함
- 귀여움
- 직관성
- 편안함

을 가장 중요하게 생각한다.

사용자가 UI를 공부하지 않아도 자연스럽게 사용할 수 있어야 한다.

---

# Grid System

기본 단위

8px

모든 여백은 8px 배수를 사용한다.

예시

8px

16px

24px

32px

40px

48px

---

# Color Palette

## Primary

Leaf Green

#71C96B

사용

- 메인 버튼
- 강조 요소
- Progress

---

## Growth

#71C96B

---

## Hope

#FFD24A

---

## Courage

#F45B3A

---

## Empathy

#8EC9FF

---

## Wisdom

#A884F3

---

## Background

#F8FFF7

---

## Surface

#FFFFFF

---

## Border

#E8EFE7

---

## Text

Primary

#2C2C2C

Secondary

#666666

Disabled

#B5B5B5

---

# Typography

Font

Pretendard

---

Title

Bold

28px

---

Subtitle

SemiBold

22px

---

Body

Regular

16px

---

Caption

Regular

14px

---

Button

SemiBold

16px

---

# Radius

Card

24px

Button

18px

Input

16px

Tag

999px

---

# Shadow

Card

0 6px 18px rgba(0,0,0,0.08)

Button

0 3px 8px rgba(0,0,0,0.08)

---

# Button

## Primary

배경

Primary Green

텍스트

White

Radius

18px

Height

52px

---

## Secondary

배경

White

테두리

Gray

텍스트

Primary

---

## Disabled

배경

Gray

텍스트

White

---

# Card

Background

White

Radius

24px

Padding

20px

Shadow

Light

---

# Input

Radius

16px

Border

1px

Padding

16px

---

# Progress Bar

Height

10px

Radius

999px

Animation

Left → Right

---

# Monster Card

구성

- 일러스트
- 이름
- 번호
- 성향
- 잠금 여부

잠금 시

- 회색 처리
- 실루엣 표시

---

# Result Card

구성

- 창제몬
- 번호
- 성향
- 도감 설명
- 그래프
- 추천 실천

---

# Icon

사용

Lucide Icon

커스텀 아이콘

창제몬 아이콘

Emoji 사용 금지

---

# Animation

기본

200ms

Hover

150ms

Popup

300ms

Result Animation

2~3초

---

# Motion

사용

Fade

Scale

Slide

Bounce

Float

사용하지 않음

- 흔들림
- 과한 회전
- 빠른 점멸

---

# Responsive

# Device

Primary Device

Smartphone

Design Width

390px

Minimum Width

320px

Maximum Width

430px

Desktop은 별도의 레이아웃을 제공하지 않는다.

PC에서는 모바일 화면을 중앙 정렬하여 표시한다.

---

# Component Naming

ButtonPrimary

ButtonSecondary

MonsterCard

ResultCard

ProgressBar

QuestionCard

Badge

Tag

Header

Footer

---

# Accessibility

버튼 최소 크기

44px

텍스트 대비

WCAG AA

모든 버튼

터치 가능

---

# 개발 규칙

TailwindCSS 사용

Component 재사용

중복 CSS 금지

색상은 Color Palette만 사용

Spacing은 8px Grid를 따른다.

---

# 관련 문서

- ui-guide.md
- monsters.md
- result-system.md
- screens/result.md