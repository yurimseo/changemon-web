// data/monsters.ts

export type MonsterType =
  | "growth"
  | "hope"
  | "courage"
  | "empathy"
  | "wisdom";

export interface Monster {
  code: string;
  number: string;

  name: string;
  title: string;

  type: MonsterType;

  eggType: MonsterType;

  image: string;

  color: string;

  quote: string;

  description: string;

  keywords: string[];
}

export const monsters: Monster[] = [
  {
    code: "leafon",

    number: "No.001",

    name: "리프온",

    title: "성장의 탐험가",

    type: "growth",

    eggType: "growth",

    image: "/monsters/leafon.png",

    color: "#6FCF70",

    quote: "조금씩 자라도 괜찮아.",

    description:
      "꾸준한 노력 속에서 가장 큰 행복을 찾는 성장형 창제몬.",

    keywords: [
      "성장",
      "꾸준함",
      "성실",
      "자연",
      "도전",
    ],
  },

  {
    code: "lightning",

    number: "No.002",

    name: "라이트닝",

    title: "희망의 수호자",

    type: "hope",

    eggType: "hope",

    image: "/monsters/lightning.png",

    color: "#FFD54A",

    quote: "희망은 언제나 빛나고 있어.",

    description:
      "앞으로 나아갈 용기를 비춰주는 희망형 창제몬.",

    keywords: [
      "희망",
      "긍정",
      "빛",
      "꿈",
      "미래",
    ],
  },

  {
    code: "pyron",

    number: "No.003",

    name: "파이론",

    title: "도전의 개척자",

    type: "courage",

    eggType: "courage",

    image: "/monsters/pyron.png",

    color: "#FF6B4A",

    quote: "한 걸음 내딛는 용기가 가장 강한 힘이야.",

    description:
      "새로운 도전을 두려워하지 않는 용기형 창제몬.",

    keywords: [
      "용기",
      "도전",
      "행동",
      "열정",
      "불꽃",
    ],
  },

  {
    code: "heartmi",

    number: "No.004",

    name: "하트미",

    title: "공감의 치유자",

    type: "empathy",

    eggType: "empathy",

    image: "/monsters/heartmi.png",

    color: "#FF7FA8",

    quote: "마음을 나누면 행복도 커져.",

    description:
      "따뜻한 공감으로 모두를 이어주는 공감형 창제몬.",

    keywords: [
      "공감",
      "배려",
      "우정",
      "치유",
      "따뜻함",
    ],
  },

  {
    code: "wizron",

    number: "No.005",

    name: "위즈론",

    title: "지혜의 탐구자",

    type: "wisdom",

    eggType: "wisdom",

    image: "/monsters/wizron.png",

    color: "#7D8BFF",

    quote: "생각은 새로운 길을 만들어.",

    description:
      "깊은 통찰과 배움을 좋아하는 지혜형 창제몬.",

    keywords: [
      "지혜",
      "탐구",
      "통찰",
      "배움",
      "분석",
    ],
  },
];

export function getMonster(code: string) {
  return monsters.find((monster) => monster.code === code);
}

export function getMonsterByType(type: MonsterType) {
  return monsters.find((monster) => monster.type === type);
}