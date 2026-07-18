"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";
import BottomButton from "@/components/BottomButton";
import ProgressBar from "@/components/ProgressBar";

import {
  calculateResult,
  Scores,
  VBTIResult,
} from "@/lib/vbti";

import { monsterInfo } from "@/lib/result";

export default function ResultPage() {
  const router = useRouter();

  const [result, setResult] = useState<VBTIResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("vbtiScores");

    if (!saved) {
      router.replace("/");
      return;
    }

    const scores: Scores = JSON.parse(saved);

    setResult(calculateResult(scores));
  }, [router]);

  if (!result) return null;

  const monster =
    monsterInfo[result.monsterCode as keyof typeof monsterInfo];

  return (
    <Layout>
      <div className="rounded-3xl bg-white shadow-xl p-6">

        <div className="flex flex-col items-center">

          <Image
            src={`/monsters/${result.monsterCode}.png`}
            alt={monster.name}
            width={220}
            height={220}
            priority
          />

          <p className="mt-2 text-sm text-gray-500">
            당신의 창제몬
          </p>

          <h1 className="mt-2 text-4xl font-bold text-green-700">
            {monster.name}
          </h1>

          <p className="mt-4 text-center text-gray-600 leading-7">
            {monster.description}
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <ProgressBar
            label="🌱 성장"
            value={result.scores.growth}
            color="#57C76A"
          />

          <ProgressBar
            label="⭐ 희망"
            value={result.scores.hope}
            color="#F2C94C"
          />

          <ProgressBar
            label="🔥 용기"
            value={result.scores.courage}
            color="#EB5757"
          />

          <ProgressBar
            label="❤️ 공감"
            value={result.scores.empathy}
            color="#FF7EB6"
          />

          <ProgressBar
            label="💎 지혜"
            value={result.scores.wisdom}
            color="#4F7BFF"
          />

        </div>

      </div>

      <div className="mt-8">
        <BottomButton
          text="처음으로 돌아가기"
          onClick={() => {
            localStorage.removeItem("vbtiScores");
            router.push("/");
          }}
        />
      </div>
    </Layout>
  );
}