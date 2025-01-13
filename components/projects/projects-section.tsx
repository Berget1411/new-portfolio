"use client";
import Project from "./project";
import { projects } from "@/assets/projects";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function ProjectDivider({ reverse }: { reverse: boolean }) {
  return (
    <div className='relative py-12'>
      <div
        className={`flex items-center justify-center gap-6 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className='relative h-[2px] w-full'>
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent' />
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent'
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className='relative'>
          <motion.div
            className='absolute -inset-4 rounded-full bg-primary/5 blur-md'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className='relative h-4 w-4 rounded-full bg-primary/30'
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          >
            <motion.div
              className='absolute inset-0 rounded-full bg-primary/40'
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.4, 0.1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className='absolute inset-[3px] rounded-full bg-primary'
              animate={{
                scale: [0.8, 1, 0.8],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        <div className='relative h-[2px] w-full'>
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent' />
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent'
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const productionProjects = projects.filter((project) => !project.devMode);
  const devProjects = projects.filter((project) => project.devMode);
  const t = useTranslations("projects");
  return (
    <>
      <div className='flex flex-col'>
        {productionProjects.map((project, index) => (
          <div key={project.id}>
            <Project {...project} reverse={index % 2 !== 0} />
            {index !== productionProjects.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <ProjectDivider reverse={index % 2 !== 0} />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {devProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Separator className='relative mb-16 mt-32 max-sm:mb-10 max-sm:mt-20'>
            <span className='absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xl font-bold text-primary max-sm:left-[25%] max-sm:text-lg'>
              {t("in-development")}
            </span>
          </Separator>
        </motion.div>
      )}

      <div className='flex flex-col'>
        {devProjects.map((project, index) => (
          <div key={project.id}>
            <Project {...project} reverse={index % 2 !== 0} />
            {index !== devProjects.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <ProjectDivider reverse={index % 2 !== 0} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
