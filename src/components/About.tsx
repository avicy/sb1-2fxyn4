import React from 'react';
import { Palette, Music, Code, Pen, BookOpen } from 'lucide-react';

const TimelineItem = ({ year, title, description, icon: Icon }: {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => (
  <div className="flex gap-4 relative">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div className="w-0.5 h-full bg-purple-500/20" />
    </div>
    <div className="pb-10">
      <span className="text-sm text-purple-400">{year}</span>
      <h3 className="text-xl font-semibold mt-1">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  </div>
);

const About = () => {
  const timeline = [
    {
      year: "Early Years",
      title: "Discovering Art",
      description: "Started exploring creativity through drawing and painting, discovering a natural talent for visual expression.",
      icon: Palette
    },
    {
      year: "Teen Years",
      title: "Musical Journey",
      description: "Picked up the guitar and began composing music, finding another outlet for creative expression.",
      icon: Music
    },
    {
      year: "Recent",
      title: "Tech & Coding",
      description: "Merged artistic vision with technology, learning to code and create digital experiences.",
      icon: Code
    },
    {
      year: "Present",
      title: "Creative Philosophy",
      description: "Developing a unique perspective on art, technology, and their role in human expression.",
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            A creative journey through art, music, and technology, driven by the passion to create and inspire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left Column: Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>

          {/* Right Column: Skills & Passions */}
          <div className="space-y-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Creative Arsenal</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Digital Art", value: 90 },
                  { label: "Music Production", value: 85 },
                  { label: "Web Development", value: 88 },
                  { label: "Creative Writing", value: 82 }
                ].map((skill, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>{skill.label}</span>
                      <span className="text-purple-400">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Philosophy</h3>
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300">
                "Creativity, to me, is a way of making sense of the world, of sharing that understanding with others. Every piece I create, whether in music, art, or code, is an expression of what makes us human."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;