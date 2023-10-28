export default function useScroll() {
  const scrollToComponent = (
    event?: MouseEvent | null,
    targetId: string | undefined,
    offset: number = 0
  ) => {
    if (event) {
      event.preventDefault();
    }
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (!element) return;

    const position = element.offsetTop - offset;
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  return {
    scrollToComponent
  };
}
