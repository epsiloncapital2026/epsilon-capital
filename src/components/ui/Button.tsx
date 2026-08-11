import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white shadow-md shadow-brand-orange/20 hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/25 hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "bg-white text-brand-black border border-brand-gray-200 hover:border-brand-gray-400 hover:bg-brand-gray-50 hover:scale-[1.01] active:scale-[0.99]",
  outline:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 hover:scale-[1.01] active:scale-[0.99]",
  ghost:
    "bg-transparent text-brand-black hover:text-brand-orange hover:scale-[1.01]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
