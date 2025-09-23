import React, { useState, useRef } from 'react';
import { Play, Pause, Music, Heart, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MusicSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play when component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
    }, 1000); // Delay to ensure user interaction

    return () => clearTimeout(timer);
  }, []);

  // YouTube link'i ses dosyası olarak kullanamayacağımız için sample audio kullanıyoruz
  const songData = {
    title: "Özür Şarkım💜",
    artist: "Kalbimdeki Pişmanlık",
    // Bu kısma sonra gerçek şarkı linkini ekleyeceksin
    audioUrl: "https://files.catbox.moe/05rllq.mp3", // Placeholder
    youtubeUrl: "https://www.youtube.com/watch?v=xUAxFtJ6uUA&list=RDxUAxFtJ6uUA&start_radio=1"
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openYouTube = () => {
    window.open(songData.youtubeUrl, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
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
                  className={`w-16 h-16 md:w-20 md:h-20 text-white ${isPlaying ? 'animate-pulse-heart' : ''}`}
                  fill="currentColor"
                />
                {isPlaying && (
                  <div className="absolute -inset-4 border-2 border-white/30 rounded-full animate-ping" />
                )}
              </div>
            </div>
            
            {/* Floating musical notes */}
            {isPlaying && (
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

            {/* Audio Element */}
            <audio
              ref={audioRef}
              onEnded={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={songData.audioUrl} type="audio/mpeg" />
              Tarayıcınız ses dosyasını desteklemiyor.
            </audio>

            {/* Control Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start 
                          space-y-4 sm:space-y-0 sm:space-x-4">
              
              {/* Play/Pause Button */}
              <Button
                onClick={togglePlay}
                className="romantic-button flex items-center space-x-2 min-w-[140px]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    <span>Durdur</span>
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    <span>Çal</span>
                  </>
                )}
                <Volume2 className="w-4 h-4 ml-1" />
              </Button>

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
