import React, { useState, useEffect } from 'react';
import { Mail, Send, Instagram, Twitter, Github, Youtube, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteFading, setIsQuoteFading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quotes = [
    "Art is not what you see, but what you make others see.",
    "In every piece of code, there's a story waiting to be told.",
    "Creativity is the bridge between imagination and reality.",
    "Technology is just a canvas; passion is the paint.",
    "Every line of code is a brushstroke in the digital age."
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100vh (full viewport height)
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsQuoteFading(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsQuoteFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', purpose: '', message: '' }); // Reset form
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-violet-900/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.1),rgba(120,0,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto font-serif italic">
            Whether you're a fellow artist, coder, or simply someone who appreciates creativity,
            I'd love to hear from you. Let's connect and bring something beautiful into the world together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-[1.02] transition-all duration-300 opacity-0 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  What does the world call you?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  How can I reach you?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-2">
                  What brings us together?
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  required
                >
                  <option value="">Select a purpose</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="question">Questions</option>
                  <option value="feedback">Feedback</option>
                  <option value="connect">Just to Connect</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  What's on your mind?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Let's create something awesome..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Some Creativity
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center animate-fade-in">
                Thank you for reaching out! Creativity thrives in connection—I'll get back to you soon! ✨
              </div>
            )}
          </div>

          {/* Newsletter & Social Links */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold mb-4">Join the Creative Journey</h3>
              <p className="text-gray-300 mb-6">
                Stay updated with my latest projects, art, and creative adventures.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h3 className="text-2xl font-semibold mb-4">Connect & Follow</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-white/10 transition-all duration-300 group ${color}`}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-gray-300 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Carousel */}
        <div className="mt-20 h-24 flex items-center justify-center overflow-hidden">
          <div
            className={`text-center transition-opacity duration-500 ${
              isQuoteFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <p className="text-xl text-gray-300 italic">"{quotes[currentQuoteIndex]}"</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8" />
          <p className="text-gray-300 mb-4">
            Creativity has no borders, and neither should connection.
            Let's collaborate, create, and make something incredible.
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
            Made with passion by Avi <span className="text-red-500">❤️</span>
          </p>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-purple-500 text-white shadow-lg transition-all duration-300 hover:bg-purple-600 hover:scale-110 z-[100] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Contact;