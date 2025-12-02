import React from 'react';
import { BlogPost } from '../types/blog';
import blogPosts from '../data/blogPosts.json';

interface BlogListProps {
  onSelectPost: (slug: string) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onSelectPost }) => {
  const posts = blogPosts as BlogPost[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Digital Marketing Blog
        </h1>
        <p className="text-xl text-gray-600">
          Insights, strategies, and tips to grow your business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onSelectPost(post.slug)}
          >
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                {post.category && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                )}
                {post.readTime && (
                  <span>{post.readTime} read</span>
                )}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4 blog-excerpt">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                {post.date && (
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                )}
                <span className="text-blue-600 font-medium hover:text-blue-800">
                  Read more →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
