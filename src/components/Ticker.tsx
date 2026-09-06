"use client";

import React, { ReactNode, Children, Fragment, useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/lib/breakpoints";
import Image from "next/image";

interface TickerProps {
  children: ReactNode;
  speed?: "slower" | "slow" | "normal" | "fast";
  mobileSpeed?: "slower" | "slow" | "normal" | "fast";
  dividerImage?: string;
  pauseOnHover?: boolean;
  edgeFade?: boolean;
  mobileEdgeFade?: boolean;
  gap?: string;
}

export default function Ticker({
  children,
  speed = "normal",
  mobileSpeed,
  dividerImage,
  pauseOnHover = false,
  edgeFade = true,
  mobileEdgeFade,
  gap = "gap-15 sm:gap-20",
}: TickerProps) {
  const [mounted, setMounted] = useState(false);
  const isMdUp = useMediaQuery(breakpoints.md);

  useEffect(() => setMounted(true), []);

  // Resolve responsive values: fall back to base props until mounted
  // (avoids SSR/client mismatch), then pick mobile vs desktop values.
  const resolvedSpeed =
    mounted && !isMdUp && mobileSpeed ? mobileSpeed : speed;

  const resolvedEdgeFade =
    mounted && !isMdUp && mobileEdgeFade !== undefined
      ? mobileEdgeFade
      : edgeFade;

  const speedClasses = {
    slower: "[animation-duration:60s]",
    slow: "[animation-duration:40s]",
    normal: "[animation-duration:25s]",
    fast: "[animation-duration:15s]",
  };

  const renderContent = () => {
    if (!dividerImage) return children;

    return Children.map(children, (child, index) => (
      <Fragment key={index}>
        {child}
        <div className="relative h-6 w-6 shrink-0">
          <Image
            src={dividerImage}
            alt="Ticker section divider"
            fill
            className="object-contain"
            sizes="24px"
          />
        </div>
      </Fragment>
    ));
  };

  const contentArray = Children.toArray(renderContent()).filter(Boolean);

  return (
    <div className="relative w-full overflow-hidden py-2">
      {resolvedEdgeFade && (
        <>
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[var(--secondary-background)] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[var(--secondary-background)] to-transparent" />
        </>
      )}
      <div
        className={`flex w-max items-center ${gap} px-8 animate-ticker will-change-transform ${speedClasses[resolvedSpeed]} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {contentArray}
        <div className={`flex shrink-0 items-center ${gap}`} aria-hidden="true">
          {contentArray}
        </div>
      </div>
    </div>
  );
}