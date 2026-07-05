import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Title */}
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Recommendations</span>
          <h2 className="text-3xl font-bold font-display text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1 mt-2">
            What Clients Say
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Swiper Slider */}
        <div className="relative glass-card p-6 sm:p-10 rounded-3xl border border-slate-800/40">
          
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-primary/10">
            <Quote className="w-16 h-16 transform -rotate-12" />
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-10"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="flex flex-col items-center">
                <p className="text-slate-300 dark:text-slate-300 light:text-light-text-2 text-sm sm:text-base leading-relaxed italic mb-8 max-w-2xl mx-auto">
                  "{t.review}"
                </p>
                
                {/* User Info */}
                <div className="flex items-center space-x-3 justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-700">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-dark-text-1 dark:text-dark-text-1 light:text-light-text-1">{t.name}</h4>
                    <p className="text-[11px] text-slate-500">{t.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
