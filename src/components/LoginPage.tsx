import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password === 'deneme123') {
      setIsLoading(true);
      setTimeout(() => {
        onLogin();
      }, 1500);
    } else {
      setError('Üzgünüm şifre yanlış :)');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center romantic-gradient relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${1 + Math.random()}rem`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute animate-sparkle text-accent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
            }}
            size={16}
          />
        ))}
      </div>

      {/* Main Login Card */}
      <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 mx-4 w-full max-w-md romantic-shadow animate-romantic-fade-in">
        <div className="text-center mb-8">
          {/* Heart Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart 
                className="w-16 h-16 text-primary animate-pulse-heart heart-glow" 
                fill="currentColor"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-accent animate-sparkle" />
              </div>
            </div>
          </div>

          {/* Romantic Message */}
          <h1 className="text-3xl md:text-4xl font-bold romantic-text mb-4 animate-love-bounce">
            Senin için...
          </h1>
          
          <p className="text-lg text-muted-foreground mb-2">
            Sen benim en güzel hikayemsin... 💕
          </p>
          
          <p className="text-base text-muted-foreground italic">
            Bu Özel Siteyle Sana Kalbimi Açıyorum
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground block">
              Kalbime Açılan Kapının Şifresi 💝 / (Ciddi adım attığımız tarih)
              
            </label>
            
            <div className="relative">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifreyi gir..."
                className="w-full px-4 py-3 text-center text-lg border-2 border-primary/30 rounded-xl 
                         focus:border-primary focus:ring-2 focus:ring-primary/20 romantic-shadow
                         bg-background/50 backdrop-blur transition-all duration-300"
                required
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Heart className="w-5 h-5 text-primary/60" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-destructive text-center p-3 rounded-lg bg-destructive/10 animate-romantic-fade-in">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full romantic-button text-lg py-3 relative overflow-hidden group"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5 animate-pulse-heart" fill="currentColor" />
                <span>Kalbin açılıyor...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" fill="currentColor" />
                <span>Kalbimi Aç</span>
                <Sparkles className="w-4 h-4 group-hover:animate-sparkle" />
              </div>
            )}
          </Button>
        </form>

        {/* Footer Message */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
      
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
