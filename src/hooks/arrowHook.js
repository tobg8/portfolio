import { useEffect, useRef, useState } from 'react';

const GrowElementOnScroll = (options) => {
  const arrowRef = useRef(null);
  const [svgInWindow, setsvgInWindow] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting === false) {
      return;
    }
    setsvgInWindow(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = arrowRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [arrowRef, options]);

  return [arrowRef, svgInWindow];
};

export default GrowElementOnScroll;
