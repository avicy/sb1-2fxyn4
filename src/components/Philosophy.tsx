import React, { useEffect, useRef } from 'react';
import { Brain, Lightbulb, Sparkles, Palette, Code, Music } from 'lucide-react';

const Philosophy = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.philosophy-card').forEach(card => {
      observerRef.current?.observe(card);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const philosophies = [
    {
      icon: Brain,
      title: "Creative Vision",
      content: "I believe creativity is about finding unique connections between seemingly unrelated concepts, transforming abstract ideas into tangible experiences that resonate with others.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Integration",
      content: "My approach combines traditional artistic methods with modern technology, creating experiences that bridge the gap between classical expression and digital innovation.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Continuous Evolution",
      content: "Every project is an opportunity to push boundaries and explore new territories. I embrace the journey of constant learning and experimentation.",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="philosophy" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Creative Philosophy
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            My approach to art, technology, and creative expression
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <div
              key={index}
              className="philosophy-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${item.gradient} mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 max-w-4xl mx-auto philosophy-card opacity-0">
          <blockquote className="relative p-8 bg-white/5 backdrop-blur-sm rounded-xl">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white">"</span>
            </div>
            <p className="text-xl text-gray-200 italic leading-relaxed">
              Art is my way of understanding and interpreting the world around us. Through various mediums, I strive to create experiences that inspire, challenge, and connect with people on a deeper level.
            </p>
            <footer className="mt-4 text-right">
              <cite className="text-gray-400 not-italic">- Avi Chimariya</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;