"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";
import BottomButton from "@/components/BottomButton";

import {
  calculateResult,
  Scores,
  VBTIResult,
} from "@/lib/vbti";

const eggMap = {
  growth: {
    image: "/eggs/leafon/egg_0.png",
    name: "성장알",
    description: "성장의 에너지가 가장 강한 창제알입니다.",
  },
  hope: {
    image: "/eggs/lightning/egg_0.png",
    name: "희망알",
    description: "희망의 에너지가 가장 강한 창제알입니다.",
  },
  courage: {
    image: "/eggs/pyron/egg_0.png",
    name: "용기알",
    description: "용기의 에너지가 가장 강한 창제알입니다.",
  },
  empathy: {
    image: "/eggs/heartmi/egg_0.png",
    name: "공감알",
    description: "공감의 에너지가 가장 강한 창제알입니다.",
  },
  wisdom: {
    image: "/eggs/wizron/egg_0.png",
    name: "지혜알",
    description: "지혜의 에너지가 가장 강한 창제알입니다.",
  },
};

export default function EggResultPage() {
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

  const egg = eggMap[result.type];

  return (
    <Layout>
      <div className="flex flex-col items-center">

        <h2 className="text-3xl font-bold text-green-700">
          VBTI 완료!
        </h2>

        <p className="mt-3 text-gray-500">
          당신의 창제알이 결정되었습니다.
        </p>

        <Image
          src={egg.image}
          alt={egg.name}
          width={220}
          height={220}
          priority
          className="mt-8"
        />

        <h1 className="mt-6 text-4xl font-bold">
          {egg.name}
        </h1>

        <p className="mt-5 text-center text-gray-600 leading-7">
          {egg.description}
          <br />
          이제 알을 터치해서
          창제몬을 부화시켜보세요!
        </p>

      </div>

      <div className="mt-12">
        <BottomButton
          text="부화하기"
          onClick={() => router.push("/hatch")}
        />
      </div>

    </Layout>
  );
}