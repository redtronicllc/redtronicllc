import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        rounded-full bg-white text-black
        p-4 shadow-xl
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-2xl
        focus:outline-none focus:ring-2 focus:ring-black/30
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;