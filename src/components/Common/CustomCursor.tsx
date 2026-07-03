import { motion } from "motion/react";
import { useState, useEffect } from "react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"]');
      if (interactive) {
        setHoveredElement(interactive as HTMLElement);
      } else {
        setHoveredElement(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    const handleScroll = () => setHoveredElement(null);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isMobile) return null;

  let cursorX = mousePosition.x;
  let cursorY = mousePosition.y;
  let isHovering = false;

  let width = 28;
  let height = 28;
  let borderRadius = "0%";
  let backgroundColor = "transparent";
  let backdropBlur = "0px";
  let border = "none";

  if (hoveredElement) {
    isHovering = true;
    const rect = hoveredElement.getBoundingClientRect();
    
    // Magnetic pull center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const pullX = (mousePosition.x - centerX) * 0.15;
    const pullY = (mousePosition.y - centerY) * 0.15;
    
    cursorX = centerX + pullX;
    cursorY = centerY + pullY;
    
    width = rect.width + 16;
    height = rect.height + 16;
    
    const computedRadius = window.getComputedStyle(hoveredElement).borderRadius;
    borderRadius = computedRadius === '0px' ? '12px' : computedRadius;
    
    backgroundColor = "transparent"; // No background fill
    backdropBlur = "0px"; // No blur
    border = "1.5px solid rgba(0, 229, 153, 0.8)"; // Bright accent outline
  }

  // The arrow SVG matches a standard system cursor (pointing top-left).
  // The hotspot is the top-left tip, which is at (4, 2) in the 28x28 viewBox.
  const arrowHotspotX = 4;
  const arrowHotspotY = 2;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full pointer-events-none z-0 blur-[100px]"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
      />
      
      {/* Container for the cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center overflow-visible"
        style={{
          // Apply a subtle glass blur when hovering
          backdropFilter: `blur(${backdropBlur})`,
          WebkitBackdropFilter: `blur(${backdropBlur})`,
          boxShadow: isHovering ? "0 0 20px rgba(0, 229, 153, 0.4), inset 0 0 10px rgba(0, 229, 153, 0.2)" : "none",
        }}
        animate={{
          // When not hovering, position the tip of the arrow exactly at the mouse pointer
          x: isHovering ? cursorX - width / 2 : cursorX - arrowHotspotX,
          y: isHovering ? cursorY - height / 2 : cursorY - arrowHotspotY,
          width: width,
          height: height,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          border: border,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
      >
        {/* Render the glassmorphism arrow only in normal state (cross-fades out on hover) */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovering ? 0 : 1,
            scale: isHovering ? 0 : 1,
            rotate: isHovering ? 180 : 0 // optional fun spin when it disappears
          }}
          transition={{ duration: 0.3 }}
          className="absolute drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          style={{ width: 28, height: 28 }}
        >
          {/* Glassmorphism Arrow SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{
               // If the browser supports backdrop-filter on SVGs, this gives it the glass look internally
               filter: "drop-shadow(0px 8px 16px rgba(0,229,153,0.3))"
            }}
          >
            {/* The Arrow Path pointing top-left like a system cursor */}
            <path
              d="M4 2 L22 11 L13 14 L10 23 L4 2 Z"
              fill="rgba(0, 229, 153, 0.25)"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Inner highlight line to sell the glass effect */}
            <path
              d="M6.5 5.5 L19.5 12 L12.5 14.5 L10.5 19.5 L6.5 5.5 Z"
              fill="rgba(255, 255, 255, 0.1)"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </>
  );
};
