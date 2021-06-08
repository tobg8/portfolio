import { useEffect, useRef, useState } from 'react';

const GrowElementOnScroll = (options) => {
  const linkRef = useRef(null);
  const [inWindow, setInWindow] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting === false) {
      return;
    }
    setInWindow(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = linkRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [linkRef, options]);

  return [linkRef, inWindow];
};

export default GrowElementOnScroll;
