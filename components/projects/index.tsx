"use client";

import { useTranslations } from "next-intl";
import { projects } from "@/assets/projects";
import ProjectSummary from "./project-summary";
import { FadeInSection } from "@/components/ui/fade-in-section";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id='projects' className='w-full'>
      <div className='main-width mb-20'>
        <FadeInSection className='text-center mb-12'>
          <h2 className='text-2xl md:text-4xl font-bold mb-4'>{t("title")}</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {t("description")}
          </p>
        </FadeInSection>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto'>
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
    </section>
  );
}
