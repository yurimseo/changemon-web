"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";
import BottomButton from "@/components/BottomButton";
import { calculateResult, Scores, VBTIResult } from "@/lib/vbti";

const monsterInfo = {
  leafon: {
    name: "리프온",
    image: "/monsters/leafon.png",
    type: "🌱 성장형",
    description: "새로운 도전을 즐기며 한 걸음씩 앞으로 나아가는 창제몬",
    quote: "안녕! 앞으로 우리 함께 성장하자! 🌱",
    potential: 4,
  },

  lightning: {
    name: "라이트닝",
    image: "/monsters/lightning.png",
    type: "⭐ 희망형",
    description: "긍정적인 에너지로 주변을 환하게 비추는 창제몬",
    quote: "희망은 언제나 우리 곁에 있어! ⭐",
    potential: 5,
  },

  pyron: {
    name: "파이론",
    image: "/monsters/pyron.png",
    type: "🔥 용기형",
    description: "어떤 어려움도 두려워하지 않는 용감한 창제몬",
    quote: "망설이지 말고 한 걸음 내딛어! 🔥",
    potential: 5,
  },

  heartmi: {
    name: "하트미",
    image: "/monsters/heartmi.png",
    type: "❤️ 공감형",
    description: "따뜻한 마음으로 모두를 이어주는 창제몬",
    quote: "네 마음을 소중히 간직해 줄게. ❤️",
    potential: 4,
  },

  wizron: {
    name: "위즈론",
    image: "/monsters/wizron.png",
    type: "💎 지혜형",
    description: "깊은 통찰력으로 올바른 길을 제시하는 창제몬",
    quote: "천천히 생각해도 괜찮아. 💎",
    potential: 5,
  },
};

const labels = [
  { key: "growth", label: "🌱 성장", color: "bg-green-500" },
  { key: "hope", label: "⭐ 희망", color: "bg-yellow-400" },
  { key: "courage", label: "🔥 용기", color: "bg-red-500" },
  { key: "empathy", label: "❤️ 공감", color: "bg-pink-500" },
  { key: "wisdom", label: "💎 지혜", color: "bg-sky-500" },
];

export default function MonsterPage() {
  const router = useRouter();

  const [monster, setMonster] = useState<
    (typeof monsterInfo)[keyof typeof monsterInfo] | null
  >(null);

  const [scores, setScores] = useState<Scores | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("vbtiScores");

    if (!saved) {
      router.replace("/");
      return;
    }

    const parsed: Scores = JSON.parse(saved);

    setScores(parsed);

    const result: VBTIResult = calculateResult(parsed);

    setMonster(
      monsterInfo[result.monsterCode as keyof typeof monsterInfo]
    );
  }, [router]);

  if (!monster || !scores) return null;

const handleSave = () => {
  if (!scores) return;

  const result = calculateResult(scores);

  window.location.href = `/monsters/cards/${result.monsterCode}.png`;
};


  const maxScore = Math.max(
    scores.growth,
    scores.hope,
    scores.courage,
    scores.empathy,
    scores.wisdom
  );

  return (
    <Layout>
      <div className="flex flex-col items-center">

        <p className="text-green-600 font-bold text-lg">
          🎉 부화 완료!
        </p>

        <div className="mt-4 w-full rounded-2xl border border-green-200 bg-green-50 p-4 text-center">

          <p className="text-xs font-bold text-green-600">
            🆕 NEW!
          </p>

          <h2 className="mt-1 text-lg font-bold">
            {monster.name}을(를) 도감에 등록했습니다!
          </h2>

        </div>

        <Image
          src={monster.image}
          alt={monster.name}
          width={220}
          height={220}
          priority
          className="mt-8"
        />

        <h1 className="mt-5 text-4xl font-bold">
          {monster.name}
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          {monster.type}
        </p>

        <div className="mt-6 w-full rounded-2xl border border-yellow-200 bg-yellow-50 p-5">

          <p className="text-sm text-gray-500">
            🏆 대표 성향
          </p>

          <div className="mt-2 text-2xl font-bold">
            {monster.type}
          </div>

          <div className="mt-4 text-2xl text-yellow-500">
            {"⭐".repeat(monster.potential)}
            {"☆".repeat(5 - monster.potential)}
          </div>

          <p className="mt-5 leading-7 text-gray-700">
            {monster.description}
          </p>

        </div>

        <div className="mt-8 w-full rounded-2xl bg-white shadow p-5">

          <h2 className="mb-5 text-center text-lg font-bold">
            📊 나의 창제 에너지
          </h2>

          {labels.map((item) => {
            const value = scores[item.key as keyof Scores];
            const percent = (value / maxScore) * 100;

            return (
              <div key={item.key} className="mb-4">

                <div className="mb-1 flex justify-between text-sm">

                  <span>{item.label}</span>

                  <span className="font-semibold">
                    {value}점
                  </span>

                </div>

                <div className="h-3 w-full rounded-full bg-gray-200">

                  <div
                    className={`${item.color} h-3 rounded-full transition-all duration-700`}
                    style={{
                      width: `${percent}%`,
                    }}
                  />
                </div>

              </div>
            );
          })}
          </div>
          
                  <div className="mt-8 w-full rounded-2xl border border-blue-200 bg-blue-50 p-5">

          <p className="mb-3 font-bold">
            💬 {monster.name}의 첫 인사
          </p>

          <p className="italic leading-7 text-gray-700">
            "{monster.quote}"
          </p>

        </div>

          <div className="mt-10 w-full space-y-3">

          <BottomButton
            text="📸 도감 카드 저장하기"
            onClick={handleSave}
          />

          <BottomButton
            text="🏠 홈으로"
            onClick={() => router.push("/")}
          />

        </div>

      </div>
    </Layout>
  );
}