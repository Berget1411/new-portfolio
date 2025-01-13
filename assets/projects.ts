import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiStripe,
  SiRedis,
} from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";

export const projects = [
  {
    id: "portfolio",
    image: "/images/projects/portfolio_screenshot.jpeg",
    github: "https://github.com/ludvigbergstrom/ludvigbergstrom.com",
    demo: "https://ludvigbergstrom.com",
    tech: [
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },

      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "i18n",
        icon: GrLanguage,
      },
      {
        name: "Framer Motion",
        icon: TbBrandFramerMotion,
      },
    ],
    devMode: false,
  },
  {
    id: "e-commerce",
    image: "/images/projects/project_placeholder.png",
    github: "https://github.com/Berget1411/e-commerce",
    tech: [
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Zustand",
        icon: FaCode,
      },
      {
        name: "Stripe",
        icon: SiStripe,
      },
    ],
    devMode: false,
  },
  {
    id: "ths",
    image: "/images/projects/project_placeholder.png",
    tech: [
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },

      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "i18n",
        icon: GrLanguage,
      },
      {
        name: "Framer Motion",
        icon: TbBrandFramerMotion,
      },
    ],
    devMode: true,
  },
  {
    id: "Andysolam",
    image: "/images/projects/project_placeholder.png",
    tech: [
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "Tanstack Query",
        icon: SiReactquery,
      },
    ],
    devMode: true,
  },
];
