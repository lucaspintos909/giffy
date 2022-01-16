import { useState, useEffect, useRef } from "react";

export function useNearElement({
  distance = "200px",
  externalRef,
  once = true,
} = {}) {
  const [isNearElement, setIsNearElement] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const ref = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNearElement(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearElement(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(ref);

    return () => observer.disconnect();
  });

  return { isNearElement, elementRef };
}
