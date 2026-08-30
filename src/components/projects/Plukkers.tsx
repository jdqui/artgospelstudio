import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

import type { Project } from '@/data/homeData';

type Props = {
    project: Project;
}

export default function Plukkers({ project }: Props) {
    return(
        <main className='w-full h-full flex flex-col gap-20 xl:gap-30'>
            <header 
            className='head h-[50vh] xl:min-h-screen bg-cover bg-center'
            style={{ backgroundImage: `url(${project.imageSrc})` }}
            >
                <Header variant="white"/>
            </header>

            <article className='flex flex-col gap-4 px-10 sm:px-30 lg:px-60 xl:px-80'>
                <h1 className='text-5xl lg:text-6xl text-[var(--primary-font-color)]'>{project.title}</h1>
                <p className='text-base lg:text-lg'> {project.service} </p>
                <p className='text-base lg:text-lg'> A homegrown Dutch business that sells quality vegetables and fruits. We've helped Plukkers create an email campaign that aims to reach its target audience to communicate and drive sales. The designs were focused on showcasing Plukkers’ high quality harvests, all while making them look cozy and approachable.</p>
            </article>

            <section className='plukkers-images flex items-start px-10 sm:px-30 lg:px-60 xl:px-80'>
                <Carousel
                    items={[
                        {src:"/plukkers-images/email-flow-1.png", alt:"Plukkers email flow"},
                        {src:"/plukkers-images/email-flow-2.png", alt:"Plukkers email flow"},
                        {src:"/plukkers-images/email-flow-3.png", alt:"Plukkers email flow"},
                    ]}
                />
            </section>
            
            <footer>
                <Footer/>
            </footer>
        </main>
    )
}