import { useState, useEffect, useRef } from "react";

export function useNearElement(distance = "200px") {
  const [isNearElement, setIsNearElement] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNearElement(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return { isNearElement, elementRef };
}
