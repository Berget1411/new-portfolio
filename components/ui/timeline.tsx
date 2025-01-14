"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useActiveSection from "@/hooks/useActiveSection";

interface TimelineEntry {
  title: string;
  id: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Use the IDs from the data array
  const sectionIds = data.map((item) => item.id);

  // Use the hook with custom options
  const activeSection = useActiveSection(sectionIds, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  });

  // Get active index by finding the index of the active section ID
  const activeIndex = sectionIds.indexOf(activeSection);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className='w-full bg-white font-sans dark:bg-neutral-950'
      ref={containerRef}
    >
      <div ref={ref} className='relative mx-auto pb-20'>
        {data.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className='timeline-section flex justify-start pt-10 md:gap-10 md:pt-40'
          >
            <div className='sticky top-40 z-10 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-md'>
              <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3'>
                <div
                  className={cn(
                    "h-4 w-4 rounded-full border p-2 transition-colors duration-300",
                    activeIndex === index
                      ? "border-primary bg-primary/20"
                      : "border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800"
                  )}
                />
              </div>
              <motion.h3
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={titleVariants}
                className={cn(
                  "hidden text-xl font-bold md:block md:pl-20 md:text-5xl transition-colors duration-300",
                  activeIndex === index
                    ? "text-primary"
                    : "text-neutral-500 dark:text-neutral-500"
                )}
              >
                {item.title}
              </motion.h3>
            </div>

            <div className='relative w-full pl-20 pr-4 md:pl-4 md:pr-0'>
              <motion.h3
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={titleVariants}
                className={cn(
                  "mb-4 block text-left text-2xl font-bold md:hidden transition-colors duration-300",
                  activeIndex === index
                    ? "text-primary"
                    : "text-neutral-500 dark:text-neutral-500"
                )}
              >
                {item.title}
              </motion.h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className='absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] via-[#ff4d4d] via-[30%] to-[#ff8566] to-[60%]'
          />
        </div>
      </div>
    </div>
  );
};
