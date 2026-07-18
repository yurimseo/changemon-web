"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";

import {
  calculateResult,
  Scores,
  VBTIResult,
} from "@/lib/vbti";

export default function HatchVideoPage() {
  const router = useRouter();

  const [result, setResult] =
    useState<VBTIResult | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center">

        <video
          className={`w-full max-w-sm rounded-2xl shadow-lg transition-opacity duration-200 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          src={`/videos/hatch/${result.monsterCode}.mp4`}
          autoPlay
          muted
          playsInline
          controls={false}
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onEnded={() => router.push("/monster")}
        />

      </div>
    </Layout>
  );
}