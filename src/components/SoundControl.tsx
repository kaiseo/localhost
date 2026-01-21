"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SoundControl() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showInvitation, setShowInvitation] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const invitationTimerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Create audio element once
        const audio = new Audio("/sounds/campfire_final.mp3");
        audio.loop = true;
        audio.volume = 0.4;
        audioRef.current = audio;

        // Show invitation after a short delay if not already playing
        invitationTimerRef.current = setTimeout(() => {
            if (audioRef.current && audioRef.current.paused) {
                setShowInvitation(true);
            }
        }, 3000);

        // Try to play on first global click (browser policy bypass)
        const handleFirstClick = () => {
            if (audioRef.current && !audioRef.current.paused) return; // Already playing

            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        setShowInvitation(false);
                        if (invitationTimerRef.current) clearTimeout(invitationTimerRef.current);
                    })
                    .catch(() => {
                        // User might need a direct click on a button
                    });
                setHasInteracted(true);
                window.removeEventListener('click', handleFirstClick);
            }
        };

        window.addEventListener('click', handleFirstClick);

        return () => {
            audio.pause();
            audioRef.current = null;
            if (invitationTimerRef.current) clearTimeout(invitationTimerRef.current);
            window.removeEventListener('click', handleFirstClick);
        };
    }, []); // Run only once on mount

    const toggleSound = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
        }
        setIsPlaying(!isPlaying);
        setHasInteracted(true);
        setShowInvitation(false);
        if (invitationTimerRef.current) clearTimeout(invitationTimerRef.current);
    };

    const handleInvitationClick = (e: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (!audioRef.current) return;

        // Only play if not already playing
        if (audioRef.current.paused) {
            audioRef.current.play().catch((err) => console.log("Audio play failed:", err));
            setIsPlaying(true);
        }

        setShowInvitation(false);
        setHasInteracted(true);
        if (invitationTimerRef.current) clearTimeout(invitationTimerRef.current);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3">
            <AnimatePresence>
                {showInvitation && (
                    <motion.button
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.8 }}
                        onClick={handleInvitationClick}
                        className="bg-[#FFB347] text-[#121212] px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-2 whitespace-nowrap hover:bg-[#FFCC80] transition-colors"
                    >
                        <span>Listen to Campfire</span>
                        <span className="text-base">🪵</span>
                    </motion.button>
                )}
            </AnimatePresence>

            <button
                onClick={toggleSound}
                className="w-12 h-12 rounded-full bg-[#1E1E1E]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FFB347] hover:bg-[#FFB347]/20 transition-all duration-300 group shadow-lg relative"
                aria-label="Toggle sound"
            >
                {isPlaying ? (
                    <div className="relative">
                        <Volume2 className="w-5 h-5" />
                        <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#FFB347] rounded-full animate-ping opacity-75" />
                        <span className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-[#FFB347] rounded-full opacity-40" />
                    </div>
                ) : (
                    <VolumeX className="w-5 h-5 text-[#A1A1A1] group-hover:text-[#FFB347]" />
                )}

                {/* Tooltip hint */}
                <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#121212]/95 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider text-[#A1A1A1] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 border border-white/5 shadow-2xl">
                    {isPlaying ? "ASMR Active" : "Sound Muted"}
                </div>
            </button>
        </div>
    );
}
