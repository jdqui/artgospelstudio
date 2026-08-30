export type Project = {
  id: string;
  slug: string;
  title: string;
  imageSrc: string;
  imageHoverSrc: string;
  imageAlt: string;
  href: string;
  containerClass?: string;
  services: string;       // only used on the detail page
  description: string;      // only used on the detail page
};

export const projects: Project[] = [
    {
        slug: "Plukkers",
        title: "Plukkers",
        services: "Email Flows, Campaigns",
        image: "/brand-hero/plukkers-hero.png",
        description: "A homegrown Dutch business that sells quality vegetables and fruits. We've helped Plukkers create an email campaign that aims to reach its target audience to communicate and drive sales. The designs were focused on showcasing Plukkers’ high quality harvests, all while making them look cozy and approachable.",
    },
    {
        slug: "Dim Mak",
        title: "Dim Mak",
        services: "Email Flows, Campaigns",
        image: "/brand-hero/dimmak-hero.png",
        description: "A streetwear brand that focuses on collaborations with mainly Japanese animations such as the popular series: Jujutsu Kaisen, One Piece, and Tokyo Ghoul. A minimalistic approach were done for the emails with monochromatic color palette, making the product themselves the center of attention with their vibrant images.",
    },
    {
        slug: "resbiotic",
        title: "resbiotic",
        services: "Branding, Email Flows, Ads, Website Design, Packaging Design",
        image: "/brand-hero/res-hero.png",
        description: "A rising supplement brand utilizing the body’s Gut-X Axis. Our collaboration with resbiotic ranges from social media materials to packaging designs and everything in between. With a minimalistic approach accompanied by striking vibrant colors, resbiotic were made to catch your eyes without being overwhelmed.",
    },
    {
        slug: "Oatified",
        title: "Oatified",
        services: "Branding, Packaging",
        image: "/brand-hero/oatified-hero.png",
        description: "Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.",
    },
    {
        slug: "Mojo",
        title: "Mojo",
        services: "Packaging, Ads",
        image: "/brand-hero/mojo-hero.png",
        description: "Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.",
    },
    {
        slug: "Able Biolabs",
        title: "Able Biolabs",
        services: "Branding, Creative Direction, Brand Guidelines, Website Design",
        image: "/brand-hero/ablebiolabs-hero.png",
        description: "Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.",
    },
    {
        slug: "Heaven Scent",
        title: "Heaven Scent",
        services: "",
        image: "/brand-hero/heavenscent-hero.png",
        description: "",
    },
    {
        slug: "Strippies",
        title: "Strippies",
        services: "Website, Ads",
        image: "/brand-hero/strippies-hero.png",
        description: "",
    },
]