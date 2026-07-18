import Image from "next/image";

export default function EggCard() {
  return (
    <div className="flex justify-center py-12">
      <div className="relative w-48 h-48">

        {/* 풀 */}
        <Image
          src="public/eggs/grass.png"
          alt="풀"
          width={230}
          height={80}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          priority
        />

        {/* 알 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <Image
            src="public/eggs/egg.png"
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
