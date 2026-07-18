// lib/game.ts

import { GameState } from "./storage";

export function isEggReady(state: GameState): boolean {
  return (
    state.energyCount >= 4 &&
    state.vbtiCompleted
  );
}

export function isVBTICompleted(state: GameState): boolean {
  return state.vbtiCompleted;
}

export function getEnergyProgress(state: GameState) {
  return {
    current: state.energyCount,
    total: 4,
  };
}