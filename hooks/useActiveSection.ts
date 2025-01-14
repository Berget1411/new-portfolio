// hooks/useActiveSection.ts
import { useEffect, useState } from "react";

const useActiveSection = (
  sectionIds: string[],
  options: IntersectionObserverInit = {}
): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      ...options,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          let element = entry.target;
          while (element && !sectionIds.includes(element.id)) {
            element = element.parentElement as HTMLElement;
          }

          if (element && element.id) {
            setActiveSection(element.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        const contentDiv = element.querySelector(`[data-section="${id}"]`);
        if (contentDiv) {
          observer.observe(contentDiv);
        }
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};

export default useActiveSection;
