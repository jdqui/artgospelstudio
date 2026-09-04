import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ticker from "@/components/Ticker";
import Image from 'next/image';

import type { Project } from '@/data/homeData';
import { mojoSocmedAdTicker, resSocmedAdTicker } from '@/data/homeData';
import Carousel from '../Carousel';
import ProjectNav from '../ProjectNav';

type Props = {
    project: Project;
}

export default function Mojo({ project }: Props) {
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

            <section className='mojo-images flex flex-row gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/mojo-images/square-1.png"
                    alt="mojo sample image"
                    width={2332}
                    height={2384}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/mojo-images/square-2.png"
                    alt="mojo products image"
                    width={2332}
                    height={2384}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Process</h1>
                <p className='text-base lg:text-lg'> Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. </p>
            </article>

            <section className='mojo-packaging grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/mojo-images/packaging-1.png"
                    alt="mojo packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/mojo-images/packaging-2.png"
                    alt="mojo packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/mojo-images/packaging-3.png"
                    alt="mojo packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/mojo-images/packaging-4.png"
                    alt="mojo packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <section className='mojo-full'>
                <Image
                    src="/mojo-images/ad-full.png"
                    alt="mojo products image"
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
                    {[...mojoSocmedAdTicker, ...mojoSocmedAdTicker, ...mojoSocmedAdTicker].map((logo, index) => (
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

            <section className='mojo-images flex flex-row gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/mojo-images/square-3.png"
                    alt="mojo sample image"
                    width={2332}
                    height={2384}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/mojo-images/square-4.png"
                    alt="mojo products image"
                    width={2332}
                    height={2384}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <ProjectNav currentSlug={project.slug} />

            <footer>
                <Footer/>
            </footer>

        </main>
    )
}