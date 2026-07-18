// lib/vbti.ts

import { MonsterType, Score } from "@/data/questions";

export interface Scores {
  growth: number;
  hope: number;
  courage: number;
  empathy: number;
  wisdom: number;
}

export interface VBTIResult {
  type: MonsterType;
  eggType: MonsterType;
  monsterCode: string;
  scores: Scores;
}

const monsterMap: Record<MonsterType, string> = {
  growth: "leafon",
  hope: "lightning",
  courage: "pyron",
  empathy: "heartmi",
  wisdom: "wizron",
};

// MVP 동점 우선순위
const priority: MonsterType[] = [
  "growth",
  "hope",
  "courage",
  "empathy",
  "wisdom",
];

/**
 * 빈 점수 생성
 */
export function createEmptyScores(): Scores {
  return {
    growth: 0,
    hope: 0,
    courage: 0,
    empathy: 0,
    wisdom: 0,
  };
}

/**
 * 점수 누적
 */
export function addScore(
  current: Scores,
  score: Score
): Scores {
  return {
    growth: current.growth + (score.growth ?? 0),
    hope: current.hope + (score.hope ?? 0),
    courage: current.courage + (score.courage ?? 0),
    empathy: current.empathy + (score.empathy ?? 0),
    wisdom: current.wisdom + (score.wisdom ?? 0),
  };
}

/**
 * 가장 높은 성향 찾기
 */
function getHighestType(scores: Scores): MonsterType {
  const maxScore = Math.max(
    scores.growth,
    scores.hope,
    scores.courage,
    scores.empathy,
    scores.wisdom
  );

  const candidates = priority.filter(
    (type) => scores[type] === maxScore
  );

  // 동점이면 priority 순서 적용
  return candidates[0];
}

/**
 * 최종 결과 계산
 */
export function calculateResult(
  scores: Scores
): VBTIResult {

  const type = getHighestType(scores);

  return {
    type,

    eggType: type,

    monsterCode: monsterMap[type],

    scores,
  };
}