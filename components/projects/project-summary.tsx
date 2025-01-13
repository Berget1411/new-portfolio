"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaExternalLinkAlt, FaGithub, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import type { Project } from "@/types";
import scrollToSection from "@/utils/scrollToSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const techItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const techStackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconLinkVariants = {
  initial: {
    y: 0,
    x: 0,
    color: "currentColor",
  },
  hover: {
    y: -2,
    x: 2,
    color: "hsl(var(--primary))",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function ProjectSummary({
  id,
  github,
  demo,
  tech,
  devMode,
}: Project) {
  const t = useTranslations("projects");
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedTech = isExpanded ? tech : tech?.slice(0, 3);
  const hasMoreTech = tech && tech.length > 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='h-full'
    >
      <Card
        className='cursor-pointer bg-card transition-all hover:bg-neutral-50 dark:hover:bg-card/40 h-full flex flex-col'
        onClick={() => scrollToSection(id)}
      >
        <CardHeader className='space-y-2 px-4 md:px-6 flex-1'>
          <div className='flex flex-row items-center justify-between'>
            <CardTitle className='flex items-center gap-2 text-base md:text-lg'>
              {t(`${id}.title`)}
              {devMode && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className='rounded-md bg-primary px-1.5 py-0.5 text-[10px] md:text-xs text-primary-foreground'>
                        Dev
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Currently in development</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </CardTitle>
            <div className='flex gap-2 md:gap-3 shrink-0'>
              {github && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={github}
                        target='_blank'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.div
                          initial='initial'
                          whileHover='hover'
                          variants={iconLinkVariants}
                        >
                          <FaGithub
                            size={16}
                            className='md:w-[18px] md:h-[18px]'
                          />
                        </motion.div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>View code</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              {demo && (
                <Link
                  href={demo}
                  target='_blank'
                  onClick={(e) => e.stopPropagation()}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial='initial'
                          whileHover='hover'
                          variants={iconLinkVariants}
                        >
                          <FaExternalLinkAlt
                            size={16}
                            className='md:w-[18px] md:h-[18px]'
                          />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>Go to site</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>
          <CardDescription className='text-xs md:text-sm'>
            {t(`${id}.shortDescription`)}
          </CardDescription>
          <p className='text-xs md:text-sm text-muted-foreground'>
            {t(`${id}.date`)}
          </p>
        </CardHeader>
        <CardContent className='px-4 md:px-6 pt-2 pb-4 shrink-0'>
          <div className='flex flex-wrap gap-2 md:gap-3 items-start'>
            <motion.div
              className='flex flex-wrap gap-2 md:gap-3 flex-1 min-w-0'
              variants={techStackVariants}
              initial='hidden'
              animate='visible'
            >
              {displayedTech?.map((techItem, index) => {
                const IconComponent = techItem.icon;
                return (
                  <motion.div
                    key={techItem.name}
                    className='relative group shrink-0'
                    variants={techItemVariants}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                    custom={index}
                  >
                    <motion.div
                      className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 blur-sm'
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                    />
                    <div className='relative flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20'>
                      <IconComponent className='w-3 h-3 md:w-4 md:h-4 text-primary' />
                      <span className='text-xs md:text-sm text-foreground'>
                        {techItem.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            {hasMoreTech && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-8 px-2 text-xs shrink-0'
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                >
                  <span className='mr-1'>
                    {isExpanded ? "Show Less" : `+${tech.length - 3} More`}
                  </span>
                  <motion.div
                    animate={{
                      rotate: isExpanded ? 180 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  >
                    <FaChevronDown className='h-3 w-3' />
                  </motion.div>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
