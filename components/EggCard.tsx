import Image from "next/image";

export default function EggCard() {
  return (
    <div className="flex justify-center py-12">
      <div className="relative w-48 h-48">

        {/* 풀 */}
        <Image
          src="/eggs/grass.png"
          alt="풀"
          width={180}
          height={60}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          priority
        />

        {/* 알 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <Image
            src="/eggs/egg.png"
            alt="창제알"
            width={120}
            height={120}
            priority
          />
        </div>

      </div>
    </div>
  );
}
