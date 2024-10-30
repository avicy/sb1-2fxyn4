import React from 'react';
import { Palette, Music, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Creativity is Life.
            </span>
            <span className="block mt-2 text-white">Let It Flow.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hey, I'm Avi Chimariya, a 20-year-old creator who lives and breathes all things creative. 
            From art to music, writing, coding, and technology, I believe in creating things that leave 
            a mark on the human spirit.
          </p>

          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <Palette size={32} className="text-purple-400" />
              </div>
              <span>Art</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-pink-500/20 rounded-full">
                <Music size={32} className="text-pink-400" />
              </div>
              <span>Music</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <Code size={32} className="text-blue-400" />
              </div>
              <span>Code</span>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#portfolio"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;