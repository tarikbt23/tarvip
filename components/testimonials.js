import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const testimonials = [
  {
    id: 1,
    name: 'Baptiste Guérin',
    company: 'Turbotech',
    image: '/images/turbotech.png', // Replace with actual image paths
    testimonial: 'Tek bir teklif oluşturmak için farklı parçalara yönelik birden fazla tasarımı aynı anda içe aktarılabilir. Bir dakikadan kısa bir sürede ekranda ayrıntılı bir maliyet tahmini belirir.',
  },
  {
    id: 2,
    name: 'Julian Jimenez',
    company: 'Carbonix',
    image: '/images/carbonix.png', // Replace with actual image paths
    testimonial: 'Muhteşem deneyim. Tüm beklentiler karşılandı. Olağanüstü kalite ve yüzey kalitesi. Teslim süresi başlangıçta belirtilenden daha hızlı.',
  },
  {
    id: 3,
    name: 'Harm Medendorp',
    company: 'LPS',
    image: '/images/lps.png', // Replace with actual image paths
    testimonial: 'Teslim süresi ve ürün maliyetinde hemen bir fark fark ettik. DFM araçlarıyla üretim maliyetlerini %50\'ye kadar azaltmayı başardık.',
  },
];

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-12">
      <h2 className="text-xl md:text-3xl font-bold mb-8 md:mb-12 lg:mb-14 text-blue-950">30,000 İşletmeye Siz de Katılın</h2>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          gap: '1rem',
          breakpoints: {
            768: {
              perPage: 1,
            },
            1024: {
              perPage: 3,
            },
            1440: {
              perPage: 3,
            },
          },
          pagination: false,
          arrows: false,
          autoplay: true,
          interval: 3000, // 3 saniye
        }}
        className="w-full max-w-screen-lg"
      >
        {testimonials.map((testimonial) => (
          <SplideSlide key={testimonial.id}>
            <div className="flex flex-col items-center text-center p-3 lg:p-6 bg-blue-900 text-white rounded-xl shadow-md h-full md:h-full">
              <img src={testimonial.image} alt={testimonial.company} className=" w-56 h-16 md:w-60 h-24 mb-4 object-contain" />
              <p className="mb-4">{testimonial.testimonial}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p>{testimonial.company}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonials;
