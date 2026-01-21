"use client";

import { useEffect, useState } from "react";

export default function MouseSpotlight() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
            document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[1] hidden md:block"
            style={{
                background: `radial-gradient(800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 179, 71, 0.06), transparent 80%)`,
            }}
        />
    );
}
