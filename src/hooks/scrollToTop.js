const useScrollToTop = () => {
  const scrollOptions = {
    left: 0,
    top: 0,
    behavior: 'smooth',
  };
  window.scrollTo(scrollOptions);
};
export default useScrollToTop;
