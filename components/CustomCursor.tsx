import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let curX = 0;
    let curY = 0;
    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
    };

    const animateRing = () => {
      ringX += (curX - ringX) * 0.12;
      ringY += (curY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      animFrame = requestAnimationFrame(animateRing);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const interactives = document.querySelectorAll(
      "a, button, .project-card, input, textarea"
    );

    document.addEventListener("mousemove", onMouseMove);
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animFrame = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          width: "10px",
          height: "10px",
          background: "#e8200c",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
          transition: "transform 0.15s ease",
        }}
      />
      <div
        ref={ringRef}
        style={{
          width: isHovering ? "56px" : "36px",
          height: isHovering ? "56px" : "36px",
          border: "2px solid #1a3fcb",
          borderRadius: "50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9998,
          opacity: 0.6,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}