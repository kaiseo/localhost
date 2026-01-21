"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring configuration for smooth following
    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleOver);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleOver);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Main following ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-[#FFB347]/40 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? "rgba(255, 179, 71, 0.1)" : "transparent",
                }}
            />
            {/* Center dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FFB347] rounded-full"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
}
