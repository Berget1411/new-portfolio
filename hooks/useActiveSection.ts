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
          const rect = entry.target.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (rect.top <= viewportHeight * 0.4) {
            setActiveSection(entry.target.id);
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
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, options]);

  return activeSection;
};

export default useActiveSection;
