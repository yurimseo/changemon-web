import Image from "next/image";

export default function EggCard() {
  return (
    <div className="flex justify-center py-12">
      <Image
        src="public/eggs/default_egg.png"
        alt="창제알"
        width={180}
        height={180}
        priority
      />
    </div>
  );
}
