import React, { useState } from 'react';
import { Palette, Music, Code, Pen, Play, Pause, ExternalLink } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  audioUrl?: string;
  link?: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const works: WorkItem[] = [
    {
      id: '1',
      title: "Urban Solitude",
      description: "A series exploring the beauty in city isolation through vibrant acrylics",
      category: "paintings",
      imageUrl: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80&w=2000",
    },
    {
      id: '2',
      title: "Digital Dreams",
      description: "UI/UX design for an innovative meditation app",
      category: "digital",
      imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=2000",
    },
    {
      id: '3',
      title: "Midnight Rain",
      description: "An ambient guitar piece inspired by late-night city sounds",
      category: "music",
      audioUrl: "/audio/sample.mp3",
      imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2000",
    },
    {
      id: '4',
      title: "Echoes of Dawn",
      description: "A collection of haikus and poems",
      category: "writing",
      link: "#",
    }
  ];

  const categories = [
    { id: 'all', label: 'All Works', icon: Palette },
    { id: 'paintings', label: 'Paintings', icon: Palette },
    { id: 'digital', label: 'Digital Art', icon: Code },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'writing', label: 'Writing', icon: Pen }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  const handleAudioToggle = (id: string) => {
    setPlayingAudio(playingAudio === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-pink-900/10 to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Works
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of my creative endeavors across different mediums
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeCategory === id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              {work.imageUrl && (
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{work.title}</h3>
                <p className="text-gray-300 mb-4">{work.description}</p>
                
                <div className="flex items-center gap-4">
                  {work.audioUrl && (
                    <button
                      onClick={() => handleAudioToggle(work.id)}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                    >
                      {playingAudio === work.id ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      {playingAudio === work.id ? 'Pause' : 'Play'}
                    </button>
                  )}
                  
                  {work.link && (
                    <a
                      href={work.link}
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;