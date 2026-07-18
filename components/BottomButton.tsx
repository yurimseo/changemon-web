interface BottomButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function BottomButton({
  text,
  onClick,
  disabled = false,
}: BottomButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        py-4
        rounded-2xl
        font-bold
        text-white
        bg-green-500
        active:scale-95
        transition
        disabled:bg-gray-300
      "
    >
      {text}
    </button>
  );
}