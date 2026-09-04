import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ticker from "@/components/Ticker";
import Image from 'next/image';

import type { Project } from '@/data/homeData';
import { resSocmedAdTicker } from '@/data/homeData';
import Carousel from '../Carousel';
import ProjectNav from '../ProjectNav';

type Props = {
    project: Project;
}

export default function Res({ project }: Props) {
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
                <p className='text-base lg:text-lg'> A rising supplement brand utilizing the body’s Gut-X Axis. Our collaboration with resbiotic ranges from social media materials to packaging designs and everything in between. With a minimalistic approach accompanied by striking vibrant colors, resbiotic were made to catch your eyes without being overwhelmed. </p>
            </article>

            <section className='res-images flex flex-row gap-4 justify-center w-full px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/res-images/square-1.png"
                    alt="res sample image"
                    width={2332}
                    height={2384}
                    className="max-w-[50%] sm:w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/res-images/square-2.png"
                    alt="res products image"
                    width={2332}
                    height={2384}
                    className="max-w-[50%] sm:w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Process</h1>
                <p className='text-base lg:text-lg'> Because of their older target audience, easily readable and digestible content and design have been prioritized for resbiotic, without sacrificing its visual aesthetic. </p>
            </article>

            <section className='res-packaging grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/res-images/packaging-1.png"
                    alt="res packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/res-images/packaging-2.png"
                    alt="res packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/res-images/packaging-3.png"
                    alt="res packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/res-images/packaging-4.png"
                    alt="res packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <section className='res-full'>
                <Image
                    src="/res-images/web-design.png"
                    alt="res products image"
                    width={1440}
                    height={932}
                    className="w-full h-full h-auto object-contain"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Outcome</h1>
                <p className='text-base lg:text-lg'> Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. </p>
            </article>

            <section className='res-socmed-ads'>
                <Ticker speed="slow" pauseOnHover={true} edgeFade={false} gap="gap-4">
                    {[...resSocmedAdTicker, ...resSocmedAdTicker, ...resSocmedAdTicker].map((logo, index) => (
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

            <section className='res-carousel flex items-start px-10 md:px-15 xl:mx-15 xl:mx-50'>
                <Carousel
                    items={[
                        {src:"/res-images/email-flow-1.png", alt:"Res Email Flow"},
                        {src:"/res-images/email-flow-2.png", alt:"Res Email Flow"},
                        {src:"/res-images/email-flow-3.png", alt:"Res Email Flow"},
                    ]}
                />
            </section>

            <ProjectNav currentSlug={project.slug} />

            <footer>
                <Footer/>
            </footer>

        </main>
    )
}