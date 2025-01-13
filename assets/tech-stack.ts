import { GrLanguage } from "react-icons/gr";
import { PiMicrosoftExcelLogoBold } from "react-icons/pi";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDrizzle,
  SiSupabase,
  SiReactquery,
  SiStripe,
  SiPython,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

export const mainTechStack = [
  // Frontend Core
  {
    name: "React",
    icon: RiReactjsFill,
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
  // Backend & Database
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Drizzle",
    icon: SiDrizzle,
  },
  // State Management
  {
    name: "React Query",
    icon: SiReactquery,
  },
];

export const otherTechStack = [
  // Runtime & Languages
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },

  // Database & Backend Services
  {
    name: "Redis",
    icon: SiRedis,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
  },

  // State Management
  {
    name: "Zustand",
    icon: FaCode,
  },
  {
    name: "Tanstack Query",
    icon: SiReactquery,
  },

  // UI/UX & Frontend Tools
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
  },
  {
    name: "i18n",
    icon: GrLanguage,
  },

  // Development Tools
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Git",
    icon: SiGit,
  },

  // Payment & Business
  {
    name: "Stripe",
    icon: SiStripe,
  },
  {
    name: "Excel",
    icon: PiMicrosoftExcelLogoBold,
  },
];
