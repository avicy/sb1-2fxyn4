import React, { useEffect, useRef } from 'react';
import { Calendar, Heart, Share2, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  tagline: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  likes: number;
}

const Blog = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Joy of Creation',
      tagline: 'How Art Heals the Soul',
      excerpt: 'Exploring the therapeutic nature of creative expression and its profound impact on mental well-being.',
      category: 'Art & Wellness',
      date: 'Mar 15, 2024',
      readTime: '5 min',
      imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=2000',
      likes: 124
    },
    {
      id: '2',
      title: 'Tech & Art: A Love Story',
      tagline: 'When Code Meets Canvas',
      excerpt: 'Discovering the beautiful intersection of technology and traditional art forms in the digital age.',
      category: 'Digital Art',
      date: 'Mar 12, 2024',
      readTime: '4 min',
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000',
      likes: 98
    },
    {
      id: '3',
      title: 'Musical Algorithms',
      tagline: 'The Mathematics of Melody',
      excerpt: 'Understanding the fascinating relationship between mathematical patterns and musical composition.',
      category: 'Music Theory',
      date: 'Mar 8, 2024',
      readTime: '6 min',
      imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=2000',
      likes: 156
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.blog-card').forEach(card => {
      observerRef.current?.observe(card);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.1),rgba(120,0,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Creative Currents
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the intersections of art, technology, and human expression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="blog-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-purple-300 mb-3">{post.tagline}</p>
                  <p className="text-gray-300 mb-6 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-400 hover:text-pink-400 transition-colors">
                        <Heart className="w-5 h-5 mr-1" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;