export type MonsterType =
  | "growth"
  | "hope"
  | "courage"
  | "empathy"
  | "wisdom";

export interface Score {
  growth?: number;
  hope?: number;
  courage?: number;
  empathy?: number;
  wisdom?: number;
}

export interface Option {
  id: string;
  text: string;
  score: Score;
}

export interface Question {
  id: number;
  question: string;
  type: "choice2" | "choice5";
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "새로운 목표가 생겼을 때 나는?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "일단 한 걸음부터 시작한다.",
        score: {
          courage: 2,
          growth: 1,
        },
      },
      {
        id: "B",
        text: "충분히 생각한 뒤 시작한다.",
        score: {
          wisdom: 2,
          hope: 1,
        },
      },
    ],
  },

  {
    id: 2,
    question: "친구가 고민을 털어놓는다면?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "먼저 마음을 공감해 준다.",
        score: {
          empathy: 2,
          hope: 1,
        },
      },
      {
        id: "B",
        text: "함께 해결 방법을 고민한다.",
        score: {
          wisdom: 2,
          hope: 1,
        },
      },
    ],
  },

  {
    id: 3,
    question: "오늘 하루 가장 행복했던 순간은?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "내가 성장했다고 느꼈을 때",
        score: {
          growth: 2,
          hope: 1,
        },
      },
      {
        id: "B",
        text: "누군가와 함께 웃었을 때",
        score: {
          empathy: 2,
          hope: 1,
        },
      },
    ],
  },

  {
    id: 4,
    question: "기원을 세운다면 나는?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "큰 목표를 세우고 끝까지 밀어붙인다.",
        score: {
          courage: 2,
          hope: 1,
        },
      },
      {
        id: "B",
        text: "매일 조금씩 꾸준히 실천한다.",
        score: {
          growth: 2,
          wisdom: 1,
        },
      },
    ],
  },

  {
    id: 5,
    question: "예상하지 못한 어려움이 생기면?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "새로운 방법을 찾아본다.",
        score: {
          wisdom: 2,
          courage: 1,
        },
      },
      {
        id: "B",
        text: "주변 사람들과 함께 해결한다.",
        score: {
          empathy: 2,
          hope: 1,
        },
      },
    ],
  },

  {
    id: 6,
    question: "내가 가장 듣고 싶은 말은?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "정말 많이 성장했구나.",
        score: {
          growth: 2,
          wisdom: 1,
        },
      },
      {
        id: "B",
        text: "너가 있어서 정말 큰 힘이 되었어.",
        score: {
          empathy: 2,
          growth: 1,
        },
      },
    ],
  },

  {
    id: 7,
    question: "행복은 언제 가장 커진다고 생각하나요?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "목표를 이루었을 때",
        score: {
          courage: 2,
          growth: 1,
        },
      },
      {
        id: "B",
        text: "함께 나누었을 때",
        score: {
          empathy: 1,
          hope: 2,
        },
      },
    ],
  },

  {
    id: 8,
    question: "창제몬이 당신에게 행복의 힘을 하나 맡긴다면, 어떤 역할을 맡고 싶나요?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "사람들에게 다시 일어설 용기를 전하는 존재",
        score: {
          courage: 2,
          empathy: 1,
        },
      },
      {
        id: "B",
        text: "사람들에게 앞으로 나아갈 희망을 비춰주는 존재",
        score: {
          growth: 1,
          hope: 2,
        },
      },
    ],
  },

  {
    id: 9,
    question: "주변에 힘들어하는 친구가 있다면 나는?",
    type: "choice2",
    options: [
      {
        id: "A",
        text: "먼저 '넌 할 수 있어!'라며 다시 힘낼 수 있도록 응원한다.",
        score: {
          courage: 2,
          wisdom: 1,
        },
      },
      {
        id: "B",
        text: "왜 힘든지 함께 이야기하며 해결 방법을 찾아본다.",
        score: {
          wisdom: 2,
          growth: 1,
        },
      },
    ],
  },

  {
    id: 10,
    question: "마지막으로, 지금 가장 마음이 끌리는 단어를 선택해주세요.",
    type: "choice5",
    options: [
      {
        id: "A",
        text: "🔥 도전",
        score: {
          courage: 3,
        },
      },
      {
        id: "B",
        text: "🌱 성장",
        score: {
          growth: 3,
        },
      },
      {
        id: "C",
        text: "❤️ 공감",
        score: {
          empathy: 3,
        },
      },
      {
        id: "D",
        text: "⭐ 희망",
        score: {
          hope: 3,
        },
      },
      {
        id: "E",
        text: "💎 지혜",
        score: {
          wisdom: 3,
        },
      },
    ],
  },
];