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

  const data = [
    {
      title: experience("title"),
      id: "experience",
      content: (
        <div>
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
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader className='space-y-1 px-4 md:px-6'>
                  <CardTitle className='text-base md:text-lg'>
                    {experience("ths.title")}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {experience("ths.undertitle")}
                  </CardDescription>
                  <p className='text-xs md:text-sm text-muted-foreground'>
                    {experience("ths.date")}
                  </p>
                </CardHeader>
                <CardContent className='px-4 md:px-6 pt-2'>
                  <p className='text-xs md:text-sm'>
                    {experience("ths.desc1")}
                  </p>
                  <p className='text-xs md:text-sm mt-2'>
                    {experience("ths.desc2")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader className='space-y-1 px-4 md:px-6'>
                  <CardTitle className='text-base md:text-lg'>
                    {experience("atlas-copco.title")}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {experience("atlas-copco.undertitle")}
                  </CardDescription>
                  <p className='text-xs md:text-sm text-muted-foreground'>
                    {experience("atlas-copco.date")}
                  </p>
                </CardHeader>
                <CardContent className='px-4 md:px-6 pt-2'>
                  <p className='text-xs md:text-sm'>
                    {experience("atlas-copco.desc1")}
                  </p>
                  <p className='text-xs md:text-sm mt-2'>
                    {experience("atlas-copco.desc2")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    {
      title: education("title"),
      id: "education",
      content: (
        <div>
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
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader className='space-y-1 px-4 md:px-6'>
                  <CardTitle className='text-base md:text-lg'>
                    {education("kth.title")}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {education("kth.undertitle")}
                  </CardDescription>
                  <p className='text-xs md:text-sm text-muted-foreground'>
                    {education("kth.date")}
                  </p>
                </CardHeader>
                <CardContent className='px-4 md:px-6 pt-2'>
                  <p className='text-xs md:text-sm'>{education("kth.desc1")}</p>
                  <p className='text-xs md:text-sm mt-2'>
                    {education("kth.desc2")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader className='space-y-1 px-4 md:px-6'>
                  <CardTitle className='text-base md:text-lg'>
                    {education("odin.title")}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {education("odin.undertitle")}
                  </CardDescription>
                  <p className='text-xs md:text-sm text-muted-foreground'>
                    {education("odin.date")}
                  </p>
                </CardHeader>
                <CardContent className='px-4 md:px-6 pt-2'>
                  <p className='text-xs md:text-sm'>
                    {education("odin.desc1")}
                  </p>
                  <p className='text-xs md:text-sm mt-2'>
                    {education("odin.desc2")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={cardVariants}>
              <Card>
                <CardHeader className='space-y-1 px-4 md:px-6'>
                  <CardTitle className='text-base md:text-lg'>
                    {education("ng.title")}
                  </CardTitle>
                  <CardDescription className='text-sm'>
                    {education("ng.undertitle")}
                  </CardDescription>
                  <p className='text-xs md:text-sm text-muted-foreground'>
                    {education("ng.date")}
                  </p>
                </CardHeader>
                <CardContent className='px-4 md:px-6 pt-2'>
                  <p className='text-xs md:text-sm'>{education("ng.desc1")}</p>
                  <p className='text-xs md:text-sm mt-2'>
                    {education("ng.desc2")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section className='w-full'>
      <div className='main-width'>
        <Timeline data={data} />
      </div>
    </section>
  );
}
