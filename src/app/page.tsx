import Head from "next/head";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Ticker from "@/components/Ticker";
import Image from "next/image";
import { projects, processSteps, personJsonLd, workedWithTicker, servicesTicker } from "@/data/homeData";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Art Gospel - Providing skills & ideas to help propel your brand</title>
        <meta
          name="description"
          content="From brand identity to digital design, I craft visuals that tell stories and build connections. My expertise spans digital and print —bringing strategy and creativity together for impactful results."
        />
        <link rel="canonical" href="https://artgospelstudio.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Art Gospel - Providing skills & ideas to help propel your brand" />
        <meta
          property="og:description"
          content="Branding, packaging, email flows, and website design for B2B and DTC brands."
        />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />
        <meta property="og:url" content="https://artgospelstudio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Art Gospel - Providing skills & ideas to help propel your brand" />
        <meta
          name="twitter:description"
          content="Branding, packaging, email flows, and website design for B2B and DTC brands."
        />
        <meta name="twitter:image" content="https://yourdomain.com/og-image.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>

      <main className="homepage w-full h-full flex flex-col gap-4 md:gap-10 xl:gap-20">
        <header className="head min-h-[50vh] xl:min-h-screen bg-[url('/artgospel-hero.png')] bg-cover bg-center">
          <Header />
        </header>

        <section className="works-section flex flex-col p-8 sm:p-10 lg:px-15 lg:py-15 xl:mx-15 xl:mx-25" aria-labelledby="works-heading">
          <div className="flex justify-between items-center">
            <h2 id="works-heading" className="text-5xl sm:text-6xl xl:text-7xl text-[var(--primary-font-color)]">Works</h2>
            <Button href="/projects" variant="solid"> View All Projects </Button>
          </div>

          <ul className="works-grid grid xl:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-10 lg:gap-8 mt-6 sm:mt-15 list-none">
            {projects.slice(0, 6).map((project) => (
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

        <section
          className="worked-with flex flex-col text-center justify-center bg-[var(--secondary-background)] gap-6 sm:gap-8 px-10 py-10 lg:px-15 lg:py-15"
          aria-labelledby="worked-with-heading"
        >
          <h3 id="worked-with-heading" className="text-base sm:text-xl text-[var(--quinary-font-color)]"> We've worked with </h3>
          
          <Ticker speed="slow" pauseOnHover={true} >
            {[...workedWithTicker, ...workedWithTicker, ...workedWithTicker].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`}
                className={`relative w-auto shrink-0 ${logo.heightClass || "h-8 md:h-10"}`}
              >
                <Image
                  src={logo.path}
                  alt={logo.label}
                  width={128}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </Ticker>
        </section>

        <section className="service-section flex flex-col lg:flex-row gap-4 sm:gap-15 p-8 sm:p-10 lg:px-15 lg:py-15 xl:mx-15 xl:mx-25" aria-labelledby="capabilities-heading">
          <div className="capabilities flex flex-col gap-7 lg:w-3/5 xl:w-1/3">
            <h3 className="text-sm lg:text-lg"> ( SERVICES ) </h3>
            <h2 id="capabilities-heading" className="text-5xl sm:text-6xl xl:text-7xl text-[var(--primary-font-color)]"> Capabilities </h2>
            <p className="text-lg text-[var(--primary-font-color)]"> From brand identity to digital design, I craft visuals that tell stories and build connections. My expertise spans digital and print —bringing strategy and creativity together for impactful results. </p>
            <Button href="/#connect" variant="solid" className="w-fit self-start">
              Let's Connect
            </Button>
          </div>
          <div className="capabilities-table flex w-full lg:w-2/5 xl:w-1/2 pt-4 sm:pt-7 ml-auto justify-end">
            <ul className="w-full md:text-lg lg:text-xl text-left text-[var(--primary-font-color)] list-none grid grid-cols-1 sm:grid-cols-2">
              <li className="border-b-[0.5px] border-[var(--primary-color)] py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Creative Direction</span>
              </li>
              <li className="border-b-[0.5px] border-[var(--primary-color)] py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Branding</span>
              </li>
              <li className="border-b-[0.5px] border-[var(--primary-color)] py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Email Design</span>
              </li>
              <li className="border-b-[0.5px] border-[var(--primary-color)] py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Social Media Ads</span>
              </li>
              <li className="border-b-[0.5px] border-[var(--primary-color)] py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Packaging Design</span>
              </li>
              <li className="border-b-[0.5px] border-[var(--primary-color)] py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Website Design</span>
              </li>
              <li className="py-4 sm:py-6 lg:py-8 flex items-start gap-2">
                <img src="/flower.svg" alt="" className="w-6 h-6 shrink-0" />
                <span className="leading-6">Print Ads</span>
              </li>
            </ul>
          </div>
        </section>

        <section
          className="process-section flex flex-col lg:flex-row p-8 sm:p-10 lg:px-15 lg:py-15 xl:mx-15 xl:mx-25 rounded-3xl overflow-hidden"
          aria-labelledby="process-heading"
        >
        <div className="process-image relative w-full lg:w-1/3 aspect-[1/1] lg:aspect-auto rounded-t-3xl lg:rounded-t-none lg:rounded-tl-3xl lg:rounded-b-3xl border border-[var(--secondary-accent)] overflow-hidden">
          <Image
            src="/process-section.png"
            alt="MOJO promotional material."
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px)"
          />
        </div>
          <div className="process-card flex w-full lg:w-2/3 flex-col justify-center space-y-4 bg-[var(--secondary-accent)] p-8 md:px-18 md:py-12 lg:px-30 lg:py-20 rounded-b-3xl lg:rounded-b-none lg:!rounded-r-3xl">
            <div className="process-header space-y-4">
              <h3 className="text-sm lg:text-lg">
                ( WORKING TOGETHER )
              </h3>
              <h2 id="process-heading" className="text-5xl sm:text-6xl xl:text-7xl text-[var(--primary-font-color)]">
                Process
              </h2>
            </div>

            <ol className="process-content space-y-4 list-none">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="flex gap-6 lg:gap-10 text-[var(--primary-font-color)]"
                >
                  <span className="text-lg lg:text-2xl">
                    {step.number}
                  </span>

                  <div className="space-y-2 lg:space-y-4">
                    <h4 className="text-lg lg:text-2xl">
                      {step.title}
                    </h4>

                    <p className="text-sm lg:text-lg">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="about-section flex flex-col bg-[var(--secondary-background)] text-[var(--quarternary-font-color)] gap-8 sm:gap-10 p-8 sm:p-10 lg:p-15 xl:p-25 text-center items-center"
          aria-labelledby="about-heading"
        >
          <Image
            src="/avatar.png"
            alt="Alaine's Avatar"
            width={900}
            height={900}
            className="w-30 h-30 md:w-35 md:h-35 mx-auto"
          />
          <h3 className="text-sm lg:text-lg">
            ( INTRODUCTION )
          </h3>
          <h2 id="about-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl/20"> Senior Graphic Designer and Illustrator helping brands bridge the gap between business and design. </h2>
          <p className="text-md lg:text-lg lg:w-5/8">
            Hey, I'm Alaine! A designer and illustrator based in the Philippines, I help B2B and DTC brands turn ideas into visuals that tell stories, build connections, and drive results. With a thoughtful and strategic approach, I craft designs that give brands the clarity and confidence to take their next big step.
          </p>
          <Button href="#connect" variant="solid"> Let's work together </Button>
        </section>

        <section className="services-ticker -mt-4 md:-mt-10 xl:-mt-20 border-b-1 border-solid border-[var(--secondary-background)]">
          <Ticker speed="slow" edgeFade={false} pauseOnHover={false} gap="gap-10" dividerImage="/flower.svg">
            {[...servicesTicker, ...servicesTicker, ...servicesTicker].map((service, index) => (
              <span key={`${service.id}-${index}`} className="text-md lg:text-lg">
                {service.text}
              </span>
            ))}
          </Ticker>
        </section>

        <section id="connect" className="connect flex flex-col lg:flex-row gap-10 p-8 sm:p-10 lg:px-15 lg:py-15 xl:mx-15 xl:mx-25">
          <div className=" flex flex-col items-start gap-7 w-full lg:w-2/5">
            <h2 id="connect-heading" className="text-5xl sm:text-6xl xl:text-7xl text-[var(--primary-font-color)]"> Think we'll make a great fit? </h2>
            <p className="text-md lg:text-lg text-[var(--primary-font-color)]"> Let's create something great together! Schedule a call, drop me a message, or fill out the form—I'd love to hear about your project. </p>
            <Button copyText="alaine.artist@gmail.com" variant="ghost" className="gap-3 !p-0">
              <Image
                src="/email.svg"
                alt="Prefer to chat through email? Copy here."
                width={30}
                height={30}
                className="w-5 lg:w-6"
              />
              <p className="text-sm xl:text-lg justify-start">Prefer to chat through email? Copy here.</p>
            </Button>
          </div>
          <div className="form flex w-full lg:w-1/2 xl:w-2/5 ml-auto">
            <ContactForm />
          </div>
        </section>

        <footer>
          <Footer/>
        </footer>

      </main>
    </>
  );
}