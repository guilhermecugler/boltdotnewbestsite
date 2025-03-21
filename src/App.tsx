import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Trophy, Users, Award, Zap, Star, Github, Linkedin } from 'lucide-react';
import { Globe } from './components/Globe';

function App() {
  const sponsors = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'Apple', logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' },
    { name: 'Meta', logo: 'https://about.meta.com/brand/resources/facebookapp/logo/logo-black.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'IBM', logo: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg' },
  ];

  const judges = [
    {
      name: "Sarah Chen",
      title: "AI Research Director at DeepMind",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Pioneer in machine learning with over 15 years of experience in AI research and development.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO at TechVentures",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Serial entrepreneur and tech innovator with multiple successful exits in the software industry.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Emily Wong",
      title: "Distinguished Engineer at AWS",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Cloud computing expert and frequent speaker at major tech conferences worldwide.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/video-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation with bolt.new logo */}
        <nav className="absolute top-0 left-0 right-0 p-4 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-[#ea7f0a]" />
              <span className="text-2xl font-bold text-white">bolt<span className="text-[#ea7f0a]">.new</span></span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="min-h-screen flex flex-col items-center justify-start pt-24 text-center px-4">
          {/* Globe Canvas */}
          <div className="w-full h-[50vh] relative mb-8">
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
              <Globe />
            </Canvas>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ color: '#ea7f0a' }}>
              The World's Largest Hackathon
            </h1>
            <p className="text-2xl md:text-3xl mb-4">Virtual Event • Date TBD</p>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of developers to build, innovate, and compete for amazing prizes in this global coding event powered by bolt.new
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://form.typeform.com/to/wf94YwH4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#ea7f0a] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d97508] transition-colors"
              >
                Register Now
              </a>
              <a 
                href="https://hackathon.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-2 border-[#ea7f0a] text-[#ea7f0a] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#ea7f0a] hover:text-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </header>

        {/* Prizes Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black/80 to-[#ea7f0a]/20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <div className="relative">
                <Star className="absolute -top-6 -left-6 w-12 h-12 text-[#ea7f0a] animate-pulse" />
                <Star className="absolute -top-6 -right-6 w-12 h-12 text-[#ea7f0a] animate-pulse" />
                <h2 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#ea7f0a] to-yellow-500 text-transparent bg-clip-text">
                  $1M+ in Prizes
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Compete for life-changing prizes and showcase your skills to the world
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
                <Trophy className="w-12 h-12 mb-4 text-[#ea7f0a]" />
                <h3 className="text-2xl font-bold mb-2">Grand Prize</h3>
                <p className="text-xl">$500,000</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
                <Award className="w-12 h-12 mb-4 text-[#ea7f0a]" />
                <h3 className="text-2xl font-bold mb-2">Category Prizes</h3>
                <p className="text-xl">$250,000</p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-transform">
                <Users className="w-12 h-12 mb-4 text-[#ea7f0a]" />
                <h3 className="text-2xl font-bold mb-2">Special Awards</h3>
                <p className="text-xl">$250,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Judges Section */}
        <section className="py-20 px-4 bg-black/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#ea7f0a' }}>
              Meet Our Judges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {judges.map((judge, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="relative mb-6">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#ea7f0a]"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{judge.name}</h3>
                  <p className="text-[#ea7f0a] mb-4 text-center">{judge.title}</p>
                  <p className="text-gray-300 mb-4 text-center">{judge.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={judge.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={judge.linkedin} className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 px-4 bg-black/60 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#ea7f0a' }}>
              Sponsors
            </h2>
            <div className="relative">
              <div className="flex animate-carousel">
                {/* First set of sponsors */}
                {sponsors.map((sponsor, i) => (
                  <div
                    key={`sponsor-${i}`}
                    className="flex-none w-48 h-24 mx-8 bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm flex items-center justify-center p-4"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {sponsors.map((sponsor, i) => (
                  <div
                    key={`sponsor-duplicate-${i}`}
                    className="flex-none w-48 h-24 mx-8 bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm flex items-center justify-center p-4"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-black text-center">
          <p className="text-gray-400">
            © 2025 World's Largest Hackathon. All rights reserved.
          </p>
          <a
            href="http://hackathon.dev"
            className="text-[#ea7f0a] hover:underline mt-2 block"
          >
            hackathon.dev
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;