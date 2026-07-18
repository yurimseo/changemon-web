# Database

Version: 1.0

---

# 목적

창제몬 웹앱에서 사용하는 데이터 구조를 정의한다.

이번 버전(MVP)은
행사 체험용 모바일 웹앱을 기준으로 설계한다.

로그인 및 회원가입 기능은 제공하지 않는다.

---

# Database

Supabase

PostgreSQL

---

# MVP Scope

이번 버전에서 사용하는 데이터

- 창제몬
- 질문
- 추천 미션

사용자 계정은 저장하지 않는다.

---

# Table

## monsters

창제몬 정보

| Column | Type | Description |
|---------|------|-------------|
| id | integer | 번호 |
| code | text | monster_code |
| name | text | 이름 |
| type | text | 성장 타입 |
| animal | text | 모티브 동물 |
| symbol | text | 상징 |
| title | text | 칭호 |
| quote | text | 대표 문장 |
| description | text | 도감 설명 |
| keywords | json | 키워드 |
| strengths | json | 장점 |
| growth_tip | text | 성장 포인트 |
| favorite | json | 좋아하는 것 |
| image | text | 이미지 경로 |

---

예시

id

1

code

leafon

name

리프온

type

성장

animal

사슴

symbol

새싹

---

## questions

질문 데이터

| Column | Type |
|---------|------|
| id | integer |
| question | text |
| option_a | text |
| option_b | text |
| score_a | json |
| score_b | json |

score 예시

{
  "growth":3,
  "hope":1
}

---

## daily_missions

추천 실천

| Column | Type |
|---------|------|
| id | integer |
| category | text |
| mission | text |

예시

성장

감사한 일 3가지 적기

---

# Future Tables

향후 추가 예정

## users

회원 정보

## collections

도감

## evolutions

진화

## achievements

업적

## history

검사 기록

---

# 관계

questions

↓

점수 계산

↓

monster 결정

↓

monster 정보 조회

↓

Result Screen

---

# 데이터 흐름

Question

↓

Question System

↓

Monster Type

↓

Monster

↓

Result

---

# Storage

이미지

Supabase Storage

폴더

/monsters

/icons

/background

/share

---

# Naming Rule

Table

snake_case

Column

snake_case

Monster Code

영문 소문자

예시

leafon

lightning

pyron

heartme

wisron

---

# Seed Data

초기 데이터

Monster

5개

Question

10개

Mission

30개 이상

---

# 개발 규칙

UUID 사용하지 않는다.

Monster는 ID 1~5를 사용한다.

Question은 ID 순서대로 표시한다.

Mission은 랜덤으로 3개 선택한다.

---

# MVP 제외

이번 버전에서는 구현하지 않는다.

- 회원가입
- 로그인
- 검사 기록 저장
- 도감 저장
- 즐겨찾기
- 친밀도
- 진화
- 업적
- 랭킹

---

# Local Storage

MVP에서는 사용자 데이터를 서버에 저장하지 않는다.

다음 데이터는 브라우저 Local Storage에 저장한다.

---

## vbtiCompleted

Type

Boolean

설명

VBTI 테스트 완료 여부

기본값

false

---

## energyCount

Type

Number

설명

체험존 완료 개수

범위

0 ~ 4

기본값

0

---

## eggType

Type

String

설명

VBTI 결과에 따라 결정되는 알의 종류

값

- growth
- hope
- courage
- empathy
- wisdom

기본값

null

---

## hatched

Type

Boolean

설명

창제몬 부화 여부

기본값

false

---

## encyclopediaUnlocked

Type

Boolean

설명

도감 등록 완료 여부

기본값

false

---

브라우저 데이터를 삭제하면 초기 상태로 돌아간다.

향후 로그인 기능이 추가되면 Supabase와 연동하여 데이터를 동기화한다.

# 향후 확장

Version 2

- 로그인
- 개인 도감
- 성장 기록
- 진화
- 친구 공유
- 클라우드 저장

---

# 관련 문서

- project.md
- monsters.md
- question-system.md
- result-system.md