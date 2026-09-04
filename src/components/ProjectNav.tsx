'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/homeData';
import type { Project } from '@/data/homeData';

interface ProjectNavProps {
  currentSlug: string;
}

export default function ProjectNav({ currentSlug }: ProjectNavProps) {
  const router = useRouter();

  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projects.length - 1;

  const prevProject: Project | null = hasPrev ? projects[currentIndex - 1] : null;
  const nextProject: Project | null = hasNext ? projects[currentIndex + 1] : null;

  const goTo = (slug: string) => router.push(`/projects/${slug}`);

  if (!hasPrev && !hasNext) return null;

  return (
    <nav className="w-full px-6 md:px-12">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {hasPrev ? (
          <button
            key={prevProject!.id}
            onClick={() => goTo(prevProject!.slug)}
            className="flex items-center gap-3 text-left group max-w-[45%]"
          >
            <ChevronLeft className="w-5 h-5 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm md:text-base">
              <span>{prevProject!.title}</span>
              {' — '}
              <span>{prevProject!.service}</span>
            </span>
          </button>
        ) : (
          <div /> 
        )}

        {hasNext ? (
          <button
            key={nextProject!.id}
            onClick={() => goTo(nextProject!.slug)}
            className="flex items-center gap-3 text-right group max-w-[45%]"
          >
            <span className="text-sm md:text-base">
              <span>{nextProject!.title}</span>
              {' — '}
              <span>{nextProject!.service}</span>
            </span>
            <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <div /> 
        )}
      </div>
    </nav>
  );
}