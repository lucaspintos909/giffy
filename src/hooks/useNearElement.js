import { useState, useEffect, useRef } from "react";

export function useNearElement({
  distance = "200px",
  externalRef,
  once = true,
} = {}) {
  const [isNearElement, setIsNearElement] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : elementRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNearElement(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearElement(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  });

  return { isNearElement, elementRef };
}
