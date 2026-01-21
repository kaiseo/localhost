"use client";

import { useEffect, useState } from "react";

export default function PixelFire() {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % 3);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col items-center">
            {/* Fire */}
            <div className="relative w-[64px] h-[80px]" style={{ imageRendering: "pixelated" }}>
                {/* Flame layers with animation */}
                <div
                    className="absolute inset-0 transition-opacity duration-100"
                    style={{ opacity: frame === 0 ? 1 : 0 }}
                >
                    <FireFrame1 />
                </div>
                <div
                    className="absolute inset-0 transition-opacity duration-100"
                    style={{ opacity: frame === 1 ? 1 : 0 }}
                >
                    <FireFrame2 />
                </div>
                <div
                    className="absolute inset-0 transition-opacity duration-100"
                    style={{ opacity: frame === 2 ? 1 : 0 }}
                >
                    <FireFrame3 />
                </div>
            </div>

            {/* Wood logs */}
            <div className="flex gap-0 -mt-2">
                <div className="w-[40px] h-[12px] bg-[#8B4513] rounded-sm transform -rotate-12"
                    style={{ boxShadow: "inset -2px -2px 0 #5D2E0C, inset 2px 2px 0 #A0522D" }} />
                <div className="w-[40px] h-[12px] bg-[#8B4513] rounded-sm transform rotate-12 -ml-3"
                    style={{ boxShadow: "inset -2px -2px 0 #5D2E0C, inset 2px 2px 0 #A0522D" }} />
            </div>

            {/* Glow effect underneath */}
            <div className="absolute bottom-0 w-24 h-8 bg-[#FF6B00]/30 blur-xl rounded-full" />
            <div className="absolute bottom-4 w-16 h-16 bg-[#FFB347]/20 blur-2xl rounded-full" />
        </div>
    );
}

// Pixel fire frame 1
function FireFrame1() {
    return (
        <div className="relative w-full h-full">
            {/* Core - Yellow/White */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FFFACD",
                left: "28px", bottom: "16px",
                boxShadow: `
          4px 0 0 #FFFACD,
          8px 0 0 #FFFACD,
          0px -4px 0 #FFFACD,
          4px -4px 0 #FFF8DC,
          8px -4px 0 #FFFACD,
          4px -8px 0 #FFFACD
        `
            }} />

            {/* Middle - Orange */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FF8C00",
                left: "20px", bottom: "12px",
                boxShadow: `
          4px 0 0 #FF8C00,
          16px 0 0 #FF8C00,
          20px 0 0 #FF8C00,
          0px -4px 0 #FF8C00,
          4px -4px 0 #FFA500,
          16px -4px 0 #FFA500,
          20px -4px 0 #FF8C00,
          0px -8px 0 #FF8C00,
          20px -8px 0 #FF8C00,
          4px -12px 0 #FF8C00,
          16px -12px 0 #FF8C00,
          8px -16px 0 #FFA500,
          12px -16px 0 #FFA500,
          8px -20px 0 #FF8C00,
          12px -24px 0 #FF8C00
        `
            }} />

            {/* Outer - Red */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FF4500",
                left: "16px", bottom: "8px",
                boxShadow: `
          24px 0 0 #FF4500,
          0px -4px 0 #FF4500,
          28px -4px 0 #FF4500,
          -4px -8px 0 #FF4500,
          28px -8px 0 #FF4500,
          0px -12px 0 #FF4500,
          24px -12px 0 #FF4500,
          4px -20px 0 #FF4500,
          20px -20px 0 #FF4500,
          4px -28px 0 #FF4500,
          16px -32px 0 #FF4500
        `
            }} />
        </div>
    );
}

// Pixel fire frame 2 - slightly different shape
function FireFrame2() {
    return (
        <div className="relative w-full h-full">
            {/* Core - Yellow/White */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FFFACD",
                left: "24px", bottom: "16px",
                boxShadow: `
          4px 0 0 #FFFACD,
          8px 0 0 #FFFACD,
          12px 0 0 #FFFACD,
          4px -4px 0 #FFF8DC,
          8px -4px 0 #FFFACD,
          8px -8px 0 #FFFACD
        `
            }} />

            {/* Middle - Orange */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FF8C00",
                left: "20px", bottom: "12px",
                boxShadow: `
          4px 0 0 #FFA500,
          16px 0 0 #FFA500,
          20px 0 0 #FF8C00,
          0px -4px 0 #FF8C00,
          20px -4px 0 #FF8C00,
          -4px -8px 0 #FF8C00,
          24px -8px 0 #FF8C00,
          0px -12px 0 #FFA500,
          20px -12px 0 #FFA500,
          4px -16px 0 #FF8C00,
          16px -16px 0 #FF8C00,
          8px -20px 0 #FF8C00,
          8px -24px 0 #FFA500,
          12px -28px 0 #FF8C00
        `
            }} />

            {/* Outer - Red */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FF4500",
                left: "16px", bottom: "8px",
                boxShadow: `
          24px 0 0 #FF4500,
          -4px -4px 0 #FF4500,
          28px -4px 0 #FF4500,
          -4px -12px 0 #FF4500,
          28px -12px 0 #FF4500,
          0px -20px 0 #FF4500,
          24px -20px 0 #FF4500,
          4px -24px 0 #FF4500,
          4px -32px 0 #FF4500,
          12px -36px 0 #FF4500
        `
            }} />
        </div>
    );
}

// Pixel fire frame 3 - another variation
function FireFrame3() {
    return (
        <div className="relative w-full h-full">
            {/* Core - Yellow/White */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FFFACD",
                left: "28px", bottom: "16px",
                boxShadow: `
          4px 0 0 #FFFACD,
          8px 0 0 #FFFACD,
          4px -4px 0 #FFF8DC,
          8px -4px 0 #FFFACD,
          4px -8px 0 #FFFACD,
          8px -8px 0 #FFFACD
        `
            }} />

            {/* Middle - Orange */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FF8C00",
                left: "24px", bottom: "12px",
                boxShadow: `
          16px 0 0 #FF8C00,
          0px -4px 0 #FFA500,
          16px -4px 0 #FFA500,
          -4px -8px 0 #FF8C00,
          20px -8px 0 #FF8C00,
          0px -12px 0 #FF8C00,
          16px -12px 0 #FF8C00,
          4px -16px 0 #FFA500,
          12px -16px 0 #FFA500,
          4px -20px 0 #FF8C00,
          8px -20px 0 #FF8C00,
          8px -24px 0 #FF8C00
        `
            }} />

            {/* Outer - Red */}
            <div className="absolute" style={{
                width: "4px", height: "4px", backgroundColor: "#FF4500",
                left: "20px", bottom: "8px",
                boxShadow: `
          20px 0 0 #FF4500,
          -4px -4px 0 #FF4500,
          24px -4px 0 #FF4500,
          -4px -8px 0 #FF4500,
          24px -8px 0 #FF4500,
          -4px -16px 0 #FF4500,
          24px -16px 0 #FF4500,
          0px -24px 0 #FF4500,
          16px -24px 0 #FF4500,
          0px -28px 0 #FF4500,
          8px -32px 0 #FF4500
        `
            }} />
        </div>
    );
}
