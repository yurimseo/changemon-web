"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";

export default function LoadingPage() {

  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.push("/result");
    }, 2000);

    return () => clearTimeout(timer);

  }, [router]);

  return (
    <Layout>

      <div className="flex flex-col items-center justify-center h-[70vh]">

        <div className="text-8xl animate-bounce">
          🥚
        </div>

        <h1 className="text-3xl font-bold mt-8">
          창제몬 분석중...
        </h1>

        <p className="mt-4 text-gray-500 text-center">
          당신의 성향을 분석하고 있습니다.
        </p>

      </div>

    </Layout>
  );
}