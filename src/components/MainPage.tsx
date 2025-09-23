gimport React, { useEffect, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import LoveMessage from './LoveMessage';
import Counter from './Counter';
import MusicSection from './MusicSection';
import PhotoGallery from './PhotoGallery';
import LoveLetter from './LoveLetter';

const MainPage: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-romantic-fade-in');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index: number) => (ref: HTMLDivElement | null) => {
    sectionsRef.current[index] = ref;
  };

  return (
    <div className="min-h-screen romantic-gradient">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-floating-heart opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="text-center">
            {/* Main Title */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-12 h-12 text-accent animate-sparkle mr-4" />
                <h1 className="text-5xl md:text-7xl font-bold text-white animate-love-bounce">
                  Sidra'ya Özel
                </h1>
                <Sparkles className="w-12 h-12 text-accent animate-sparkle ml-4" />
              </div>
              
              {/* Subtitle */}
              <p className="text-2xl md:text-3xl text-white mb-8">
                Senin için hazırladığım özel siteye hoşgeldin 💕
              </p>
              
              {/* Decorative Hearts */}
              <div className="flex justify-center space-x-4">
                <Heart className="w-8 h-8 text-primary animate-pulse-heart" fill="currentColor" />
                <Heart className="w-10 h-10 text-accent animate-love-bounce" fill="currentColor" />
                <Heart className="w-8 h-8 text-primary animate-pulse-heart" fill="currentColor" />
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
              </div>
              <p className="text-sm text-white mt-2">Aşağı kaydır</p>
            </div>
          </div>
        </section>

        {/* Love Message Section */}
        <section 
          ref={setSectionRef(0)} 
          className="py-20 px-4 opacity-0"
        >
          <LoveMessage />
        </section>

        {/* Counter Section */}
        <section 
          ref={setSectionRef(1)} 
          className="py-20 px-4 opacity-0"
        >
          <Counter />
        </section>

        {/* Music Section */}
        <section 
          ref={setSectionRef(2)} 
          className="py-20 px-4 opacity-0"
        >
          <MusicSection />
        </section>

        {/* Photo Gallery Section */}
        <section 
          ref={setSectionRef(3)} 
          className="py-20 px-4 opacity-0"
        >
          <PhotoGallery />
        </section>

        {/* Love Letter Section */}
        <section 
          ref={setSectionRef(4)} 
          className="py-20 px-4 opacity-0"
        >
          <LoveLetter />
        </section>

        {/* Footer */}
        <footer className="py-12 px-4">
          <div className="text-center">
            <div className="bg-card/60 backdrop-blur-lg rounded-3xl p-8 romantic-shadow max-w-2xl mx-auto">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-heart" fill="currentColor" />
              <h3 className="text-2xl font-bold romantic-text mb-4">
                 Seni Çok Seviyorum
              </h3>
              <p className="text-muted-foreground text-lg">
                Bu site, sana olan sevgimin göstergesi...💜
              </p>
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
