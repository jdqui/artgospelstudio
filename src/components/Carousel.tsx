"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselItem = {
    src: string;
    alt?: string;
};

type CarouselProps = {
    items: CarouselItem[];
    className?: string;
};

export default function Carousel({
    items = [],
    className = "",
}: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "center",
        containScroll: false,
        startIndex: 1,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (i: number) => {
            if (emblaApi) emblaApi.scrollTo(i);
        },
        [emblaApi]
    );

    const onSelect = useCallback(
        (api: NonNullable<typeof emblaApi>) => {
            setSelectedIndex(api.selectedScrollSnap());
            setCanPrev(api.canScrollPrev());
            setCanNext(api.canScrollNext());
            setIsReady(true);
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    if (!items.length) return null;

    return (
        <div className={`relative w-full ${className}`}>
            <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === selectedIndex}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === selectedIndex
                                    ? "w-6 bg-black"
                                    : "w-2 bg-black/20 hover:bg-black/30"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
                <div
                    className="overflow-hidden"
                    ref={emblaRef}
                >
                    <div className="flex items-start gap-4">
                        {items.map((item, i) => (
                            <div
                                key={i}
                                className="relative min-w-0 flex-[0_0_80%] sm:flex-[0_0_65%] md:flex-[0_0_50%] lg:flex-[0_0_40%] xl:flex-[0_0_34%] transition-opacity duration-300"
                                style={{
                                    opacity:
                                        i === selectedIndex ? 1 : 0.4,
                                }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt || ""}
                                    width={0}
                                    height={0}
                                    sizes="80vw"
                                    className="w-full h-auto rounded-2xl"
                                    priority={i === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Edge gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-4 sm:w-16 md:w-32 bg-gradient-to-r from-[#FFFFFF80] to-transparent" />

                <div className="pointer-events-none absolute inset-y-0 right-0 w-4 sm:w-16 md:w-32 bg-gradient-to-l from-[#FFFFFF80] to-transparent" />
            </div>
        </div>
    );
}