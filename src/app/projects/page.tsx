import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/homeData"

export const metadata = {
  title: "Projects & Case Studies | Art Gospel Studio",
  description: "Explore our portfolio of branding, packaging, email design, and website design projects. See how we've helped B2B and DTC brands succeed.",
  keywords: "design portfolio, case studies, branding projects, graphic design work, brand design examples",
};

export default function ProjectsPage() {
  return (
    <main>
        <header>
            <Header/>
        </header>

        <section className="works-section flex flex-col  p-8 sm:p-10 lg:px-15 lg:py-15 xl:mx-15 xl:mx-25" aria-labelledby="works-heading">
          <h1 id="works-heading" className="sr-only">Our Projects and Case Studies</h1>

          <ul className="works-grid grid md:grid-cols-2 lg:grid-cols-3 gap-12 list-none">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  imageSrc={project.imageSrc}
                  hoverImageSrc={project.imageHoverSrc}
                  imageAlt={project.imageAlt}
                  title={project.title}
                  href={`/projects/${project.slug}`}
                  containerClass={project.containerClass}
                />
              </li>
            ))}
          </ul>
        </section>

        <footer>
            <Footer/>
        </footer>
    </main>
  );
}