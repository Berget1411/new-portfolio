"use client";

import { motion } from "framer-motion";
import type { TechStack } from "@/types";

interface TechnologyProps extends TechStack {
  delay?: number;
  isMain?: boolean;
}

export default function Technology({
  name,
  icon: Icon,
  delay = 0,
  isMain = false,
}: TechnologyProps) {
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
        delay,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={techItemVariants}
      initial='hidden'
      whileInView='visible'
      whileHover='hover'
      viewport={{ once: true }}
      className='relative group'
    >
      {/* Background geometric elements - Different for main and other */}
      {isMain ? (
        <div className='absolute inset-0 -rotate-6 scale-[1.15] z-0'>
          <div className='absolute right-0 top-0 w-1/2 h-1/2 border-t-2 border-r-2 border-primary/20 rounded-tr-[2rem]' />
          <div className='absolute left-0 bottom-0 w-1/2 h-1/2 border-b-2 border-l-2 border-primary/20 rounded-bl-[2rem]' />
        </div>
      ) : (
        <div className='absolute inset-0 rotate-12 scale-[1.15] z-0'>
          <div className='absolute left-0 top-0 w-1/2 h-1/2 border-t-2 border-l-2 border-primary/20 rounded-tl-[2rem]' />
          <div className='absolute right-0 bottom-0 w-1/2 h-1/2 border-b-2 border-r-2 border-primary/20 rounded-br-[2rem]' />
        </div>
      )}

      {/* Accent lines - Different positions for main and other */}
      {isMain ? (
        <>
          <div className='absolute -left-4 top-1/4 w-8 h-[2px] bg-gradient-to-r from-primary/40 to-transparent' />
          <div className='absolute -right-4 bottom-1/4 w-8 h-[2px] bg-gradient-to-l from-primary/40 to-transparent' />
        </>
      ) : (
        <>
          <div className='absolute -left-4 bottom-1/4 w-8 h-[2px] bg-gradient-to-r from-primary/40 to-transparent' />
          <div className='absolute -right-4 top-1/4 w-8 h-[2px] bg-gradient-to-l from-primary/40 to-transparent' />
        </>
      )}

      {/* Dots - Different positions for main and other */}
      {isMain ? (
        <>
          <div className='absolute -top-2 left-1/3 w-1 h-1 rounded-full bg-primary/40' />
          <div className='absolute -bottom-2 right-1/3 w-1 h-1 rounded-full bg-primary/40' />
        </>
      ) : (
        <>
          <div className='absolute -top-2 right-1/3 w-1 h-1 rounded-full bg-primary/40' />
          <div className='absolute -bottom-2 left-1/3 w-1 h-1 rounded-full bg-primary/40' />
        </>
      )}

      {/* Animated gradient background - Different gradients for main and other */}
      <motion.div
        className={`absolute inset-0 rounded-xl blur-md ${
          isMain
            ? "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"
            : "bg-gradient-to-br from-primary/15 via-primary/5 to-primary/15"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
          background: isMain
            ? [
                "linear-gradient(45deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
                "linear-gradient(225deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
                "linear-gradient(45deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
              ]
            : [
                "linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
                "linear-gradient(315deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
                "linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%)",
              ],
        }}
        transition={{
          duration: isMain ? 4 : 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Main content container - Different padding and border for main and other */}
      <div
        className={`relative flex flex-col items-center gap-3 backdrop-blur-sm rounded-xl border border-primary/20 z-10 bg-background/50 
          ${isMain ? "px-6 py-4" : "px-5 py-3"}`}
      >
        {/* Icon with glow effect - Different sizes for main and other */}
        <div className='relative'>
          <motion.div
            className={`absolute inset-0 bg-primary/20 blur-md rounded-full ${
              isMain ? "scale-150" : "scale-125"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: isMain ? 2 : 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <Icon
            className={`relative text-primary z-10 ${
              isMain ? "w-8 h-8" : "w-7 h-7"
            }`}
          />
        </div>

        {/* Name with gradient underline - Different animation durations */}
        <div className='relative'>
          <span
            className={`font-medium text-foreground ${
              isMain ? "text-sm" : "text-xs"
            }`}
          >
            {name}
          </span>
          <motion.div
            className='absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent'
            animate={{
              opacity: [0.3, 0.6, 0.3],
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: isMain ? 3 : 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
