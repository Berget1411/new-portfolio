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
      rootMargin: "0px",
      threshold: 0.5, // Default threshold, can be customized via options
      ...options, // Merge custom options if provided
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all section elements
    sectionIds.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    // Cleanup the observer when component unmounts
    return () => {
      sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, [sectionIds, options]);

  return activeSection;
};

export default useActiveSection;
