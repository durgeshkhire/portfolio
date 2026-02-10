"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", mouseMove);

        const interactiveElements = document.querySelectorAll('a, button, .interactive');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    const cursorX = useSpring(mousePosition.x, { damping: 20, stiffness: 250 });
    const cursorY = useSpring(mousePosition.y, { damping: 20, stiffness: 250 });

    return (
        <>
            <motion.div
                className="cursor-dot"
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 6,
                    height: 6,
                    backgroundColor: "#00f2ff",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 10000,
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="cursor-ring"
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.4,
                    borderColor: isHovering ? "#7000ff" : "#00f2ff",
                }}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 30,
                    height: 30,
                    border: "1px solid #00f2ff",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999,
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
