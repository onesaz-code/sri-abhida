import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'D Chethan',
    quote:
      "SRI ABHIDA's IIT | JEE training transformed my understanding of complex subjects. Their unique teaching methods made learning enjoyable and effective!",
    meta: ['ROLL NO: 236130369', 'IIT - Indor -2023'],
    image: '/images/testimonials/t01.png',
    rating: 5,
  },
  {
    name: 'V.L .Mallika',
    quote:
      'Thanks to SRI ABHIDA, I aced my JEE exams! Their expert guidance and personalized attention were crucial in my success',
    meta: ['IIT - Dhanbad -2023'],
    image: '/images/testimonials/t02.webp',
    rating: 5,
  },
  {
    name: 'NEHA VARMA',
    quote:
      "The IIT | JEE training at SRI ABHIDA was a game-changer. The faculty's dedication and the comprehensive study materials were top-notch",
    meta: ['JEE MAINS HT NO: 230310530987', 'NIT - Calicut -2023'],
    image: '/images/testimonials/t04.png',
    rating: 5,
  },
  {
    name: 'Hima bindu',
    quote:
      "SRI ABHIDA's training program made daunting IIT | JEE syllabus manageable. Their tips and tricks were invaluable in cracking the exam.",
    meta: ['JEE Mains HT no: 230310401594', 'NIT -Jamshedpur -2023'],
    image: '/images/testimonials/t03.png',
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our students who achieved their dreams
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-light rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="text-xl font-bold font-heading text-dark mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <div className="text-primary font-semibold">
                    {testimonials[currentIndex].meta.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-primary">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, index) => (
                      <span key={index} aria-hidden="true">
                        *
                      </span>
                    ))}
                    <span className="sr-only">
                      {testimonials[currentIndex].rating} out of 5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-11 h-11 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-11 h-11 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
