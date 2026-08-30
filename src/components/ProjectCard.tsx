import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    imageSrc: string;
    hoverImageSrc: string;
    imageAlt: string;
    title: string;
    href?: string;
    containerClass?: string;
};

const ProjectCard = ({ imageSrc, hoverImageSrc, imageAlt, title, href = "#", containerClass = "" }: ProjectCardProps) => {
    return (
        <Link href={href} className={`group block ${containerClass}`}>
            <div className=" relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <Image
                    src={hoverImageSrc}
                    alt={imageAlt}
                    width={800}
                    height={500}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
            </div>

            <div className="flex justify-between pt-4">
                <p className="text-base lg:text-lg">{title}</p>
                <div className="relative block w-7 h-7 md:w-8 md:h-8 flex-none">
                    <Image
                        src="/arrow.png"
                        alt="See More from this Project"
                        width={40}
                        height={40}
                        className="absolute inset-0 w-full h-full block group-hover:hidden"
                    />
                    <Image
                        src="/arrow-hover.png"
                        alt="See More from this Project"
                        width={40}
                        height={40}
                        className="absolute inset-0 w-full h-full hidden group-hover:block"
                    />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;