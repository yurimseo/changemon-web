"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";

import {
  calculateResult,
  Scores,
  VBTIResult,
} from "@/lib/vbti";

const eggMap = {
  growth: "/eggs/leafon/egg",
  hope: "/eggs/lightning/egg",
  courage: "/eggs/pyron/egg",
  empathy: "/eggs/heartmi/egg",
  wisdom: "/eggs/wizron/egg",
};

export default function HatchPage() {
  const router = useRouter();

  const [result, setResult] =
    useState<VBTIResult | null>(null);

  const [stage, setStage] = useState(0);

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

  const egg = eggMap[result.type];

  function nextStage() {
    if (stage < 3) {
      setStage((prev) => prev + 1);
      return;
    }

    router.push("/hatch-video");
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">

        <h1 className="text-3xl font-bold">
          알을 터치하세요!
        </h1>

        <p className="mt-3 text-gray-500">
          창제몬이 곧 태어납니다.
        </p>

        <button
          onClick={nextStage}
          className="mt-10 active:scale-95 transition"
        >
          <Image
            src={`${egg}_${stage}.png`}
            alt="egg"
            width={240}
            height={240}
            priority
          />
        </button>

      </div>
    </Layout>
  );
}