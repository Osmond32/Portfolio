import { useEffect, useRef, useState } from 'react';

export function useIsVisible(options) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Imposta lo stato a true quando entra nell'area visibile
      // e a false appena ne esce, resettando l'animazione per i passaggi futuri!
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
}
