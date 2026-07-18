"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/components/Layout";
import QuestionCard from "@/components/QuestionCard";

import { questions } from "@/data/questions";
import { createEmptyScores, addScore } from "@/lib/vbti";

export default function QuestionPage() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState(createEmptyScores());
  const router = useRouter();

  const question = questions[current];

 function handleSelect(answer: string) {

  const selected = question.options.find(
    (option) => option.id === answer
  );

  if (!selected) return;

  const newScores = addScore(
    scores,
    selected.score
  );

  setScores(newScores);

  console.log(newScores);

  if (current < questions.length - 1) {
    setCurrent((prev) => prev + 1);
  } else {

    localStorage.setItem(
      "vbtiScores",
      JSON.stringify(newScores)
    );

    router.push("/egg-result");
  }
}
  

  return (
    <Layout>
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Question {current + 1}</span>
          <span>{current + 1} / {questions.length}</span>
        </div>

        <div className="mt-2 h-2 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-green-500 transition-all"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

<QuestionCard
  title={question.question}
  options={question.options}
  onSelect={handleSelect}
/>
    </Layout>
  );
}