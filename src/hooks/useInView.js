import { useEffect, useRef, useState } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, ...options });
    observer.observe(node);
    return () => observer.disconnect();
  // Options are static for each mounted reveal element in this page.
  // Keeping this observer mount-only prevents a re-render from recreating it.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, isVisible];
}
