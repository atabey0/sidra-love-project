import React from 'react';
import { Heart, Feather, Scroll } from 'lucide-react';

const LoveLetter: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Scroll className="w-8 h-8 text-primary mr-3 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Kalbimden Sana
          </h2>
          <Feather className="w-8 h-8 text-accent ml-3 animate-floating-heart" />
        </div>
        <p className="text-lg text-white">
          
        </p>
      </div>

      {/* Letter Container */}
      <div className="relative">
        {/* Letter Background */}
        <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-amber-900/30
                      rounded-3xl p-8 md:p-12 romantic-shadow border-2 border-amber-200/50 dark:border-amber-700/50
                      relative overflow-hidden">
          
          {/* Letter Paper Texture Lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-blue-300 dark:bg-blue-600 mb-6"
                style={{ marginTop: `${i * 24 + 80}px` }}
              />
            ))}
          </div>

          {/* Letter Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="inline-block">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-800 dark:text-amber-200 mb-2
                           font-serif italic">
                Sidom,
              </h3>
              <div className="w-32 h-px bg-amber-400 mx-auto" />
            </div>
          </div>

          {/* Letter Content */}
          <div className="space-y-6 text-amber-900 dark:text-amber-100 font-serif leading-relaxed relative z-10">
            <p className="text-lg md:text-xl indent-8">
              Seninle biraz konuşmak istedim. Son zamanlarda aramızdaki bu sessizlik ve mesafe beni çok üzüyor. Çünkü o eski, senli benli halimizi, seninle her şeyi rahatça konuşabildiğimiz günleri çok özledim.

Son zamanlarda yaşadığımız tartışmaları düşündüm ve sanırım bazı şeylerin farkına vardım. Seni incittiğimin; söylediğim veya yaptığım bazı şeylerin seni benden uzaklaştırdığının farkındayım. Bu durumun ne kadar yıpratıcı olduğunu şimdi çok daha iyi anlıyorum. Seni kırdığım için, o kırık yerleri açtığım için gerçekten çok üzgünüm.
            </p>

            <p className="text-lg md:text-xl indent-8">
              Biliyorum ki sadece “özür dilerim” demek yetmez. Ama içtenlikle, bu hale geldiğimiz için kendime de çok kızgınım. O anlarda daha dikkatli olmalıydım; seni dinlemeli ve anlamalıydım. Keşke o anları geri alabilsem ama yapamıyorum. Tek yapabileceğim, bu hatayı bir daha tekrarlamamak için çabalamak.
            </p>

            <div className="flex justify-center my-8">
              <Heart className="w-8 h-8 text-red-500 animate-pulse-heart" fill="currentColor" />
            </div>

            <p className="text-lg md:text-xl indent-8">
              Ve sana bir şey söylemek istiyorum: Bana karşı hissettiğim sevgi hiç değişmedi. Evlilik hayalleri kurduğumuz günleri, seni hayatımın merkezine koyduğum o düşünceleri hiç unutmadım. Bu yaşadıklarımız, beni sana daha sıkı sarılmaya ve bu ilişkiye daha çok sahip çıkmaya itti.
            </p>

            <p className="text-lg md:text-xl indent-8">
              Senden istediğim tek şey, bu ilişkiyi yeniden inşa etmek için bana bir şans vermen. Sana bu kez sadece kelimelerle değil, davranışlarımla güven vereceğime söz veriyorum. O kırık yerleri birlikte onarmak, aramızdaki mesafeyi birlikte kapatmak için konuşmaya, çaba harcamaya ve ilişkimizi düzeltmeye, birbirimize sahip çıkmaya var mısın?
            </p>

            <div className="text-center mt-12">
              <p className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
             
              </p>
              <div className="relative inline-block">
                <p className="text-2xl md:text-3xl font-bold text-red-700 dark:text-red-300 
                           font-serif italic">
                
                </p>
                <Heart className="absolute -top-2 -right-8 w-6 h-6 text-red-500 animate-floating-heart" 
                       fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <Feather className="w-12 h-12 text-amber-600 transform rotate-45" />
          </div>
          
          <div className="absolute bottom-8 left-8 opacity-20">
            <Heart className="w-10 h-10 text-red-500" fill="currentColor" />
          </div>

          {/* Letter Seal */}
          <div className="absolute bottom-12 right-12">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center 
                          romantic-glow opacity-80">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Shadow Pages */}
        <div className="absolute -bottom-2 -right-2 w-full h-full bg-amber-200/30 dark:bg-amber-800/20 
                      rounded-3xl -z-10" />
        <div className="absolute -bottom-1 -right-1 w-full h-full bg-amber-300/20 dark:bg-amber-700/10 
                      rounded-3xl -z-20" />
      </div>

      {/* Letter Footer Message */}
      <div className="text-center mt-8 p-4 bg-card/50 backdrop-blur-lg rounded-2xl romantic-shadow">
        <p className="text-muted-foreground italic">
          💌 💌
        </p>
      </div>
    </div>
  );
};

export default LoveLetter;
