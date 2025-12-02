import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';

const Blog: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'post'>('list');
  const [selectedSlug, setSelectedSlug] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        setSelectedSlug(slug);
        setCurrentView('post');
      } else if (hash === 'blog') {
        setCurrentView('list');
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectPost = (slug: string) => {
    setSelectedSlug(slug);
    setCurrentView('post');
    window.history.pushState({}, '', `#blog/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('list');
    window.history.pushState({}, '', '#blog');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'list' ? (
        <BlogList onSelectPost={handleSelectPost} />
      ) : (
        <BlogPost slug={selectedSlug} onBack={handleBack} />
      )}
    </div>
  );
};

export default Blog;
