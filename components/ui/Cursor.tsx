"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      // Light up nearby binary digits
      const binaryDigits = document.querySelectorAll('.static-binary');
      binaryDigits.forEach((digit) => {
        const rect = digit.getBoundingClientRect();
        const digitX = rect.left + rect.width / 2;
        const digitY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - digitX, 2) + Math.pow(e.clientY - digitY, 2)
        );
        
        if (distance < 100) {
          (digit as HTMLElement).style.opacity = (1 - distance / 100).toString();
          (digit as HTMLElement).style.transform = `translateY(${(1 - distance / 100) * -10}px)`;
        } else {
          (digit as HTMLElement).style.opacity = '0.1';
          (digit as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.14);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.14);
      ring.style.left = ringPos.current.x + "px";
      ring.style.top = ringPos.current.y + "px";
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");
    const onDown = () => document.body.classList.add("cursor-click");
    const onUp = () => document.body.classList.remove("cursor-click");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    const interactables = () =>
      document.querySelectorAll("a, button, [data-hover]");

    const attachHover = () => {
      interactables().forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    // Observe DOM changes (e.g. after projects load)
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });
    attachHover();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="cursor">
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </div>
  );
}
