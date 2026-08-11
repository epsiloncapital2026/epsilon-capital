import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: number;
  /** "wordmark" for light backgrounds, "image" for dark backgrounds */
  variant?: "wordmark" | "image";
}

export function Logo({
  className = "",
  size = 44,
  variant = "wordmark",
}: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      {variant === "image" ? (
        <Image
          src="/logo.png"
          alt="Epsilon Capital"
          width={size}
          height={size}
          priority
          className="rounded-md"
        />
      ) : (
        <span
          className="select-none font-semibold tracking-tight text-brand-black"
          style={{ fontSize: size * 0.45 }}
        >
          <span className="font-normal lowercase">epsilon</span>
          <span className="uppercase">CAPITAL</span>
          <span className="inline-block h-[0.35em] w-[0.35em] translate-y-[-0.05em] rounded-full bg-brand-orange align-middle" />
        </span>
      )}
    </Link>
  );
}
