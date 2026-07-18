// lib/storage.ts

export interface Scores {
  growth: number;
  hope: number;
  courage: number;
  empathy: number;
  wisdom: number;
}

export interface GameState {
  vbtiCompleted: boolean;
  energyCount: number;
  eggType: string | null;
  monsterCode: string | null;
  scores: Scores;
}

const STORAGE_KEY = "changemon-game";

const defaultState: GameState = {
  vbtiCompleted: false,

  energyCount: 0,

  eggType: null,

  monsterCode: null,

  scores: {
    growth: 0,
    hope: 0,
    courage: 0,
    empathy: 0,
    wisdom: 0,
  },
};

/**
 * 현재 저장된 데이터 가져오기
 */
export function getGameState(): GameState {
  if (typeof window === "undefined") {
    return defaultState;
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultState;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return defaultState;
  }
}

/**
 * 전체 저장
 */
export function saveGameState(state: GameState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/**
 * 성장 에너지 변경
 */
export function updateEnergy(count: number) {
  const state = getGameState();

  state.energyCount = Math.max(0, Math.min(4, count));

  saveGameState(state);
}

/**
 * VBTI 완료
 */
export function completeVBTI() {
  const state = getGameState();

  state.vbtiCompleted = true;

  saveGameState(state);
}

/**
 * 알 타입 저장
 */
export function saveEggType(type: string) {
  const state = getGameState();

  state.eggType = type;

  saveGameState(state);
}

/**
 * 창제몬 저장
 */
export function saveMonster(code: string) {
  const state = getGameState();

  state.monsterCode = code;

  saveGameState(state);
}

/**
 * 성향 점수 저장
 */
export function saveScores(scores: Scores) {
  const state = getGameState();

  state.scores = scores;

  saveGameState(state);
}

/**
 * 게임 초기화
 */
export function resetGame() {
  localStorage.removeItem(STORAGE_KEY);
}