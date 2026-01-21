import { getAllPosts } from "@/lib/blog";
import BlogListClient from "@/components/BlogListClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: `Base Log | Localhost`,
    };
}

export default async function BlogListing({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const posts = getAllPosts(locale);

    return (
        <main className="min-h-screen bg-[#121212] pt-32 pb-24 px-6 md:px-12">
            <BlogListClient posts={posts} />
        </main>
    );
}
