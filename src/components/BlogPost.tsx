import React from 'react';
import { BlogPost as BlogPostType } from '../types/blog';
import blogPosts from '../data/blogPosts.json';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, onBack }) => {
  const posts = blogPosts as BlogPostType[];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          ← Back to Blog
        </button>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={onBack}
        className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2 font-medium"
      >
        ← Back to Blog
      </button>

      <header className="mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          {post.category && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
          )}
          {post.readTime && <span>{post.readTime} read</span>}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-b border-gray-200 py-4">
          {post.author && (
            <span className="font-medium">By {post.author}</span>
          )}
          {post.date && (
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
      </header>

      <div className="max-w-none text-lg leading-relaxed text-gray-700 space-y-6">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 pt-8 border-t border-gray-200">
        <button
          onClick={onBack}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          ← Back to All Posts
        </button>
      </footer>
    </article>
  );
};

export default BlogPost;
