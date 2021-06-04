import { useEffect, useRef, useState } from 'react';

const GrowElementOnScroll = (options) => {
  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      return setInView(entry.isIntersecting);
    }
    return setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = headerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [headerRef, options]);

  return [headerRef, inView];
};

export default GrowElementOnScroll;
