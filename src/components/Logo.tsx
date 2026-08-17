import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  variant?: "light" | "dark";
}

const LOGO_SOURCES = {
  light: { src: "/logo1.png", aspect: 1009 / 505 },
  dark: { src: "/logo2.png", aspect: 1430 / 233 },
} as const;

export function Logo({
  className = "",
  height = 52,
  variant = "light",
}: LogoProps) {
  const { src, aspect } = LOGO_SOURCES[variant];
  const width = Math.round(height * aspect);
  const isDark = variant === "dark";

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
        priority={!isDark}
        className={
          isDark
            ? "h-auto w-full max-h-14 object-contain object-left sm:max-h-16 md:max-h-[4.5rem]"
            : "max-w-full object-contain"
        }
        style={
          isDark
            ? { maxWidth: "360px" }
            : { height, width: "auto", maxWidth: "min(100%, 420px)" }
        }
      />
    </Link>
  );
}
