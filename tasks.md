# TASKS.md

Version: 1.0

---

# 프로젝트 목표

창제몬 MVP를 완성한다.

행사에서 실제 사용할 수 있는 수준의 모바일 웹앱을 제작한다.

항상 MVP를 우선한다.

---

# 개발 순서

## Phase 1 - 프로젝트 초기 세팅

- [ ] Next.js 프로젝트 생성
- [ ] TypeScript 설정
- [ ] Tailwind CSS 설정
- [ ] 폴더 구조 생성
- [ ] 공통 Layout 생성
- [ ] 모바일 전용 레이아웃 설정
- [ ] Local Storage 유틸 생성

---

## Phase 2 - 기본 화면

- [ ] Home Screen
- [ ] Question Screen
- [ ] Loading Screen
- [ ] Result Screen
- [ ] Collection Screen
- [ ] Monster Detail Screen

모든 화면 이동이 가능해야 한다.

---

## Phase 3 - VBTI

- [ ] 질문 데이터 연결
- [ ] 답변 저장
- [ ] 점수 계산
- [ ] 결과 계산
- [ ] eggType 결정
- [ ] vbtiCompleted 저장

---

## Phase 4 - 성장 시스템

- [ ] energyCount 저장
- [ ] 체험 완료 처리
- [ ] 알 상태 변경
- [ ] Home 진행 상태 반영
- [ ] 부화 조건 확인

---

## Phase 5 - 부화 이벤트

- [ ] Egg Reveal
- [ ] Hatching Animation
- [ ] Monster Reveal
- [ ] First Greeting
- [ ] 도감 등록
- [ ] Result Card

---

## Phase 6 - 도감

- [ ] Collection 화면
- [ ] 잠금 처리
- [ ] 획득한 창제몬 표시
- [ ] Monster Detail 연결

---

## Phase 7 - Local Storage

- [ ] vbtiCompleted 저장
- [ ] energyCount 저장
- [ ] eggType 저장
- [ ] hatched 저장
- [ ] encyclopediaUnlocked 저장

새로고침 후에도 상태를 유지해야 한다.

---

## Phase 8 - 애니메이션

- [ ] Float
- [ ] Glow
- [ ] Bounce
- [ ] Fade
- [ ] Particle

애니메이션은 과하지 않게 적용한다.

---

## Phase 9 - UI

- [ ] 모바일 최적화
- [ ] Safe Area 대응
- [ ] 버튼 크기 최적화
- [ ] 폰트 적용
- [ ] 색상 적용

---

## Phase 10 - 테스트

- [ ] 첫 접속
- [ ] VBTI 진행
- [ ] Home 상태 변경
- [ ] 체험 완료
- [ ] 부화
- [ ] 도감 등록
- [ ] 새로고침 테스트

---

# MVP 완료 조건

다음 기능이 모두 정상 동작해야 한다.

- Home
- Question
- Loading
- Result
- Collection
- Monster Detail
- VBTI
- 성장 에너지
- 부화 이벤트
- 도감 등록
- Local Storage

---

# 개발 원칙

항상 기능을 먼저 구현한다.

UI는 기능 구현 후 개선한다.

문서에 없는 기능은 임의로 추가하지 않는다.

Reference 폴더의 이미지를 기준으로 구현한다.

모든 화면은 모바일 기준으로 제작한다.

---

# 완료 후 개선 예정

- 출석 기능
- 친밀도
- 성장 기록
- 진화 시스템
- 공유 기능 개선
- 사운드 강화
- PWA 지원


# 행사 전 최종 체크

- [ ] 모든 화면 정상 동작
- [ ] 모바일 Safari 테스트
- [ ] Android Chrome 테스트
- [ ] QR 접속 테스트
- [ ] Local Storage 초기화 테스트
- [ ] 창제몬 부화 테스트
- [ ] 도감 등록 테스트
- [ ] 이미지 누락 확인
- [ ] 애니메이션 확인
- [ ] 오류 없는지 최종 점검