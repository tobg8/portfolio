const scrollToBottom = () => {
  const scrollOptions = {
    left: 0,
    top: document.body.scrollHeight,
    behavior: 'smooth',
  };
  window.scrollTo(scrollOptions);
};
export default scrollToBottom;
