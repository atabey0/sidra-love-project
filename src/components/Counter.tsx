import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Clock } from 'lucide-react';

const Counter: React.FC = () => {
  const [liveTime, setLiveTime] = useState({
    days: 751,
    hours: 15,
    minutes: 34,
    seconds: 12
  });

  // Live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(prev => {
        let newSeconds = prev.seconds + 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes += 1;
        }
        if (newMinutes >= 60) {
          newMinutes = 0;
          newHours += 1;
        }
        if (newHours >= 24) {
          newHours = 0;
          newDays += 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Meeting Days Counter */}
      <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 romantic-shadow">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="w-8 h-8 text-primary mr-3" />
          <h3 className="text-2xl md:text-3xl font-bold romantic-text">
            İlk Tanıştığımız günden itibaren birlikte geçirdiğimiz süre
          </h3>
        </div>
        
        <div className="text-center">
          <div className="inline-block relative">
            <span className="text-6xl md:text-8xl font-bold counter-text animate-pulse-heart">
              2215
            </span>
            <div className="absolute -top-2 -right-2">
              <Heart className="w-6 h-6 text-accent animate-floating-heart" fill="currentColor" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground mt-2">
            gündür hayatımdasın ✨
          </p>
        </div>
      </div>

      {/* Live Relationship Counter */}
      <div className="bg-card/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 romantic-shadow">
        <div className="flex items-center justify-center mb-6">
          <Clock className="w-8 h-8 text-primary mr-3" />
          <h3 className="text-2xl md:text-3xl font-bold romantic-text">
            İlişkimize Ciddi Adım Attığımız Süre
          </h3>
        </div>
        
        {/* Live Counter Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="bg-primary/10 rounded-2xl p-4 mb-2">
              <span className="text-4xl md:text-5xl font-bold counter-text animate-pulse">
                {formatNumber(liveTime.days)}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Gün</p>
          </div>
          
          <div className="text-center">
            <div className="bg-accent/10 rounded-2xl p-4 mb-2">
              <span className="text-4xl md:text-5xl font-bold counter-text animate-pulse">
                {formatNumber(liveTime.hours)}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Saat</p>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary/20 rounded-2xl p-4 mb-2">
              <span className="text-4xl md:text-5xl font-bold counter-text animate-pulse">
                {formatNumber(liveTime.minutes)}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Dakika</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/20 rounded-2xl p-4 mb-2">
              <span className="text-4xl md:text-5xl font-bold counter-text animate-love-bounce">
                {formatNumber(liveTime.seconds)}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Saniye</p>
          </div>
        </div>

        {/* Romantic Messages */}
        <div className="text-center space-y-3">
          <p className="text-lg text-muted-foreground">
            💕 Her geçen saniye seninle daha güzel 💕
          </p>
          <p className="text-base text-muted-foreground italic">
            Zamanı durdurmak isterdim ki, seninle sonsuza kadar yaşayabilsem...
          </p>
          <p className="text-sm text-accent font-medium">
            ✨ Kalbimde sonsuz bir yer edindin ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
