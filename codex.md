# CODEX.md

Version: 1.0

---

# 프로젝트 소개

프로젝트명

창제몬 (Changemon)

창제몬은 근행창제를 체험하는 사용자가
자신만의 성장 파트너를 만나는 모바일 웹앱이다.

서비스의 목적은 게임이 아니라
사용자가 자신의 성장 성향을 발견하고,
창제몬과 함께 성장하는 경험을 제공하는 것이다.

---

# 프로젝트 목표

이 프로젝트는 하루 동안 운영되는 체험존 행사에서 사용된다.

사용자는 QR코드를 통해 접속하며,
모든 기능은 모바일 환경을 기준으로 제작한다.

PC 레이아웃은 구현하지 않는다.

---

# 개발 우선순위

항상 MVP를 우선한다.

새로운 기능을 추가하기보다

현재 문서에 작성된 기능을
완성도 높게 구현하는 것을 우선한다.

---

# 참고 문서

반드시 아래 문서를 먼저 읽고 구현한다.

project.md

world.md

mvp.md

art-guide.md

monsters.md

question-system.md

result-system.md

database.md

ui-guide.md

copywriting.md

screens/home.md

screens/question.md

screens/loading.md

screens/result.md

screens/collection.md

screens/monster-detail.md

---

# 디자인 원칙

모든 UI는

ART_GUIDE.md를 기준으로 제작한다.

캐릭터 디자인은

reference 폴더의 이미지를 기준으로 한다.

새로운 창제몬 디자인을 임의로 생성하지 않는다.

새로운 알 디자인도 생성하지 않는다.

---

# Reference

reference 폴더에 있는 이미지는

프로젝트의 공식 레퍼런스이다.

디자인이 필요한 경우

반드시 해당 이미지를 참고한다.

새로운 스타일을 만들지 않는다.

---

# UI 원칙

모바일 전용

세로 모드 전용

한 손 조작 가능

과도한 애니메이션 금지

귀엽고 직관적인 UX

Pokemon GBA 감성을 참고하되
직접 복제하지 않는다.

---

# 구현 원칙

문서에 작성되지 않은 기능은
임의로 추가하지 않는다.

구현 중 더 좋은 아이디어가 있더라도

기존 기능을 먼저 구현한다.

---

# 상태 관리

브라우저 Local Storage를 사용한다.

사용하는 값

- vbtiCompleted
- energyCount
- eggType
- hatched
- encyclopediaUnlocked

---

# 화면 흐름

Home

↓

Question

↓

Loading

↓

Result

↓

Home

↓

Collection

↓

Monster Detail

---

Result Screen은

현재 상태에 따라

성향 결과 또는

창제몬 부화 이벤트를 표시한다.

---

# 애니메이션

Float

Glow

Scale

Bounce

Fade

Particle

위 애니메이션만 사용한다.

복잡한 3D 효과는 사용하지 않는다.

---

# 개발 스타일

React + TypeScript

컴포넌트 단위 개발

재사용 가능한 구조

상태는 최대한 단순하게 유지

---

# 금지 사항

PC 화면 기준으로 제작하지 않는다.

새로운 캐릭터를 생성하지 않는다.

레퍼런스 이미지를 변경하지 않는다.

문서에 없는 기능을 추가하지 않는다.

복잡한 회원 시스템을 만들지 않는다.

서버를 반드시 사용할 필요는 없다.

---

# 완료 기준

다음 기능이 모두 동작하면 MVP 완료이다.

- Home
- Question
- Loading
- Result
- Collection
- Monster Detail
- VBTI
- Local Storage 저장
- 도감 등록
- 모바일 UI

---

# 우선순위

1. 기능 구현

2. UI 구현

3. 애니메이션

4. 최적화

항상 기능이 먼저이다.