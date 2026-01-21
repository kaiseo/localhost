"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundControl() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element
        const audio = new Audio("/sounds/campfire_final.mp3");
        audio.loop = true;
        audio.volume = 0.5;
        audioRef.current = audio;

        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const toggleSound = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggleSound}
                className="w-12 h-12 rounded-full bg-[#1E1E1E]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FFB347] hover:bg-[#FFB347]/20 transition-all duration-300 group shadow-lg"
                aria-label="Toggle sound"
            >
                {isPlaying ? (
                    <div className="relative">
                        <Volume2 className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FFB347] rounded-full animate-ping" />
                    </div>
                ) : (
                    <VolumeX className="w-5 h-5 text-[#A1A1A1] group-hover:text-[#FFB347]" />
                )}
            </button>

            {/* Tooltip hint */}
            <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#121212]/90 px-3 py-1.5 rounded-lg text-xs text-[#A1A1A1] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                {isPlaying ? "Sound On" : "Sound Off"}
            </div>
        </div>
    );
}
