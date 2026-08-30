import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/homeData"

export default function ProjectsPage() {
  return (
    <main>
        <header>
            <Header/>
        </header>

        <section className="works-section flex flex-col  p-8 sm:p-10 lg:px-15 lg:py-15 xl:mx-15 xl:mx-25" aria-labelledby="works-heading">

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