import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  variant?: "light" | "dark";
}

const LOGO_ASPECT = 1009 / 505;

export function Logo({
  className = "",
  height = 52,
  variant = "light",
}: LogoProps) {
  const src = variant === "dark" ? "/logo1-dark.png" : "/logo1.png";
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Epsilon Capital — Accueil"
    >
      <Image
        src={src}
        alt="Epsilon Capital"
        width={width}
        height={height}
        priority={variant === "light"}
        className="object-contain"
        style={{ height, width }}
      />
    </Link>
  );
}
