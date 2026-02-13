import { blogPosts } from '@/lib/data';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata = {
    title: "Blog | Ocean Park Digital",
    description: "Digital marketing strategies, SEO tips, and technical insights from the Ocean Park Digital team.",
};

export default function BlogIndex() {
    return (
        <div className="bg-slate-900 min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 drop-shadow-sm pb-2">
                        Digital Insights
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Strategies, trends, and technical deep dives to fuel your growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                            <Card className="h-full bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border-white/5 hover:border-cyan-500/30 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10">
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
                                            {post.category}
                                        </span>
                                        <span className="text-slate-500 text-xs font-medium">{post.readTime} read</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors font-display leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-400 line-clamp-3 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-cyan-400 text-sm font-bold uppercase tracking-wide mt-auto group-hover:translate-x-2 transition-transform">
                                        Read Article <span className="ml-2">→</span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
