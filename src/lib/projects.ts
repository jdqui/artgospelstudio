export type Project = {
  id: string;
  slug: string;
  title: string;
  imageSrc: string;
  imageHoverSrc: string;
  imageAlt: string;
  href: string;
  containerClass?: string;
  services: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "plukkers",
    slug: "plukkers",
    title: "Plukkers",
    imageSrc: "/brand-hero/plukkers-hero.png",
    imageHoverSrc: "/brand-hero/plukkers-hover.png",
    imageAlt: "Plukkers email flow and campaign design examples",
    href: "/projects/plukkers",
    services: "Email Flows, Campaigns",
    description:
      "A homegrown Dutch business that sells quality vegetables and fruits. We've helped Plukkers create an email campaign that aims to reach its target audience to communicate and drive sales. The designs were focused on showcasing Plukkers’ high quality harvests, all while making them look cozy and approachable.",
  },
  {
    id: "dimmak",
    slug: "dimmak",
    title: "Dim Mak",
    imageSrc: "/brand-hero/dimmak-hero.png",
    imageHoverSrc: "/brand-hero/dimmak-hover.png",
    imageAlt: "Dim Mak email flow and campaign design examples",
    href: "/projects/dimmak",
    services: "Email Flows, Campaigns",
    description:
      "A streetwear brand that focuses on collaborations with mainly Japanese animations such as the popular series: Jujutsu Kaisen, One Piece, and Tokyo Ghoul. A minimalistic approach were done for the emails with monochromatic color palette, making the product themselves the center of attention with their vibrant images.",
  },
  {
    id: "resbiotic",
    slug: "resbiotic",
    title: "resbiotic",
    imageSrc: "/brand-hero/res-hero.png",
    imageHoverSrc: "/brand-hero/res-hover.png",
    imageAlt: "resbiotic branding, email flows, ads, and website design",
    href: "/projects/resbiotic",
    services: "Branding, Email Flows, Ads, Website Design, Packaging Design",
    description:
      "A rising supplement brand utilizing the body’s Gut-X Axis. Our collaboration with resbiotic ranges from social media materials to packaging designs and everything in between. With a minimalistic approach accompanied by striking vibrant colors, resbiotic were made to catch your eyes without being overwhelmed.",
  },
  {
    id: "oatified",
    slug: "oatified",
    title: "Oatified",
    imageSrc: "/brand-hero/oatified-hero.png",
    imageHoverSrc: "/brand-hero/oatified-hover.png",
    imageAlt: "Oatified branding and packaging design",
    href: "/projects/oatified",
    services: "Branding, Packaging",
    description:
      "Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.",
  },
  {
    id: "mojo",
    slug: "mojo",
    title: "Mojo",
    imageSrc: "/brand-hero/mojo-hero.png",
    imageHoverSrc: "/brand-hero/mojo-hover.png",
    imageAlt: "MOJO packaging and ad design",
    href: "/projects/mojo",
    services: "Packaging, Ads",
    description:
      "Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.",
  },
  {
    id: "ablebiolabs",
    slug: "ablebiolabs",
    title: "Able Biolabs",
    imageSrc: "/brand-hero/ablebiolabs-hero.png",
    imageHoverSrc: "/brand-hero/ablebiolabs-hover.png",
    imageAlt: "Able Biolabs branding and website design",
    href: "/projects/ablebiolabs",
    services: "Branding, Creative Direction, Brand Guidelines, Website Design",
    description:
      "Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out. Helping brands cut through the noise, look their best, and keep creative projects easy. While you focus on the big picture, I’ll handle the creative details that make you stand out.",
  },
  {
    id: "heavenscent",
    slug: "heavenscent",
    title: "Heaven Scent",
    imageSrc: "/brand-hero/heavenscent-hero.png",
    imageHoverSrc: "/brand-hero/heavenscent-hover.png",
    imageAlt: "Heaven Scent branding, email flows, ads, and creative direction",
    href: "/projects/heavenscent",
    services: "",
    description: "",
  },
  {
    id: "strippies",
    slug: "strippies",
    title: "Strippies",
    imageSrc: "/brand-hero/strippies-hero.png",
    imageHoverSrc: "/brand-hero/strippies-hover.png",
    imageAlt: "Strippies website design and ad design",
    href: "/projects/strippies",
    services: "Website, Ads",
    description: "",
  },
];