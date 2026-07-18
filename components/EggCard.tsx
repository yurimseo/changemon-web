import Image from "next/image";

export default function EggCard() {
  return (
    <div className="flex justify-center py-12">
      <div className="relative w-60 h-60">

        {/* 풀 */}
        <Image
          src="/eggs/grass.png"
          alt="풀"
          width={230}
          height={80}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          priority
        />

        {/* 알 */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-float">
          <Image
            src="/eggs/egg.png"
            alt="창제알"
            width={200}
            height={200}
            priority
          />
        </div>

      </div>
    </div>
  );
}
