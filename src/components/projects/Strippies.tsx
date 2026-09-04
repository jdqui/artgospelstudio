import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ticker from "@/components/Ticker";
import Image from 'next/image';

import type { Project } from '@/data/homeData';
import { strippiesSocmedAdTicker } from '@/data/homeData';
import Carousel from '../Carousel';
import ProjectNav from '../ProjectNav';

type Props = {
    project: Project;
}

export default function Strippies({ project }: Props) {
    return(
        <main className='w-full h-full flex flex-col gap-15 xl:gap-30'>
            <header 
            className='head h-[50vh] xl:min-h-screen bg-cover bg-center'
            style={{ backgroundImage: `url(${project.imageSrc})` }}
            >
                <Header variant="white"/>
            </header>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-5xl lg:text-6xl text-[var(--primary-font-color)]'>{project.title}</h1>
                <p className='text-base lg:text-lg'> {project.service} </p>
                <p className='text-base lg:text-lg'> Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. </p>
            </article>

            <section className='strippies-socmed-ads'>
                <Ticker speed="slow" pauseOnHover={true} edgeFade={false} gap="gap-4">
                    {[...strippiesSocmedAdTicker, ...strippiesSocmedAdTicker, ...strippiesSocmedAdTicker].map((logo, index) => (
                    <div 
                        key={`${logo.id}-${index}`}
                        className={`relative w-auto shrink-0 ${logo.heightClass || "h-50 md:h-90"}`}
                    >
                        <Image
                        src={logo.path}
                        alt={logo.label}
                        width={1455}
                        height={1455}
                        className="h-full w-auto object-contain  rounded-2xl"
                        />
                    </div>
                    ))}
                </Ticker>
            </section>

            <section className='strippies-full'>
                <Image
                    src="/strippies-images/website-design.png"
                    alt="strippies products image"
                    width={1440}
                    height={932}
                    className="w-full h-full h-auto object-contain"
                />
            </section>

            <section className='strippies-images flex flex-col md:flex-row items-start justify-center gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <div className="w-full lg:max-w-[50%] overflow-visible">
                    <Image
                        src="/strippies-images/website-contact.png"
                        alt="strippies sample image"
                        width={2353}
                        height={4262}
                        className="w-full h-auto object-contain rounded-2xl"
                    />
                </div>
                <div className="w-full lg:max-w-[50%] overflow-visible">
                    <Image
                        src="/strippies-images/website-shop.png"
                        alt="strippies products image"
                        width={2353}
                        height={3182}
                        className="w-full h-auto object-contain rounded-2xl"
                    />
                </div>
            </section>

            <ProjectNav currentSlug={project.slug} />

            <footer>
                <Footer/>
            </footer>

        </main>
    )
}