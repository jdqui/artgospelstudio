import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

import type { Project } from '@/data/homeData';

type Props = {
    project: Project;
}

export default function DimMak({ project }: Props) {
    return(
        <main className='w-full h-full flex flex-col gap-15 lg:gap-30'>
            <header 
            className='head h-[50vh] xl:min-h-screen bg-cover bg-center'
            style={{ backgroundImage: `url(${project.imageSrc})` }}
            >
                <Header variant="white"/>
            </header>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-5xl lg:text-6xl text-[var(--primary-font-color)]'>{project.title}</h1>
                <p className='text-base lg:text-lg'> {project.service} </p>
                <p className='text-base lg:text-lg'> A streetwear brand that focuses on collaborations with mainly Japanese animations such as the popular series: Jujutsu Kaisen, One Piece, and Tokyo Ghoul. A minimalistic approach were done for the emails with monochromatic color palette, making the product themselves the center of attention with their vibrant images.</p>
            </article>
        
            <section className='plukkers-images flex items-start px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Carousel
                    items={[
                        {src:"/dimmak-images/email-flow-1.png", alt:"Dim Mak email flow"},
                        {src:"/dimmak-images/email-flow-2.png", alt:"Dim Mak email flow"},
                        {src:"/dimmak-images/email-flow-3.png", alt:"Dim Mak email flow"},
                    ]}
                />
            </section>
            
            <footer>
                <Footer/>
            </footer>
        </main>
    )
}