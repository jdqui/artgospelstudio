import React, { ReactNode, Children, Fragment } from "react";
import Image from "next/image";

interface TickerProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  dividerImage?: string;
  pauseOnHover?: boolean;
  edgeFade?: boolean;
  gap?: string;
}

export default function Ticker({ 
  children, 
  speed = "normal", 
  dividerImage, 
  pauseOnHover = false, 
  edgeFade = true,
  gap = "gap-15 sm:gap-20",
}: TickerProps) {
  
  const speedClasses = {
    slow: "[animation-duration:40s]",
    normal: "[animation-duration:25s]",
    fast: "[animation-duration:15s]",
  };

  const renderContent = () => {
    if (!dividerImage) return children;

    return Children.map(children, (child, index) => (
      <Fragment key={index}>
        {child}
        <div className="relative h-6 w-6 shrink-0 opacity-60">
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
      {edgeFade && (
        <>
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[var(--secondary-background)] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[var(--secondary-background)] to-transparent" />
        </>
      )}
      <div 
        className={`flex w-max items-center ${gap} px-8 animate-ticker will-change-transform ${speedClasses[speed]} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {contentArray}
        <div className={`flex shrink-0 items-center ${gap}`} aria-hidden="true">
          {contentArray}
        </div>
      </div>
    </div>
  );
}