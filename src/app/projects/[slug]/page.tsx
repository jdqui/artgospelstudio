import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/data/homeData';
import { projectComponents } from '@/data/projectComponents';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} - Case Study | Art Gospel Studio`,
    description: `Case study: ${project.title} - ${project.service}. Custom branding, design, and digital solutions by Art Gospel Studio.`,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const ProjectComponent = projectComponents[slug];

  // Schema markup for the project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://artgospelstudio.com/projects/${slug}`,
    name: project.title,
    description: `Case study: ${project.title} - ${project.service}`,
    image: project.imageSrc,
    creator: {
      "@type": "Person",
      name: "Alaine",
      url: "https://artgospelstudio.com",
    },
    keywords: project.service,
  };

  if (!ProjectComponent) {
    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <h1>{project.title}</h1>
        <p>Full case study coming soon.</p>
      </main>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectComponent project={project} />
    </>
  );
}