"use client";

import { useTranslations } from "next-intl";
import { FadeInSection } from "@/components/ui/fade-in-section";

export default function About() {
  const t = useTranslations("about");

  return (
    <div id='about' className='py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8'>
      <FadeInSection className='text-center'>
        <h2 className='mb-4 text-lg text-black dark:text-white md:text-4xl'>
          {t("title")}
        </h2>
        <p className='mx-auto max-w-3xl text-sm text-neutral-700 dark:text-neutral-300 md:text-base'>
          {t("body")}
        </p>
      </FadeInSection>
    </div>
  );
}
