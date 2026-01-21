import { getPostBySlug } from "@/lib/blog";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import NoiseTexture from "@/components/NoiseTexture";

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const post = getPostBySlug(slug, locale);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#121212] pt-32 pb-24 px-6 relative overflow-hidden">
            <NoiseTexture />

            <article className="max-w-3xl mx-auto relative z-10">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-[#FFB347] transition-colors mb-12 group"
                >
                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                    <span className="font-medium">Back to Base Log</span>
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-[#FFB347]/10 text-[#FFB347] text-xs font-mono uppercase tracking-widest rounded-full">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-8 leading-tight tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-[#555] font-mono border-t border-white/5 pt-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-[#FFB347]/50" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-[#FFB347]/50" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-orange max-w-none 
                    prose-headings:tracking-tight 
                    prose-p:leading-relaxed 
                    prose-p:text-lg 
                    prose-p:text-[#A1A1A1]
                    prose-blockquote:border-[#FFB347] 
                    prose-blockquote:bg-[#FFB347]/5 
                    prose-blockquote:font-normal 
                    prose-blockquote:italic-none 
                    prose-blockquote:rounded-r-lg
                    prose-strong:text-[#EDEDED]
                    prose-code:bg-[#1A1A1A]
                    prose-code:px-1.5
                    prose-code:py-0.5
                    prose-code:rounded
                    prose-code:before:content-none
                    prose-code:after:content-none
                ">
                    <MDXRemote source={post.content} />
                </div>

                {/* Footer CTA */}
                <footer className="mt-20 pt-12 border-t border-white/5">
                    <div className="premium-card p-10 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-[#EDEDED] mb-4">함께 마을을 지어보시겠어요?</h3>
                        <p className="text-[#A1A1A1] mb-8 max-w-md mx-auto">
                            Localhost의 소식을 가장 먼저 받아보고, 첫 번째 노마드 빌리지의 입주 기회를 잡으세요.
                        </p>
                        <Link
                            href="/join"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFB347] text-[#121212] font-semibold text-lg btn-glow hover:bg-[#FFCC80] transition-all"
                        >
                            Build with Us
                        </Link>
                    </div>
                </footer>
            </article>

            {/* Background Glow */}
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#FFB347]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FFB347]/3 rounded-full blur-[120px] pointer-events-none" />
        </main>
    );
}
