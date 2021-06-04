import { useEffect, useRef, useState } from 'react';

const GrowElementOnScroll = (options) => {
  const textRef = useRef(null);
  const [inView, setinView] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    // we don't want to reset state to false, our circle will get his final form once and for all
    if (entry.isIntersecting === true) {
      setinView(entry.isIntersecting);
    }
    setinView(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = textRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [textRef, options]);

  return [textRef, inView];
};

export default GrowElementOnScroll;
