import { useEffect, useRef, useState } from 'react';

const GrowElementOnScroll = (options) => {
  const workReference = useRef(null);
  const [isSeen, setIsSeen] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    // we don't want to reset state to false, our circle will get his final form once and for all
    if (entry.isIntersecting === false) {
      return;
    }
    setIsSeen(entry.isIntersecting);
  };

  useEffect(() => {
    const currentRef = workReference.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (workReference.current) {
      observer.observe(workReference.current);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [workReference, options]);

  return [workReference, isSeen];
};

export default GrowElementOnScroll;
