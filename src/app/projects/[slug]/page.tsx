import { notFound } from 'next/navigation';
import { projects } from '@/data/homeData';
import { projectComponents } from '@/data/projectComponents';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const ProjectComponent = projectComponents[slug];

  if (!ProjectComponent) {
    return (
      <main>
        <h1>{project.title}</h1>
        <p>Full case study coming soon.</p>
      </main>
    );
  }

  return <ProjectComponent project={project} />;
}