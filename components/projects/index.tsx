"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/assets/projects";
import ProjectSummary from "./project-summary";
import { FadeInSection } from "@/components/ui/fade-in-section";
import ProjectSection from "./projects-section";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id='projects' className='w-full main-width'>
      <div className='mb-20'>
        <FadeInSection className='text-center mb-12'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>{t("title")}</h2>
          <p className='text-muted-foreground'>{t("description")}</p>
        </FadeInSection>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16'>
          {projects.map((project, index) => (
            <FadeInSection
              key={project.id}
              className={`h-full ${
                projects.length % 2 === 1 && index === projects.length - 1
                  ? "sm:col-span-2 sm:max-w-2xl sm:mx-auto"
                  : ""
              }`}
            >
              <div id={project.id} className='h-full'>
                <ProjectSummary {...project} />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Separator className='relative my-32 max-sm:my-20' gradient />
      </motion.div>
      <ProjectSection />
    </section>
  );
}
