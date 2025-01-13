"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { TechStack } from "@/types";

interface ProjectProps {
  reverse: boolean;
  id: string;
  image?: string;
  github?: string;
  demo?: string;
  tech?: TechStack[];
}

export default function Project({
  reverse,
  id,
  image,
  github,
  demo,
  tech,
}: ProjectProps) {
  const t = useTranslations("projects");
  const title = t(`${id}.title`);
  const longDescription = t(`${id}.longDescription`);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      id={id}
    >
      <div
        className={cn(
          "flex w-full justify-between gap-8 p-6 bg-card border rounded-lg hover:bg-neutral-50 dark:hover:bg-card/40 transition-all relative overflow-hidden",
          "max-md:flex-col max-md:gap-6 max-md:p-4",
          reverse && "flex-row-reverse"
        )}
      >
        <div className='absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]'>
          <div className='pointer-events-none absolute inset-0 bg-card [mask-image:radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--card)))]'></div>
        </div>

        <div className='absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 pointer-events-none'></div>

        <div className='flex flex-col gap-4 z-10 flex-1 max-md:order-2'>
          <motion.h3
            className='text-2xl font-bold mb-2 max-md:text-xl'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className='text-base text-muted-foreground mb-4 max-w-xl'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {longDescription}
          </motion.p>

          {tech && tech.length > 0 && (
            <motion.div
              className='flex flex-wrap gap-2 max-w-lg'
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial='hidden'
              animate='visible'
            >
              {tech.map((techItem, index) => {
                const IconComponent = techItem.icon;
                return (
                  <motion.div
                    key={techItem.name}
                    className='relative group shrink-0'
                    variants={{
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
                    }}
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
                    <div className='relative flex items-center gap-1.5 px-2 py-1 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20'>
                      <IconComponent className='w-3.5 h-3.5 text-primary' />
                      <span className='text-xs text-foreground whitespace-nowrap'>
                        {techItem.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          <div className='flex items-center gap-4 mt-4'>
            {demo ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href={demo} target='_blank'>
                  <Button>Try it out</Button>
                </Link>
              </motion.div>
            ) : (
              <Button disabled>Try it out</Button>
            )}
            {github && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={github} target='_blank'>
                        <FaGithub
                          size={18}
                          className='transition-opacity hover:opacity-70'
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>View code</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            )}
          </div>
        </div>
        {image && (
          <motion.div
            className='relative z-10 max-md:order-1 max-md:w-full md:w-[45%]'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <motion.div
                  layoutId={`project-image-${id}`}
                  className='cursor-pointer w-full'
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className='aspect-[4/3] rounded-[0.5rem] border border-border object-cover w-full'
                  />
                </motion.div>
              </DialogTrigger>
              <AnimatePresence>
                {isOpen && demo && (
                  <DialogContent className='h-[70vh] w-[80vw] max-w-none p-0'>
                    <motion.div
                      layoutId={`project-image-${id}`}
                      className='h-full w-full'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <iframe
                        src={demo}
                        className='h-full w-full'
                        title={title}
                      ></iframe>
                    </motion.div>
                  </DialogContent>
                )}
              </AnimatePresence>
            </Dialog>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
