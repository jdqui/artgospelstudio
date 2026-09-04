"use client";

import Link from "next/link";
import React, { useState, useCallback } from "react";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "ghost" | "icon";
  copyText?: string;
  copiedLabel?: React.ReactNode;
};

type LinkButtonProps = BaseProps &
  React.ComponentProps<typeof Link> & {
    href: string;
    copyText?: undefined;
  };

type NativeButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

export default function Button({
  children,
  href,
  className = "",
  variant = "solid",
  copyText,
  copiedLabel = "Copied!",
  ...props
}: ButtonProps) {
  const [copied, setCopied] = useState(false);

  // no display utility here anymore — each variant/usage sets its own
  const baseClasses = "justify-center items-center text-sm sm:text-base lg:text-lg transition-colors";

  const solidClasses =
    "inline-flex rounded-md px-4 lg:px-8 py-1 lg:py-2 bg-[var(--primary-color)] text-white hover:bg-[var(--primary-accent)]";
  const ghostClasses =
    "inline-flex rounded-md px-4 lg:px-8 py-1 lg:py-2 text-[var(--primary-font-color)] hover:text-[var(--tertiary-font-color)]";
  // icon: no display/shape baked in — caller controls layout (flex/flex-col/etc) via className
  const iconClasses = "text-[var(--primary-font-color)] hover:text-[var(--tertiary-font-color)]";

  const variantClasses =
    variant === "solid" ? solidClasses : variant === "ghost" ? ghostClasses : iconClasses;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  const handleCopyClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (copyText) {
        try {
          await navigator.clipboard.writeText(copyText);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy text:", err);
        }
      }
      (props as React.ButtonHTMLAttributes<HTMLButtonElement>).onClick?.(e);
    },
    [copyText, props]
  );

  if (href) {
    const isHashLink = href.includes("#");
    const anchorProps = { ...props, href } as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const linkProps = { ...props, href } as React.ComponentProps<typeof Link>;

    if (isHashLink) {
      return (
        <a className={combinedClasses} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link className={combinedClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${combinedClasses} disabled:opacity-50`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      onClick={copyText ? handleCopyClick : (props as React.ButtonHTMLAttributes<HTMLButtonElement>).onClick}
    >
      {copyText && copied ? copiedLabel : children}
    </button>
  );
}