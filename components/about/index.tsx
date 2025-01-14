"use client";

import { useTranslations } from "next-intl";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  const t = useTranslations("about");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section id='about' className='py-20 md:py-24 lg:py-32'>
      <div className='main-width'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='text-center mb-8'
        >
          <motion.h2
            variants={itemVariants}
            className='text-2xl md:text-4xl font-bold'
          >
            {t("title")}
          </motion.h2>
        </motion.div>

        <FadeInSection>
          {/* Abstract geometric background */}

          <div className='max-w-[45rem] mx-auto text-center'>
            <div className='relative mb-8 md:mb-12'>
              <p className='text-sm md:text-lg text-foreground/90 dark:text-foreground/90 leading-relaxed tracking-wide'>
                {t("body")}
              </p>
            </div>

            {/* Image container */}
            <div className='relative w-full aspect-[16/9] rounded-lg'>
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
              <div className='relative w-full h-full rounded-[2rem] overflow-hidden  bg-background/50 backdrop-blur-sm'>
                {/* Outer glow/border */}
                <div className='absolute inset-0 rounded-[2rem] border-4 border-primary/10' />

                {/* Inner container */}
                <div className='absolute inset-[3px] rounded-[calc(2rem-3px)] overflow-hidden border-2 border-primary/20'>
                  <Image
                    src='/images/kth_campus.jpg'
                    alt='KTH Campus'
                    fill
                    priority
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
