import { type ReactNode } from "react";

type SectionBg = "white" | "gray" | "dark" | "orange-light";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: SectionBg;
}

const bgClasses: Record<SectionBg, string> = {
  white: "bg-white",
  gray: "bg-brand-gray-50",
  dark: "bg-brand-black text-white",
  "orange-light": "bg-brand-orange-light",
};

export function Section({
  id,
  children,
  className = "",
  bg = "white",
}: SectionProps) {
  return (
    <section id={id} className={`section-padding ${bgClasses[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.5rem] ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-brand-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
