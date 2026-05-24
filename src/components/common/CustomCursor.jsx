import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".btn") ||
        target.classList.contains("swiper-pagination-bullet") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isClickable) {
        if (!isHovered) {
          isHovered = true;
          ring.classList.add("cursor-hover");
          dot.classList.add("cursor-hover");
        }
      } else {
        if (isHovered) {
          isHovered = false;
          ring.classList.remove("cursor-hover");
          dot.classList.remove("cursor-hover");
        }
      }
    };

    const handleMouseDown = () => {
      ring.classList.add("cursor-active");
      dot.classList.add("cursor-active");
    };

    const handleMouseUp = () => {
      ring.classList.remove("cursor-active");
      dot.classList.remove("cursor-active");
    };

    const tick = () => {
      // 1. Move dot (near-instant with direct translate3d)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      // 2. Interpolate ring position for smooth lag/spring effect
      const ease = 0.15; // Higher = faster tracking, lower = smoother lag
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const animFrame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;
