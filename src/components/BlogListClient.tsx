"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";
import { Post } from "@/lib/blog";

export default function BlogListClient({ posts }: { posts: Post[] }) {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");

    return (
        <div className="max-w-6xl mx-auto">
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="text-center md:text-left">
                    <span className="text-[#FFB347] font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Archive</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-6 tracking-tight">Base Log</h1>
                    <p className="text-[#A1A1A1] text-lg max-w-xl leading-relaxed">
                        빌리지 구축 과정과 노마드 인프라에 대한 빌더들의 기록입니다.
                    </p>
                </div>

                {/* View Switcher */}
                <div className="flex items-center justify-center p-1 bg-white/5 rounded-lg border border-white/10 self-center md:self-end">
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-[#FFB347] text-[#121212]" : "text-[#A1A1A1] hover:text-[#EDEDED]"}`}
                        title="List View"
                    >
                        <List size={20} />
                    </button>
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-[#FFB347] text-[#121212]" : "text-[#A1A1A1] hover:text-[#EDEDED]"}`}
                        title="Grid View"
                    >
                        <LayoutGrid size={20} />
                    </button>
                </div>
            </header>

            <motion.div
                layout
                className={viewMode === "list"
                    ? "grid gap-8 max-w-4xl mx-auto"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                }
            >
                <AnimatePresence mode="popLayout">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <motion.div
                                key={post.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className={`premium-card group block h-full rounded-2xl transition-all duration-300 ${viewMode === "list" ? "p-8" : "p-6"}`}
                                >
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                                <span className="text-[#FFB347] font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-[#FFB347]/10 rounded-full border border-[#FFB347]/20">
                                                    {post.category}
                                                </span>
                                                <span className="text-[#555] font-mono text-[10px]">
                                                    {post.date}
                                                </span>
                                            </div>
                                            <h2 className={`${viewMode === "list" ? "text-2xl" : "text-xl"} font-bold text-[#EDEDED] mb-3 group-hover:text-[#FFB347] transition-colors line-clamp-2`}>
                                                {post.title}
                                            </h2>
                                            <p className={`text-[#A1A1A1] leading-relaxed line-clamp-3 text-sm ${viewMode === "list" ? "mb-6" : "mb-4"}`}>
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        <div className={`flex items-center gap-2 text-[#FFB347] text-xs font-medium ${viewMode === "list" ? "opacity-0 group-hover:opacity-100" : "opacity-100"} transition-all translate-x-[-5px] group-hover:translate-x-0`}>
                                            Read Article
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 opacity-30">
                            <p>No logs found yet.</p>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
