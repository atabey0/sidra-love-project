import React, { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      src: "https://files.catbox.moe/kexsc7.jpeg",
      message: "İlk karşılaştığımız an, kalbim sana ait olduğunu anladı... 💖"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      message: "Seninle geçirdiğim her an, hayatımın en güzel anıları 🌹"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      message: "Gülüşün, benim için dünyadaki en güzel müzik 🎵"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      message: "Seni sevmek, nefes almak kadar doğal geldi bana ✨"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      message: "Bu fotoğrafa her baktığımda, o günkü mutluluğu yeniden yaşıyorum 💫"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      message: "Seninle olmak, cennetin dünyada bir parçası gibi 🕊️"
    }
  ];

  const handlePhotoClick = (photoId: number) => {
    if (activePhoto === photoId) {
      setActivePhoto(null);
    } else {
      setActivePhoto(photoId);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Star className="w-8 h-8 text-primary mr-3 animate-sparkle" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Güzel Anılarımız
          </h2>
          <Star className="w-8 h-8 text-primary ml-3 animate-sparkle" />
        </div>
        <p className="text-lg text-white">
          Her fotoğraf, kalbimde ayrı bir yer... 📸💕
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer"
            onClick={() => handlePhotoClick(photo.id)}
          >
            {/* Photo Container */}
            <div className="relative overflow-hidden rounded-3xl romantic-shadow 
                          transition-all duration-500 group-hover:scale-105 
                          group-hover:romantic-glow">
              <img
                src={photo.src}
                alt={`Anı ${photo.id}`}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 
                         group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating Heart */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                            transition-all duration-300 transform group-hover:animate-floating-heart">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>

              {/* Sparkles */}
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 
                            transition-all duration-500 delay-100">
                <Sparkles className="w-6 h-6 text-accent animate-sparkle" />
              </div>
            </div>

            {/* Message Overlay */}
            {activePhoto === photo.id && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-3xl 
                            flex items-end justify-center p-6 animate-romantic-fade-in">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-4 romantic-shadow 
                              transform animate-love-bounce">
                  <p className="text-foreground text-center font-medium leading-relaxed">
                    {photo.message}
                  </p>
                  <div className="flex justify-center mt-2">
                    <Heart className="w-5 h-5 text-primary animate-pulse-heart" fill="currentColor" />
                  </div>
                </div>
              </div>
            )}

            {/* Photo Number Badge */}
            <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm 
                          rounded-full w-10 h-10 flex items-center justify-center 
                          text-primary-foreground font-bold text-sm">
              {photo.id}
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Footer */}
      <div className="text-center mt-12 p-6 bg-card/50 backdrop-blur-lg rounded-3xl romantic-shadow">
        <p className="text-muted-foreground mb-2">
          💡 <em>Fotoğraflara tıklayarak özel mesajları görebilirsin</em>
        </p>
        <p className="text-lg romantic-text font-semibold">
          ✨ Her anımız, sonsuz aşkımızın birer tanığı ✨
        </p>
      </div>
    </div>
  );
};

export default PhotoGallery;
