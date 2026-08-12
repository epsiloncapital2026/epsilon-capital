import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  height?: number;
  /** "light" for white backgrounds, "dark" for dark backgrounds */
  variant?: "light" | "dark";
}

const logoSources = {
  light: "/logo1.jpeg",
  dark: "/logo.png",
} as const;

export function Logo({
  className = "",
  height = 40,
  variant = "light",
}: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <Image
        src={logoSources[variant]}
        alt="Epsilon Capital"
        width={200}
        height={height}
        priority={variant === "light"}
        className="h-auto w-auto object-contain"
        style={{ maxHeight: `${height}px`, width: "auto" }}
      />
    </Link>
  );
}
