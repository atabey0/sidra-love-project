import React, { useState, useRef } from 'react';
import { Play, Pause, Music, Heart, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';


const MusicSection: React.FC = () => {
  // Arka plan şarkısı (siteye girince çalan)
  const [isBgPlaying, setIsBgPlaying] = useState(false);
  const bgAudioRef = useRef<HTMLAudioElement>(null);

  // Özür şarkısı (butona basınca çalan)
  const [isApologyPlaying, setIsApologyPlaying] = useState(false);
  const apologyAudioRef = useRef<HTMLAudioElement>(null);

  // Arka plan şarkısı otomatik başlasın
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (bgAudioRef.current) {
        bgAudioRef.current.play().catch(() => {});
        setIsBgPlaying(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Özür şarkısı verisi
   const songData = {
     title: "Özür Şarkımız 💜",
     artist: "Kalbimdeki Pişmanlık",
     audioUrl: "https://files.catbox.moe/iqufbl.mp3", // Butona basınca çalan şarkı
     youtubeUrl: "https://www.youtube.com/watch?v=4-vPgQjy1q8&list=RD4-vPgQjy1q8&start_radio=1"
   };

  // Özür şarkısı butonuna basınca
  const handleApologyPlay = () => {
    // Arka plan şarkısını durdur
    if (bgAudioRef.current) {
      bgAudioRef.current.pause();
      // bgAudioRef.current.currentTime = 0; // Kaldırıldı, şarkı başa sarmayacak
      setIsBgPlaying(false);
    }
    // Özür şarkısını başlat
    if (apologyAudioRef.current) {
      apologyAudioRef.current.play().catch(() => {});
      setIsApologyPlaying(true);
    }
  };

  // Özür şarkısını durdurma butonu
  const handleApologyPause = () => {
    if (apologyAudioRef.current) {
      apologyAudioRef.current.pause();
      setIsApologyPlaying(false);
    }
    // Özür şarkısı durunca arka plan şarkısı kaldığı yerden devam etsin
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch(() => {});
      setIsBgPlaying(true);
    }
  };

  const openYouTube = () => {
    window.open(songData.youtubeUrl, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Arka plan şarkısı (siteye girince otomatik çalacak, görünmez) */}
      <audio
        ref={bgAudioRef}
         src="https://files.catbox.moe/05rllq.mp3" // Arka plan şarkısı
        style={{ display: 'none' }}
        onEnded={() => setIsBgPlaying(false)}
        onPause={() => setIsBgPlaying(false)}
        onPlay={() => setIsBgPlaying(true)}
        loop
      />

      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Music className="w-8 h-8 text-primary mr-3 animate-pulse-heart" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Özür Şarkımız
          </h2>
          <Music className="w-8 h-8 text-primary ml-3 animate-pulse-heart" />
        </div>
        <p className="text-lg text-white">
          Bu şarkı kalbimden çıkan özrümün melodisi... 🎵
        </p>
      </div>

      {/* Music Player Card */}
      <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-8 romantic-shadow">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Album Cover / Artwork */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary via-accent to-secondary 
                          rounded-3xl flex items-center justify-center romantic-glow 
                          transition-transform duration-500 hover:scale-105">
              <div className="relative">
                <Heart 
                  className={`w-16 h-16 md:w-20 md:h-20 text-white ${isApologyPlaying ? 'animate-pulse-heart' : ''}`}
                  fill="currentColor"
                />
                {isApologyPlaying && (
                  <div className="absolute -inset-4 border-2 border-white/30 rounded-full animate-ping" />
                )}
              </div>
            </div>
            {/* Floating musical notes */}
            {isApologyPlaying && (
              <div className="absolute -top-2 -right-2">
                <div className="text-2xl animate-love-bounce">🎵</div>
              </div>
            )}
          </div>

          {/* Song Info & Controls */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold romantic-text mb-2">
                {songData.title}
              </h3>
              <p className="text-lg text-muted-foreground">
                {songData.artist}
              </p>
            </div>

            {/* Özür Şarkısı Audio Element */}
            <audio
              ref={apologyAudioRef}
              onEnded={() => setIsApologyPlaying(false)}
              onPlay={() => setIsApologyPlaying(true)}
              onPause={() => setIsApologyPlaying(false)}
            >
              <source src={songData.audioUrl} type="audio/mpeg" />
              Tarayıcınız ses dosyasını desteklemiyor.
            </audio>

            {/* Control Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start 
                          space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Play/Pause Button (Özür Şarkısı) */}
              {isApologyPlaying ? (
                <Button
                  onClick={handleApologyPause}
                  className="romantic-button flex items-center space-x-2 min-w-[140px]"
                >
                  <Pause className="w-5 h-5" />
                  <span>Durdur</span>
                  <Volume2 className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleApologyPlay}
                  className="romantic-button flex items-center space-x-2 min-w-[140px]"
                >
                  <Play className="w-5 h-5" />
                  <span>Çal</span>
                  <Volume2 className="w-4 h-4 ml-1" />
                </Button>
              )}

              {/* YouTube Button */}
              <Button
                onClick={openYouTube}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                         transition-all duration-300 hover:romantic-glow flex items-center space-x-2"
              >
                <Music className="w-5 h-5" />
                <span>YouTube'da Aç</span>
              </Button>
            </div>

            {/* Romantic Message */}
            <div className="bg-secondary/20 rounded-2xl p-4 mt-6">
              <p className="text-muted-foreground text-center md:text-left italic">
                "Bu şarkı, pişmanlığımın melodisi... Her notası, sana olan özrümle yankılanıyor 💜"
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Music Note */}
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          🎼 Müzik, kalplerin ortak dilinde konuşur 🎼
        </p>
      </div>
    </div>
  );
};

export default MusicSection;
