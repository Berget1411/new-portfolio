"use client";

import { Vortex } from "@/components/ui/vortex";
import HeroBackground from "@/components/hero/herobackground";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import scrollToSection from "@/utils/scrollToSection";
import { mainTechStack } from "@/assets/tech-stack";
import type { TechStack } from "@/types";

export function Hero() {
  const t = useTranslations("profile");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

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

  return (
    <div
      className='rounded-md min-h-[40rem] h-full md:h-[40rem] overflow-hidden'
      id='start'
    >
      <HeroBackground />
      <Vortex
        backgroundColor='transparent'
        className='flex flex-col-reverse md:flex-row items-center justify-between main-width w-full h-full py-16 md:py-0'
      >
        <motion.div
          className='flex flex-col max-w-2xl text-center md:text-left mt-8 md:mt-0'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants}>
            <h1 className='text-foreground text-4xl sm:text-5xl md:text-7xl font-bold'>
              {t("title")}
            </h1>
          </motion.div>

          <motion.div
            className='flex flex-col gap-1 mt-4 md:mt-6'
            variants={itemVariants}
          >
            <p className='text-muted-foreground text-base sm:text-lg'>
              {t("desc1")}{" "}
              <Link
                href='https://kth.se'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:text-primary/80 transition-colors'
              >
                @KTH
              </Link>
            </p>
            <p className='text-muted-foreground text-base sm:text-lg'>
              {t("desc2")}{" "}
              <Link
                href='https://thsbusiness.se'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:text-primary/80 transition-colors'
              >
                @THS Business
              </Link>
            </p>
          </motion.div>

          <motion.div
            className='flex gap-4 mt-6 md:mt-8 justify-center md:justify-start'
            variants={itemVariants}
          >
            <motion.div whileHover='hover' variants={linkVariants}>
              <Link
                href='https://github.com/yourusername'
                className='text-muted-foreground hover:text-foreground transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub size={24} />
              </Link>
            </motion.div>
            <motion.div whileHover='hover' variants={linkVariants}>
              <Link
                href='https://linkedin.com/in/yourusername'
                className='text-muted-foreground hover:text-foreground transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={24} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className='flex flex-wrap gap-3 mt-8 justify-center md:justify-start'
            variants={techStackVariants}
            initial='hidden'
            animate='visible'
          >
            {mainTechStack.map((tech: TechStack, index: number) => (
              <motion.div
                key={tech.name}
                variants={techItemVariants}
                whileHover='hover'
                className='relative group'
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
                <div className='relative flex items-center gap-2 px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20'>
                  <tech.icon className='w-4 h-4 text-primary' />
                  <span className='text-sm text-foreground'>{tech.name}</span>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={techItemVariants}
              whileHover='hover'
              className='relative group'
              onClick={() => scrollToSection("tech-stack")}
            >
              <motion.div
                className='absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 to-primary/20 blur-sm'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <div className='relative flex items-center gap-2 px-3 py-1.5 bg-primary/10 backdrop-blur-sm rounded-lg border-2 border-primary/30 cursor-pointer'>
                <span className='text-sm font-medium text-primary'>More</span>
                <motion.div
                  animate={{
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowDown className='w-4 h-4 text-primary' />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className='block w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative'
          variants={imageVariants}
          initial='hidden'
          animate='visible'
          whileHover='hover'
        >
          {/* Background geometric elements */}
          <div className='absolute inset-0 -rotate-6 scale-[1.15] z-0'>
            <div className='absolute right-0 top-0 w-1/2 h-1/2 border-t-2 border-r-2 border-primary/20 rounded-tr-[2rem]' />
            <div className='absolute left-0 bottom-0 w-1/2 h-1/2 border-b-2 border-l-2 border-primary/20 rounded-bl-[2rem]' />
          </div>

          {/* Accent lines */}
          <div className='absolute -left-4 top-1/4 w-8 h-[2px] bg-gradient-to-r from-primary/40 to-transparent' />
          <div className='absolute -right-4 bottom-1/4 w-8 h-[2px] bg-gradient-to-l from-primary/40 to-transparent' />

          {/* Dots */}
          <div className='absolute -top-2 left-1/3 w-1 h-1 rounded-full bg-primary/40' />
          <div className='absolute -bottom-2 right-1/3 w-1 h-1 rounded-full bg-primary/40' />

          {/* Main image container with double border effect */}
          <div className='relative w-full h-full rounded-[2rem] overflow-hidden z-10 bg-background/50 backdrop-blur-sm'>
            {/* Outer glow/border */}
            <div className='absolute inset-0 rounded-[2rem] border-4 border-primary/10' />

            {/* Inner container */}
            <div className='absolute inset-[3px] rounded-[calc(2rem-3px)] overflow-hidden border-2 border-primary/20'>
              <Image
                src='/images/profile.png'
                alt={t("title")}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </motion.div>
      </Vortex>
      <motion.div
        className='absolute bottom-12 left-1/2 -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaArrowDown
            size={24}
            className='text-primary cursor-pointer hover:text-primary/80 transition-colors'
            onClick={() => scrollToSection("about")}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
