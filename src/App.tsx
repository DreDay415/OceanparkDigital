import React, { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import Blog from './pages/Blog';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('blog')) {
      setCurrentPage('blog');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        {currentPage === 'home' ? <Home /> : <Blog />}
      </main>

      <footer className="bg-white border-t shadow-inner">
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold text-gray-900">Ocean Park Digital</span>
            <span className="hidden md:block text-sm text-gray-500">Digital growth solutions</span>
          </div>
          <div className="flex gap-3 md:gap-4">
            <button
              onClick={() => {
                setCurrentPage('home');
                window.history.pushState({}, '', '#home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('blog');
                window.history.pushState({}, '', '#blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'blog'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Blog
            </button>
          </div>
          <a href="/sitemap.xml" className="sr-only" aria-hidden="true" tabIndex={-1}>
            Sitemap
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;