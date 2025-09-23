import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

const LoveMessage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-love-bounce">
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
            <h3 className="text-xl font-semibold romantic-text">Hatalarımı Farkettim</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Seni incittiğimin, söylediğim veya yaptığım 
            bazı şeylerin seni benden uzaklaştırdığının farkındayım.💔
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in" 
             style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mb-4">
            <Heart className="w-6 h-6 text-accent mr-2" fill="currentColor" />
            <h3 className="text-xl font-semibold romantic-text">Özrüm</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Sana sadece ‘özür dilerim’ demek yetmez, 
            kalpten hissettiğimi göstermek istiyorum
            Umarım hatalarımı affedebilirsin 🙏
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in"
             style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center mb-4">
            <Sparkles className="w-6 h-6 text-secondary mr-2" />
            <h3 className="text-xl font-semibold romantic-text">Sevgim</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Sana olan sevgim hiç azalmadı, aksine daha da güçlendi. 
            Sen benim hayatımın anlamısın ve sensiz hiçbir şey eskisi gibi değil. 💜
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-lg rounded-2xl p-6 romantic-shadow animate-romantic-fade-in"
             style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center mb-4">
            <Heart className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-xl font-semibold romantic-text">Sözüm</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Biliyorum, güvenini yeniden kazanmam zaman alacak.
            Ama sana olan sevgimle ve çabalarımla bunu başaracağıma inanıyorum.
            Bana kendimi affetme şansı verirsen, her şeyi düzeltmek için söz veriyorum.
          </p>
        </div>
      </div>

      {/* Central Love Quote */}
      <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 
                    rounded-3xl p-8 romantic-shadow">
        <blockquote className="text-6xl md:text-3xl font-bold text-white mb-4 italic">
          Umut 
           & 
          Sidra
        </blockquote>
        <p className="text-3xl md:text-3xl font-bold text-white mb-4 italic">
          Birlikte geçirdiğimiz her an, bir yıldız kadar parlak ve değerli
          
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
