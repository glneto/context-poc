export const useRenderHighlight = (ref) => {
  if (ref.current) {
    ref.current.style.backgroundColor = "red";
    ref.current.style.transition = "all 1s";

    setTimeout(() => {
      ref.current.style.backgroundColor = "#F0F0F0";
    }, 300);
  }
};
