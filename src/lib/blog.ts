import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    category: string;
    locale: string;
    content: string;
}

export function getAllPosts(locale: string): Post[] {
    if (!fs.existsSync(postsDirectory)) return [];

    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames
        .filter((filename) => filename.endsWith(`.${locale}.mdx`))
        .map((filename) => {
            const slug = filename.replace(`.${locale}.mdx`, '');
            const fullPath = path.join(postsDirectory, filename);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                locale,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt,
                author: data.author || 'Localhost',
                category: data.category || 'Base Log',
            } as Post;
        });

    // Sort by date descending
    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string, locale: string): Post | null {
    const fullPath = path.join(postsDirectory, `${slug}.${locale}.mdx`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        locale,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author || 'Localhost',
        category: data.category || 'Base Log',
        content,
    } as Post;
}
