"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export function TimelineSection() {
  const experience = useTranslations("experience");
  const education = useTranslations("education");

  const experiences = [
    {
      title: experience("ths.title"),
      undertitle: experience("ths.undertitle"),
      date: experience("ths.date"),
      desc1: experience("ths.desc1"),
      desc2: experience("ths.desc2"),
      image: "/images/experience/ths.jpeg",
    },
    {
      title: experience("i-start.title"),
      undertitle: experience("i-start.undertitle"),
      date: experience("i-start.date"),
      desc1: experience("i-start.desc1"),
      desc2: experience("i-start.desc2"),
      image: "/images/experience/istart.jpeg",
    },
    {
      title: experience("atlas-copco.title"),
      undertitle: experience("atlas-copco.undertitle"),
      date: experience("atlas-copco.date"),
      desc1: experience("atlas-copco.desc1"),
      desc2: experience("atlas-copco.desc2"),
      image: "/images/experience/atlas.jpeg",
    },
  ];

  const educations = [
    {
      title: education("kth.title"),
      undertitle: education("kth.undertitle"),
      date: education("kth.date"),
      desc1: education("kth.desc1"),
      desc2: education("kth.desc2"),
      image: "/images/education/kth.jpeg",
    },
    {
      title: education("odin.title"),
      undertitle: education("odin.undertitle"),
      date: education("odin.date"),
      desc1: education("odin.desc1"),
      desc2: education("odin.desc2"),
      image: "/images/education/odin.png",
    },
    {
      title: education("ng.title"),
      undertitle: education("ng.undertitle"),
      date: education("ng.date"),
      desc1: education("ng.desc1"),
      desc2: education("ng.desc2"),
      image: "/images/education/ng.png",
    },
  ];
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageContainerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const data = [
    {
      title: experience("title"),
      id: "experience",
      content: (
        <div id='experience' data-section='experience'>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
            {experience("description")}
          </p>
          <motion.div
            className='grid grid-cols-1 gap-4'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences
              .filter((exp) => exp.title)
              .map((exp, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <Card>
                    <div className='flex flex-col md:flex-row gap-4 p-4'>
                      <motion.div
                        className='w-48 h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto md:mx-0 relative'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true }}
                      >
                        {/* Background geometric elements */}
                        <div className='absolute inset-2 -rotate-6 scale-110 z-0'>
                          <div className='absolute right-0 top-0 w-1/2 h-1/2 border-t border-r border-primary/20 rounded-tr-lg' />
                          <div className='absolute left-0 bottom-0 w-1/2 h-1/2 border-b border-l border-primary/20 rounded-bl-lg' />
                        </div>

                        {/* Accent lines */}
                        <div className='absolute left-2 top-1/4 w-3 h-[1px] bg-gradient-to-r from-primary/40 to-transparent' />
                        <div className='absolute right-2 bottom-1/4 w-3 h-[1px] bg-gradient-to-l from-primary/40 to-transparent' />

                        {/* Dots */}
                        <div className='absolute top-2 left-1/3 w-0.5 h-0.5 rounded-full bg-primary/40' />
                        <div className='absolute bottom-2 right-1/3 w-0.5 h-0.5 rounded-full bg-primary/40' />

                        {/* Main image container */}
                        <motion.div
                          className='relative w-full h-full rounded-lg overflow-hidden z-10 bg-background/50 backdrop-blur-sm'
                          variants={imageContainerVariants}
                        >
                          {/* Outer glow/border */}
                          <div className='absolute inset-0 rounded-lg border-2 border-primary/10' />

                          {/* Inner container */}
                          <div className='absolute inset-[2px] rounded-[calc(0.5rem-2px)] overflow-hidden border border-primary/20'>
                            <img
                              src={exp.image}
                              alt={exp.title}
                              className='w-full h-full object-cover'
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                      <div className='flex-1'>
                        <CardHeader className='space-y-1 px-4 md:px-6'>
                          <CardTitle className='text-base md:text-lg'>
                            {exp.title}
                          </CardTitle>
                          <CardDescription className='text-sm'>
                            {exp.undertitle}
                          </CardDescription>
                          <p className='text-xs md:text-sm text-muted-foreground'>
                            {exp.date}
                          </p>
                        </CardHeader>
                        <CardContent className='px-4 md:px-6 pt-2'>
                          <p className='text-xs md:text-sm'>{exp.desc1}</p>
                          <p className='text-xs md:text-sm mt-2'>{exp.desc2}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      ),
    },
    {
      title: education("title"),
      id: "education",
      content: (
        <div id='education' data-section='education'>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8'>
            {education("description")}
          </p>
          <motion.div
            className='grid grid-cols-1 gap-4'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-100px" }}
          >
            {educations.map((edu, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card>
                  <div className='flex flex-col md:flex-row gap-4 p-4'>
                    <motion.div
                      className='w-48 h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto md:mx-0 relative'
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true }}
                    >
                      {/* Background geometric elements */}
                      <div className='absolute inset-2 -rotate-6 scale-110 z-0'>
                        <div className='absolute right-0 top-0 w-1/2 h-1/2 border-t border-r border-primary/20 rounded-tr-lg' />
                        <div className='absolute left-0 bottom-0 w-1/2 h-1/2 border-b border-l border-primary/20 rounded-bl-lg' />
                      </div>

                      {/* Accent lines */}
                      <div className='absolute left-2 top-1/4 w-3 h-[1px] bg-gradient-to-r from-primary/40 to-transparent' />
                      <div className='absolute right-2 bottom-1/4 w-3 h-[1px] bg-gradient-to-l from-primary/40 to-transparent' />

                      {/* Dots */}
                      <div className='absolute top-2 left-1/3 w-0.5 h-0.5 rounded-full bg-primary/40' />
                      <div className='absolute bottom-2 right-1/3 w-0.5 h-0.5 rounded-full bg-primary/40' />

                      {/* Main image container */}
                      <motion.div
                        className='relative w-full h-full rounded-lg overflow-hidden z-10 bg-background/50 backdrop-blur-sm'
                        variants={imageContainerVariants}
                      >
                        {/* Outer glow/border */}
                        <div className='absolute inset-0 rounded-lg border-2 border-primary/10' />

                        {/* Inner container */}
                        <div className='absolute inset-[2px] rounded-[calc(0.5rem-2px)] overflow-hidden border border-primary/20'>
                          <img
                            src={edu.image}
                            alt={edu.title}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                    <div className='flex-1'>
                      <CardHeader className='space-y-1 px-4 md:px-6'>
                        <CardTitle className='text-base md:text-lg'>
                          {edu.title}
                        </CardTitle>
                        <CardDescription className='text-sm'>
                          {edu.undertitle}
                        </CardDescription>
                        <p className='text-xs md:text-sm text-muted-foreground'>
                          {edu.date}
                        </p>
                      </CardHeader>
                      <CardContent className='px-4 md:px-6 pt-2'>
                        <p className='text-xs md:text-sm'>{edu.desc1}</p>
                        <p className='text-xs md:text-sm mt-2'>{edu.desc2}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section className='w-full'>
      <div className='main-width' id='timeline-sections'>
        <Timeline data={data} />
      </div>
    </section>
  );
}
