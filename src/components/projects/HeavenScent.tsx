import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ticker from "@/components/Ticker";
import Image from 'next/image';

import type { Project } from '@/data/homeData';
import { heavenscentSocmedAdTicker } from '@/data/homeData';
import Carousel from '../Carousel';
import ProjectNav from '../ProjectNav';

type Props = {
    project: Project;
}

export default function HeavenScent({ project }: Props) {
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
                <p className='text-base lg:text-lg'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </article>

            <section className='heavenscent-images flex flex-row gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/heavenscent-images/square-1.png"
                    alt="heavenscent sample image"
                    width={2332}
                    height={2384}
                    className="w-full lg:max-w-[50%] h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/heavenscent-images/square-2.png"
                    alt="heavenscent products image"
                    width={2332}
                    height={2384}
                    className="w-full lg:max-w-[50%] h-auto object-contain rounded-2xl"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Process</h1>
                <p className='text-base lg:text-lg'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </article>

            <section className='heavenscent-packaging flex flex-col md:flex-row gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/heavenscent-images/packaging-1.png"
                    alt="heavenscent packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/heavenscent-images/packaging-2.png"
                    alt="heavenscent packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/heavenscent-images/packaging-3.png"
                    alt="heavenscent packaging image"
                    width={1125}
                    height={1125}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <section className='heavenscent-full'>
                <Image
                    src="/heavenscent-images/ad-full.png"
                    alt="heavenscent products image"
                    width={1440}
                    height={932}
                    className="w-full h-full h-auto object-contain"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Outcome</h1>
                <p className='text-base lg:text-lg'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </article>

            <section className='heavenscent-socmed-ads'>
                <Ticker speed="slow" pauseOnHover={true} edgeFade={false} gap="gap-4">
                    {[...heavenscentSocmedAdTicker, ...heavenscentSocmedAdTicker, ...heavenscentSocmedAdTicker].map((logo, index) => (
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

            <ProjectNav currentSlug={project.slug} />

            <footer>
                <Footer/>
            </footer>

        </main>
    )
}