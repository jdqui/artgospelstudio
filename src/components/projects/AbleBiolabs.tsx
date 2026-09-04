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

export default function AbleBiolabs({ project }: Props) {
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
                <p className='text-base lg:text-lg'> Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.. </p>
            </article>

            <section className='ablebiolabs-images flex flex-row gap-4 justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Image
                    src="/ablebiolabs-images/branding-1.png"
                    alt="ablebiolabs branding image"
                    width={2332}
                    height={2384}
                    className="max-w-[50%] sm:w-full h-auto object-contain rounded-2xl"
                />
                <Image
                    src="/ablebiolabs-images/branding-2.png"
                    alt="ablebiolabs logo image"
                    width={2332}
                    height={2384}
                    className="max-w-[50%] sm:w-full h-auto object-contain rounded-2xl"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Process</h1>
                <p className='text-base lg:text-lg'> Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. </p>
            </article>

            <section className='ablebiolabs-full'>
                <Image
                    src="/ablebiolabs-images/creative-direction.png"
                    alt="ablebiolabs creative direction image"
                    width={1440}
                    height={932}
                    className="w-full h-full h-auto object-contain"
                />
            </section>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-xl lg:text-2xl text-[var(--primary-font-color)]'>The Outcome</h1>
                <p className='text-base lg:text-lg'> Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. </p>
            </article>

            <section className='ablebiolabs-images justify-center px-10 sm:px-30 lg:px-60 xl:px-80'>
                <div className='flex flex-row gap-4 justify-center pb-4'>
                    <Image
                    src="/ablebiolabs-images/branding-3.png"
                    alt="ablebiolabs branding image"
                    width={2332}
                    height={2384}
                    className="max-w-[50%] sm:w-full h-auto object-contain rounded-2xl"
                    />
                    <Image
                        src="/ablebiolabs-images/branding-4.png"
                        alt="ablebiolabs logo image"
                        width={2332}
                        height={2384}
                        className="max-w-[50%] sm:w-full h-auto object-contain rounded-2xl"
                    />
                </div>
                <Image
                    src="/ablebiolabs-images/web-design.png"
                    alt="ablebiolabs web design image"
                    width={4804}
                    height={2656}
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