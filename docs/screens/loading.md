# Loading Screen

Version: 2.0

---

# 목적

Loading Screen은 VBTI 결과를 분석하는 화면이다.

사용자의 답변을 바탕으로
창제몬의 성장 성향을 결정하는 과정이며,

창제몬의 부화나 성장 에너지와는 관계가 없다.

Loading Screen은 분석 결과를 준비하는 역할만 담당한다.

---

# UX 목표

사용자가

"내 창제몬은 어떤 성향일까?"

라는 기대감을 느끼도록 한다.

분석이 진행되는 동안
불필요한 정보를 노출하지 않는다.

---

# 화면 구성

┌─────────────────────────┐
│                         │
│          🥚             │
│                         │
│   당신의 성장 성향을     │
│   분석하고 있습니다...   │
│                         │
│        ● ● ●            │
│                         │
└─────────────────────────┘

---

# 표시 요소

화면 중앙

현재 알 상태를 그대로 표시한다.

예시

기본 알

🥚

또는

성향 알

🌱🥚

※ 사용자의 현재 진행 상태에 따라
알의 디자인은 달라질 수 있다.


# Egg State

Loading Screen은 새로운 알을 생성하지 않는다.

현재 Home Screen에서 사용 중인 알 상태를 그대로 표시한다.

Loading 중에는

- 알의 종류
- 알의 색상
- 성장 에너지 진행 상태

를 변경하지 않는다.

Loading은 VBTI 분석만 수행하며,

알의 변화와 부화는 Result Screen에서만 처리한다.

---

# Loading Text

기본 문구

"당신의 성장 성향을 분석하고 있습니다..."

또는

"당신에게 가장 잘 어울리는 창제몬을 찾고 있습니다..."

---

# Animation

알은 천천히 떠다닌다.

적용 애니메이션

- Float
- Soft Glow

Loading Indicator

● ○ ○

↓

○ ● ○

↓

○ ○ ●

↓

반복

---

# 금지 사항

Loading Screen에서는

- 알이 깨지지 않는다.
- 금이 생기지 않는다.
- 부화하지 않는다.
- 창제몬을 보여주지 않는다.

부화 이벤트는 Result Screen에서만 실행한다.

---

# Duration

기본

2초

최소

1.5초

최대

3초

---

# Transition

분석 완료

↓

Result Screen 이동

Result Screen에서

부화 이벤트를 시작한다.

---

# UX 원칙

Loading은 분석만 담당한다.

부화는 Result Screen의 역할이다.

성장 에너지 진행 상태는 변경하지 않는다.

---

# MVP Scope

- VBTI 분석 문구
- 알 Idle Animation
- Loading Indicator

---

# Future Scope

- 계절별 Loading
- 환경 효과
- 배경 파티클
- 효과음 강화

---

# 개발 규칙

- 모바일 전용
- 사용자 입력 없음
- Skip 버튼 없음
- Loading 완료 후 자동으로 Result Screen으로 이동
- 부화 연출은 Result Screen에서만 실행한다.

---

# 관련 문서

- result.md
- home.md
- question-system.md
- world.md