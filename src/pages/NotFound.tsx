import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center romantic-gradient relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-floating-heart opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: `${1.2 + Math.random() * 0.5}rem`,
            }}
          >
            💔
          </div>
        ))}
      </div>

      <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 mx-4 w-full max-w-md romantic-shadow animate-romantic-fade-in text-center">
        <Heart className="w-16 h-16 text-destructive mx-auto mb-6 animate-pulse-heart" />
        
        <h1 className="text-6xl font-bold romantic-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Sayfa Bulunamadı</h2>
        <p className="text-muted-foreground mb-8">
          Üzgünüm, aradığınız sayfa mevcut değil... 💔
        </p>
        
        <Button 
          asChild 
          className="romantic-button flex items-center space-x-2"
        >
          <a href="/">
            <Home className="w-5 h-5" />
            <span>Ana Sayfaya Dön</span>
          </a>
        </Button>
        
        <p className="text-sm text-muted-foreground mt-6">
          Kalbin hep seni ana sayfada bekliyor... 💕
        </p>
      </div>
    </div>
  );
};

export default NotFound;
