interface ProgressBarProps {
  label?: string;
  value: number;
  max?: number;
  color?: string;
}

export default function ProgressBar({
  label,
  value,
  max = 20,
  color = "#6FCF70",
}: ProgressBarProps) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-700">
          {label}
        </span>

        <span className="text-sm text-gray-500">
          {value}점
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}