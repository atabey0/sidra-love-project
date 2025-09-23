import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

const LoveMessage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold romantic-text mb-6 animate-love-bounce">
          Seni Seviyorum
        </h1>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Heart className="w-6 h-6 text-primary animate-pulse-heart" fill="currentColor" />
          <Sparkles className="w-6 h-6 text-accent animate-sparkle" />
          <Heart className="w-6 h-6 text-primary animate-pulse-heart" fill="currentColor" />
        </div>
      </div>

      {/* Love Messages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in">
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-xl font-semibold romantic-text">Canımın İçi</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Sen benim hayatımın en güzel hediyesisin. Her gün seninle uyanmak, 
            dünyanın en güzel mucizesi... Gülüşün kalbime dokunuyor, 
            sesين benim için en güzel müzik. 💖
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in" 
             style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-4">
            <Heart className="w-6 h-6 text-accent mr-2" fill="currentColor" />
            <h3 className="text-xl font-semibold romantic-text">Kalbimin Sultanı</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Gözlerin, benim için en güzel hikaye anlatıyor. Ellerini tuttuğumda 
            dünya durmuş gibi oluyor. Seninle geçirdiğim her an, 
            kalbimde sonsuza dek yaşayacak... ✨
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in"
             style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center mb-4">
            <Sparkles className="w-6 h-6 text-secondary mr-2" />
            <h3 className="text-xl font-semibold romantic-text">Ruh Eşim</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Sen benim eksik parçamdın ve seni buldum. Artık kendimi tam hissediyorum. 
            Seninle olmak bana güç veriyor, seninle gülmek beni mutlu ediyor. 
            Sonsuz sevgimle... 🌹
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in"
             style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center mb-4">
            <Heart className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-xl font-semibold romantic-text">Hayat Arkadaşım</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Seninle kurduğumuz her hayal, gerçek olmaya değer. 
            Gelecekte de hep yanımda olacağın bilmek, beni dünyanın 
            en şanslı insanı yapıyor. Sonsuza dek seninleyim... 💫
          </p>
        </div>
      </div>

      {/* Central Love Quote */}
      <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 
                    rounded-3xl p-8 romantic-shadow">
        <blockquote className="text-2xl md:text-3xl font-bold romantic-text mb-4 italic">
          "Aşk, iki kalbin bir ritimde atmasıdır"
        </blockquote>
        <p className="text-lg text-muted-foreground">
          Ve bizim kalplerimiz, en güzel melodiyi çalıyor... 💕
        </p>
        
        {/* Decorative hearts */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <Heart className="w-4 h-4 text-primary animate-floating-heart" fill="currentColor" />
          <Heart className="w-6 h-6 text-accent animate-pulse-heart" fill="currentColor" />
          <Heart className="w-8 h-8 text-primary animate-love-bounce" fill="currentColor" />
          <Heart className="w-6 h-6 text-accent animate-pulse-heart" fill="currentColor" />
          <Heart className="w-4 h-4 text-primary animate-floating-heart" fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default LoveMessage;