interface QuestionOption {
  id: string;
  text: string;
}

interface QuestionCardProps {
  title: string;
  options: QuestionOption[];
  onSelect: (answer: string) => void;
}

export default function QuestionCard({
  title,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-center">
        {title}
      </h2>

      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className="
            w-full
            rounded-2xl
            border
            border-green-300
            bg-white
            p-5
            text-left
            hover:bg-green-50
            transition
          "
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}