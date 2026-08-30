export type Project = {
  id: number;
  slug: string;
  imageSrc: string;
  imageHoverSrc: string;
  imageAlt: string;
  title: string;
  service: string;
  containerClass: string;
};

export type TickerItem = {
  id: number;
  path: string;
  label: string;
  heightClass?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "plukkers",
    imageSrc: "/brand-hero/plukkers-hero.png",
    imageHoverSrc: "/brand-hero/plukkers-hover.png",
    imageAlt: "Plukkers email flow and campaign design examples",
    title: "Plukkers",
    service: "Email Flows, Campaigns",
    containerClass: "Plukkers"
  },
  {
    id: 2,
    slug: "dimmak",
    imageSrc: "/brand-hero/dimmak-hero.png",
    imageHoverSrc: "/brand-hero/dimmak-hover.png",
    imageAlt: "Dim Mak email flow and campaign design examples",
    title: "Dim Mak",
    service: "Email Flows, Campaigns",
    containerClass: "Dim Mak"
  },
  {
    id: 3,
    slug: "res",
    imageSrc: "/brand-hero/res-hero.png",
    imageHoverSrc: "/brand-hero/res-hover.png",
    imageAlt: "resbiotic branding, email flows, ads, and website design",
    title: "resbiotic",
    service: "Branding, Email Flows, Ads, Website Design",
    containerClass: "res"
  },
  {
    id: 4,
    slug: "oatified",
    imageSrc: "/brand-hero/oatified-hero.png",
    imageHoverSrc: "/brand-hero/oatified-hover.png",
    imageAlt: "Oatified branding and packaging design",
    title: "Oatified",
    service: "Branding, Packaging",
    containerClass: "Oatified"
  },
  {
    id: 5,
    slug: "mojo",
    imageSrc: "/brand-hero/mojo-hero.png",
    imageHoverSrc: "/brand-hero/mojo-hover.png",
    imageAlt: "MOJO packaging and ad design",
    title: "MOJO", 
    service: "Packaging, Ads",
    containerClass: "MOJO"
  },
  {
    id: 6,
    slug: "ablebiolabs",
    imageSrc: "/brand-hero/ablebiolabs-hero.png",
    imageHoverSrc: "/brand-hero/ablebiolabs-hover.png",
    imageAlt: "Able Biolabs branding and website design",
    title: "Able Biolabs",
    service: "Branding, Creative Direction, Brand Guidelines, Website Design",
    containerClass: "Able Biolabs"
  },
  {
    id: 7,
    slug: "heavenscent",
    imageSrc: "/brand-hero/heavenscent-hero.png",
    imageHoverSrc: "/brand-hero/heavenscent-hover.png",
    imageAlt: "Heaven Scent branding, email flows, ads, and creative direction",
    title: "Heaven Scent",
    service: "Lorem Ipsum",
    containerClass: "Heaven Scent"
  },
  {
    id: 8,
    slug: "strippies",
    imageSrc: "/brand-hero/strippies-hero.png",
    imageHoverSrc: "/brand-hero/strippies-hover.png",
    imageAlt: "Strippies website design and ad design",
    title: "Strippies",
    service: "Website Design, Ads",
    containerClass: "Strippies"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery Phase",
    description:
      "We'll go over your goals, budget, and vision to set the project up for success.",
  },
  {
    number: "02",
    title: "Design Phase",
    description:
      "Time to bring ideas to life! I'll create the initial design, and we'll review together.",
  },
  {
    number: "03",
    title: "Launch Phase",
    description:
      "Final touches. We'll refine, apply the design across deliverables, and wrap things up.",
  },
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alaine",
  jobTitle: "Senior Graphic Designer and Illustrator",
  url: "https://artgospelstudio.com",
  description:
    "Senior graphic designer and illustrator based in the Philippines, helping B2B and DTC brands with branding, packaging, email design, and website design.",
  knowsAbout: [
    "Branding",
    "Packaging Design",
    "Email Design",
    "Website Design",
    "Social Media Ads",
    "Creative Direction",
  ],
  
};

export const workedWithTicker: TickerItem[] = [
  {id: 1, path: "/worked-with/canva.svg", label: "Canva"},
  {id: 2, path: "/worked-with/dimmak.svg", label: "Dimmak"},
  {id: 3, path: "/worked-with/res.svg", label: "Res"},
  {id: 4, path: "/worked-with/mojo.svg", label: "MOJO"},
  {id: 5, path: "/worked-with/wellbots.svg", label: "Wellbots"},
  {id: 6, path: "/worked-with/ablebiolabs.svg", label: "Able Biolabs"},
  {id: 7, path: "/worked-with/plukkers.svg", label: "Plukkers", heightClass: "h-16 md:h-18"},
];

export const servicesTicker = [
  {id: 1, text: "Creative Direction"},
  {id: 2, text: "Branding"},
  {id: 3, text: "Email Design"},
  {id: 4, text: "Social Media Ads"},
  {id: 5, text: "Packaging Design"},
  {id: 6, text: "Website Design"},
  {id: 7, text: "Print Ads"},
];

export const dividerTicker = {
  path: "flower.svg",
  alt: "Art Gospel Logo",
};

export const resSocmedAdTicker: TickerItem[] = [
  {id: 1, path: "/res-images/socmed-ad-1.png", label: "Res Social Media Adverisement"},
  {id: 2, path: "/res-images/socmed-ad-2.png", label: "Res Social Media Adverisement"},
  {id: 3, path: "/res-images/socmed-ad-3.png", label: "Res Social Media Adverisement"},
  {id: 4, path: "/res-images/socmed-ad-4.png", label: "Res Social Media Adverisement"},
];

export const mojoSocmedAdTicker: TickerItem[] = [
  {id: 1, path: "/mojo-images/socmed-ad-1.png", label: "MOJO Social Media Advertisement"},
  {id: 2, path: "/mojo-images/socmed-ad-2.png", label: "MOJO Social Media Advertisement"},
  {id: 3, path: "/mojo-images/socmed-ad-3.png", label: "MOJO Social Media Advertisement"},
  {id: 4, path: "/mojo-images/socmed-ad-4.png", label: "MOJO Social Media Advertisement"},
];

export const heavenscentSocmedAdTicker: TickerItem[] = [
  {id: 1, path: "/heavenscent-images/socmed-ad-1.png", label: "Heaven's Scent Social Media Advertisement"},
  {id: 2, path: "/heavenscent-images/socmed-ad-2.png", label: "Heaven's Scent Social Media Advertisement"},
  {id: 3, path: "/heavenscent-images/socmed-ad-3.png", label: "Heaven's Scent Social Media Advertisement"},
  {id: 4, path: "/heavenscent-images/socmed-ad-4.png", label: "Heaven's Scent Social Media Advertisement"},
];

export const strippiesSocmedAdTicker: TickerItem[] = [
  {id: 1, path: "/strippies-images/socmed-ad-1.png", label: "Strippies Social Media Advertisement"},
  {id: 2, path: "/strippies-images/socmed-ad-2.png", label: "Strippies Social Media Advertisement"},
  {id: 3, path: "/strippies-images/socmed-ad-3.png", label: "Strippies Social Media Advertisement"},
  {id: 4, path: "/strippies-images/socmed-ad-4.png", label: "Strippies Social Media Advertisement"},
];