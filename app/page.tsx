"use client";

import Layout from "@/components/Layout";
import EggCard from "@/components/EggCard";
import BottomButton from "@/components/BottomButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div className="flex h-full flex-col">

        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold text-green-700">
            창제몬 VBTI
          </h1>

          <p className="mt-2 text-gray-500">
            나의 창제몬을 만나보세요
          </p>
        </div>

        <EggCard />

        <div className="mt-4 space-y-4">

          <div className="rounded-2xl bg-green-50 p-6 text-center">
            <h2 className="text-xl font-bold">
              아직 창제몬이 태어나지 않았어요.
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              VBTI 테스트를 완료하고
              <br />
              나만의 창제몬을 만나보세요.
            </p>
          </div>

          <BottomButton
            text="🧭 나의 창제몬 찾기"
            onClick={() => router.push("/question")}
          />

        </div>

      </div>
    </Layout>
  );
}