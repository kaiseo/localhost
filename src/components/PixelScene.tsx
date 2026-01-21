"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PixelScene() {
    const [fireFrame, setFireFrame] = useState(0);
    const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Parallax layers
    const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const forestBackY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const forestFrontY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const groundY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    useEffect(() => {
        // Generate random stars
        const newStars = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 40, // Top 40% of scene
            size: Math.random() > 0.7 ? 2 : 1,
            delay: Math.random() * 2,
        }));
        setStars(newStars);

        // Fire animation
        const interval = setInterval(() => {
            setFireFrame((prev) => (prev + 1) % 3);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden" style={{ imageRendering: "pixelated" }}>
            {/* Gradient sky */}
            <motion.div style={{ y: skyY }} className="absolute inset-0 bg-gradient-to-b from-[#0a0a15] via-[#0d0d1a] to-[#121212]" />

            {/* Twinkling stars */}
            <motion.div style={{ y: skyY }} className="absolute inset-0">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size * 2}px`,
                            height: `${star.size * 2}px`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: "2s",
                            boxShadow: star.size > 1 ? "0 0 4px #fff, 0 0 8px #FFB347" : "none",
                        }}
                    />
                ))}
            </motion.div>

            {/* Forest silhouette - back layer (Moved UP) */}
            <motion.div style={{ y: forestBackY }} className="absolute bottom-[30%] left-0 right-0 flex justify-center items-end">
                <ForestBack />
            </motion.div>

            {/* Forest silhouette - front layer (Moved UP) */}
            <motion.div style={{ y: forestFrontY }} className="absolute bottom-[25%] left-0 right-0 flex justify-center items-end">
                <ForestFront />
            </motion.div>

            {/* Ground (Moved UP) - Extended to fill bottom */}
            <motion.div style={{ y: groundY }} className="absolute bottom-0 left-0 right-0 h-full">
                <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-[#1a1a1a]" />
                <div className="absolute bottom-[25%] left-0 right-0 h-[8px] bg-[#2a2a2a]" />

                {/* Campfire - centered (Moved UP) */}
                <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 scale-150">
                    <BigPixelFire frame={fireFrame} />
                </div>

                {/* Fire glow on ground (Moved UP) */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#FF6B00]/20 blur-3xl rounded-full" />
                <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[200px] h-[150px] bg-[#FFB347]/15 blur-2xl rounded-full" />
            </motion.div>

            {/* Bottom Gradient for Soft Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#121212] to-transparent" />
        </div>
    );
}

// Back layer forest (smaller, darker)
function ForestBack() {
    return (
        <div className="flex items-end gap-0 opacity-40">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="bg-[#0a0a0a]"
                    style={{
                        width: "40px",
                        height: `${60 + Math.sin(i * 0.8) * 30 + (Math.sin(i * 13.5) * 10 + 10)}px`,
                        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        marginLeft: i > 0 ? "-15px" : "0",
                    }}
                />
            ))}
        </div>
    );
}

// Front layer forest (taller, slightly lighter)
function ForestFront() {
    return (
        <div className="flex items-end gap-0 opacity-70">
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="bg-[#0f0f0f]"
                    style={{
                        width: "50px",
                        height: `${80 + Math.sin(i * 1.2) * 40 + (Math.cos(i * 7.7) * 15 + 15)}px`,
                        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        marginLeft: i > 0 ? "-20px" : "0",
                    }}
                />
            ))}
        </div>
    );
}

// Bigger pixel fire with animation frames
function BigPixelFire({ frame }: { frame: number }) {
    const px = 4; // pixel size

    return (
        <div className="relative w-[120px] h-[180px]">
            {/* Rising sparks/embers - More sparks added with negative delays for instant start */}
            {/* Primary Orange Sparks */}
            <Spark left="25%" delay={0} duration={2.5} size={px} color="#FFA500" />
            <Spark left="45%" delay={-0.3} duration={2} size={px} color="#FF6B00" />
            <Spark left="60%" delay={-1.5} duration={1.9} size={px} color="#FF9800" />
            <Spark left="30%" delay={-1.1} duration={2.3} size={px} color="#FF8C00" />

            {/* Bright Yellow Sparks */}
            <Spark left="65%" delay={-0.6} duration={2.8} size={px} color="#FFEB3B" />
            <Spark left="20%" delay={-1.8} duration={2.4} size={px * 0.5} color="#FFEB3B" />
            <Spark left="50%" delay={-0.8} duration={3} size={px * 0.75} color="#FFFF00" />

            {/* Smaller Mid-range Sparks */}
            <Spark left="35%" delay={-0.9} duration={1.8} size={px * 0.75} color="#FF9800" />
            <Spark left="55%" delay={-1.2} duration={2.2} size={px * 0.75} color="#FFA07A" />
            <Spark left="75%" delay={-2.1} duration={2.6} size={px * 0.5} color="#FF6B00" />
            <Spark left="40%" delay={-1.4} duration={2.0} size={px * 0.5} color="#FF7F50" />
            <Spark left="70%" delay={-0.5} duration={2.7} size={px * 0.75} color="#FFA07A" />

            {/* Fire flames */}
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
                {frame === 0 && <FireFrameA px={px} />}
                {frame === 1 && <FireFrameB px={px} />}
                {frame === 2 && <FireFrameC px={px} />}
            </div>

            {/* Wood logs */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1">
                <div
                    className="bg-[#5D3A1A] rounded-sm transform -rotate-12"
                    style={{
                        width: "50px",
                        height: "14px",
                        boxShadow: "inset -3px -3px 0 #3D2A10, inset 3px 3px 0 #7D4A2A",
                    }}
                />
                <div
                    className="bg-[#5D3A1A] rounded-sm transform rotate-12 -ml-6"
                    style={{
                        width: "50px",
                        height: "14px",
                        boxShadow: "inset -3px -3px 0 #3D2A10, inset 3px 3px 0 #7D4A2A",
                    }}
                />
            </div>
        </div>
    );
}

// Individual spark component with rising animation
function Spark({ left, delay, duration, size, color }: {
    left: string;
    delay: number;
    duration: number;
    size: number;
    color: string;
}) {
    return (
        <div
            className="absolute"
            style={{
                left,
                bottom: "60px",
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                boxShadow: `0 0 ${size}px ${color}`,
                animation: `sparkRise ${duration}s ease-out ${delay}s infinite`,
            }}
        />
    );
}

function FireFrameA({ px }: { px: number }) {
    return (
        <div className="relative" style={{ width: px * 16, height: px * 20 }}>
            {/* Yellow core */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#FFEB3B",
                    left: px * 6,
                    bottom: px * 2,
                    boxShadow: `
            ${px}px 0 0 #FFEB3B,
            ${px * 2}px 0 0 #FFEB3B,
            ${px * 3}px 0 0 #FFEB3B,
            0 -${px}px 0 #FFEB3B,
            ${px}px -${px}px 0 #FFF59D,
            ${px * 2}px -${px}px 0 #FFF59D,
            ${px * 3}px -${px}px 0 #FFEB3B,
            ${px}px -${px * 2}px 0 #FFEB3B,
            ${px * 2}px -${px * 2}px 0 #FFEB3B
          `,
                }}
            />
            {/* Orange middle */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#FF9800",
                    left: px * 4,
                    bottom: px,
                    boxShadow: `
            ${px}px 0 0 #FF9800,
            ${px * 6}px 0 0 #FF9800,
            ${px * 7}px 0 0 #FF9800,
            0 -${px}px 0 #FF9800,
            ${px * 7}px -${px}px 0 #FF9800,
            0 -${px * 2}px 0 #FFA726,
            ${px * 7}px -${px * 2}px 0 #FFA726,
            ${px}px -${px * 3}px 0 #FF9800,
            ${px * 6}px -${px * 3}px 0 #FF9800,
            ${px * 2}px -${px * 4}px 0 #FF9800,
            ${px * 5}px -${px * 4}px 0 #FF9800,
            ${px * 3}px -${px * 5}px 0 #FFA726,
            ${px * 4}px -${px * 5}px 0 #FFA726
          `,
                }}
            />
            {/* Red outer */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#F44336",
                    left: px * 3,
                    bottom: 0,
                    boxShadow: `
            ${px * 8}px 0 0 #F44336,
            0 -${px}px 0 #F44336,
            ${px * 9}px -${px}px 0 #F44336,
            -${px}px -${px * 2}px 0 #F44336,
            ${px * 9}px -${px * 2}px 0 #F44336,
            0 -${px * 4}px 0 #E53935,
            ${px * 8}px -${px * 4}px 0 #E53935,
            ${px}px -${px * 6}px 0 #F44336,
            ${px * 7}px -${px * 6}px 0 #F44336,
            ${px * 2}px -${px * 8}px 0 #F44336,
            ${px * 4}px -${px * 9}px 0 #E53935
          `,
                }}
            />
        </div>
    );
}

function FireFrameB({ px }: { px: number }) {
    return (
        <div className="relative" style={{ width: px * 16, height: px * 22 }}>
            {/* Yellow core */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#FFEB3B",
                    left: px * 5,
                    bottom: px * 2,
                    boxShadow: `
            ${px}px 0 0 #FFEB3B,
            ${px * 2}px 0 0 #FFF59D,
            ${px * 3}px 0 0 #FFEB3B,
            ${px * 4}px 0 0 #FFEB3B,
            ${px}px -${px}px 0 #FFEB3B,
            ${px * 2}px -${px}px 0 #FFF59D,
            ${px * 3}px -${px}px 0 #FFEB3B,
            ${px * 2}px -${px * 2}px 0 #FFEB3B
          `,
                }}
            />
            {/* Orange middle */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#FF9800",
                    left: px * 4,
                    bottom: px,
                    boxShadow: `
            ${px * 6}px 0 0 #FF9800,
            0 -${px}px 0 #FFA726,
            ${px * 6}px -${px}px 0 #FFA726,
            -${px}px -${px * 2}px 0 #FF9800,
            ${px * 7}px -${px * 2}px 0 #FF9800,
            0 -${px * 3}px 0 #FF9800,
            ${px * 6}px -${px * 3}px 0 #FF9800,
            ${px}px -${px * 4}px 0 #FFA726,
            ${px * 5}px -${px * 4}px 0 #FFA726,
            ${px * 2}px -${px * 5}px 0 #FF9800,
            ${px * 3}px -${px * 6}px 0 #FFA726
          `,
                }}
            />
            {/* Red outer */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#F44336",
                    left: px * 3,
                    bottom: 0,
                    boxShadow: `
            ${px * 8}px 0 0 #F44336,
            -${px}px -${px}px 0 #F44336,
            ${px * 9}px -${px}px 0 #F44336,
            -${px}px -${px * 3}px 0 #E53935,
            ${px * 9}px -${px * 3}px 0 #E53935,
            0 -${px * 5}px 0 #F44336,
            ${px * 8}px -${px * 5}px 0 #F44336,
            ${px}px -${px * 7}px 0 #E53935,
            ${px * 6}px -${px * 7}px 0 #E53935,
            ${px}px -${px * 9}px 0 #F44336,
            ${px * 3}px -${px * 10}px 0 #F44336
          `,
                }}
            />
        </div>
    );
}

function FireFrameC({ px }: { px: number }) {
    return (
        <div className="relative" style={{ width: px * 16, height: px * 21 }}>
            {/* Yellow core */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#FFEB3B",
                    left: px * 6,
                    bottom: px * 2,
                    boxShadow: `
            ${px}px 0 0 #FFF59D,
            ${px * 2}px 0 0 #FFEB3B,
            ${px * 3}px 0 0 #FFEB3B,
            0 -${px}px 0 #FFEB3B,
            ${px}px -${px}px 0 #FFF59D,
            ${px * 2}px -${px}px 0 #FFF59D,
            ${px * 3}px -${px}px 0 #FFEB3B,
            ${px}px -${px * 2}px 0 #FFEB3B,
            ${px * 2}px -${px * 2}px 0 #FFEB3B
          `,
                }}
            />
            {/* Orange middle */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#FF9800",
                    left: px * 5,
                    bottom: px,
                    boxShadow: `
            ${px * 5}px 0 0 #FF9800,
            0 -${px}px 0 #FFA726,
            ${px * 5}px -${px}px 0 #FFA726,
            -${px}px -${px * 2}px 0 #FF9800,
            ${px * 6}px -${px * 2}px 0 #FF9800,
            0 -${px * 3}px 0 #FFA726,
            ${px * 5}px -${px * 3}px 0 #FFA726,
            ${px}px -${px * 4}px 0 #FF9800,
            ${px * 4}px -${px * 4}px 0 #FF9800,
            ${px * 2}px -${px * 5}px 0 #FFA726,
            ${px * 2}px -${px * 6}px 0 #FF9800
          `,
                }}
            />
            {/* Red outer */}
            <div
                className="absolute"
                style={{
                    width: px,
                    height: px,
                    backgroundColor: "#F44336",
                    left: px * 4,
                    bottom: 0,
                    boxShadow: `
            ${px * 7}px 0 0 #F44336,
            -${px}px -${px}px 0 #F44336,
            ${px * 8}px -${px}px 0 #F44336,
            -${px}px -${px * 2}px 0 #E53935,
            ${px * 8}px -${px * 2}px 0 #E53935,
            -${px}px -${px * 4}px 0 #F44336,
            ${px * 8}px -${px * 4}px 0 #F44336,
            0 -${px * 6}px 0 #E53935,
            ${px * 6}px -${px * 6}px 0 #E53935,
            0 -${px * 8}px 0 #F44336,
            ${px * 2}px -${px * 9}px 0 #F44336
          `,
                }}
            />
        </div>
    );
}
