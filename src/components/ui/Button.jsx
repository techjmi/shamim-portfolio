"use client";
// Reusable Button with variant/size/color and optional navigation
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Button(props) {
  const {
    as = "button", // 'button' | 'a' | 'link'
    href,
    onClick,
    type = "button",
    disabled = false,
    variant = "filled", // 'filled' | 'outline' | 'ghost' | 'link'
    size = "md", // 'sm' | 'md' | 'lg'
    color = "primary", // 'primary' | 'secondary'
    radius = "md", // 'none' | 'sm' | 'md' | 'lg' | 'full'
    fullWidth = false,
    loading = false,
    loadingLabel = "Loading...",
    icon: Icon,
    iconPosition = "left", // 'left' | 'right'
    className = "",
    children,
    ...rest
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-5 text-base",
  };
  const radii = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };
  const colorMap = {
    primary: {
      filled: "bg-blue-600 hover:bg-blue-700 text-white",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      ghost: "text-blue-600 hover:bg-blue-50",
      link: "text-blue-600 underline-offset-4 hover:underline",
    },
    secondary: {
      filled: "bg-slate-700 hover:bg-slate-800 text-white",
      outline: "border border-slate-600 text-slate-700 hover:bg-slate-50",
      ghost: "text-slate-700 hover:bg-slate-50",
      link: "text-slate-700 underline-offset-4 hover:underline",
    },
  };

  const variantClasses = colorMap[color]?.[variant] || colorMap.primary.filled;
  const widthClass = fullWidth ? "w-full" : "";
  const classes = [
    base,
    sizes[size] || sizes.md,
    radii[radius] || radii.md,
    variantClasses,
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8v4"
            fill="currentColor"
          />
        </svg>
      )}
      {Icon && iconPosition === "left" ? <Icon /> : null}
      <span>{loading ? loadingLabel : children}</span>
      {Icon && iconPosition === "right" ? <Icon /> : null}
    </>
  );

  const router = useRouter();

  // If explicitly rendering as an anchor or link, use Next.js Link
  if (as === "a" || (href && (as === "link" || variant === "link"))) {
    return (
      <Link href={href || "#"} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  // Default: real button element. If href is provided, navigate on click.
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e?.defaultPrevented) return;
    if (href) router.push(href);
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      className={classes}
      aria-busy={loading ? "true" : undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
