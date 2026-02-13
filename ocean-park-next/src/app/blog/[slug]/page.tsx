import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    // Use `any` for params to avoid strict type issues with Next.js versions discrepancies
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    return {
        title: post ? `${post.title} | Ocean Park Digital` : 'Post Not Found',
        description: post?.excerpt,
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-24 text-center bg-slate-900 text-white">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 underline">Return to Blog</Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-24 relative bg-slate-900">
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-slate-400 hover:text-cyan-400 mb-8 transition-colors text-sm font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-bold uppercase tracking-wider border border-cyan-500/20">
                            {post.category}
                        </span>
                        <span className="text-slate-500 font-medium">
                            {post.readTime} read
                        </span>
                        <span className="text-slate-500 font-medium ml-auto">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed border-l-4 border-cyan-500 pl-6 italic">
                        {post.excerpt}
                    </p>
                </header>

                <div className="prose prose-lg prose-invert max-w-none text-slate-300/90 font-light">
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-8 leading-relaxed text-lg">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="mt-16 pt-12 border-t border-white/10 flex justify-between items-center">
                    <div className="text-slate-500 text-sm">
                        Written by <span className="text-white font-medium ml-1">{post.author}</span>
                    </div>

                    <Link
                        href="/#contact"
                        className="bg-white/5 hover:bg-white/10 text-sm px-6 py-3 rounded-full text-white transition-colors border border-white/10"
                    >
                        Start Your Project →
                    </Link>
                </div>
            </div>
        </article>
    );
}
