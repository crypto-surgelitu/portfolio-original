import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="shrink-0">
      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-white/[0.12] border border-white/[0.15]">
        <Image
          src="/logos/monogram-v2.webp"
          alt="AM"
          width={784}
          height={1168}
          className="h-[70%] w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
