import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AdaptiveImage from './AdaptiveImage';

const faculty = [
  {
    name: 'Mr. K. Seshagiri Rao',
    subject: 'Chemistry',
    qualification: 'IIT Delhi',
    role: 'Chairman & Managing Director',
    image: '/images/faculty-seshagiri.png',
  },
  {
    name: 'Mr. Raja Narender Reddy',
    subject: 'Physics',
    qualification: 'JNTU',
    role: '20+ years experience',
    image: '/images/faculty-raja.webp',
  },
  {
    name: 'Mr. G. Murali Venkata Krishna',
    subject: 'Physics',
    qualification: 'LOYOLA',
    role: '',
    image: '/images/faculty-murali.webp',
  },
  {
    name: 'Mr. A. Shivaji',
    subject: 'Mathematics',
    qualification: 'Andhra University',
    role: '25+ years experience',
    image: '/images/faculty-shivaji.webp',
  },
  {
    name: 'Mr. Ramakrishna',
    subject: 'Administration',
    qualification: 'Administrative Officer',
    role: '12+ years experience',
    image: '/images/faculty-admin.webp',
  },
  {
    name: 'Mr. M. Pavan Kumar',
    subject: 'Mathematics',
    qualification: 'IIT Dhanbad',
    role: '04+ years experience',
    image: '/images/faculty-pavan.jpg',
  },
  {
    name: 'Mr. G. Sampath Kumar',
    subject: 'Principal',
    qualification: '',
    role: '18+ years experience',
    image: '/images/faculty-sampath.jpg',
  },
  {
    name: 'Mr. Mallesh',
    subject: 'Chemistry',
    qualification: 'Vice Principal',
    role: '18+ years experience',
    image: '/images/faculty-mallesh.jpg',
  },
  {
    name: 'Mrs. Lakshmi Rajyam',
    subject: 'Administration',
    qualification: 'M.B.A',
    role: 'Vice Principal',
    image: '/images/faculty-lakshmi.jpg',
  },
  {
    name: 'Mr. D. Ajay',
    subject: 'Chemistry',
    qualification: 'Osmania University',
    role: '04+ years experience',
    image: '/images/faculty-ajay.jpg',
  },
  {
    name: 'Mr. D. Sudhakar',
    subject: 'Physics',
    qualification: 'Osmania University',
    role: '04+ years experience',
    image: '/images/faculty-sudhakar.jpg',
  },
  {
    name: 'Mr. Ganesh (B.Tech)',
    subject: 'Mathematics',
    qualification: 'Osmania University',
    role: '04+ years experience',
    image: '/images/faculty-ganesh.jpg',
  },
  {
    name: 'Mr. B. Srinivas',
    subject: 'Chemistry',
    qualification: '',
    role: '15+ years experience',
    image: '/images/faculty-bsrinivas.jpg',
  },
  {
    name: 'Mr. Venkata Surendra',
    subject: 'Technical Head',
    qualification: '',
    role: '09+ years experience',
    image: '/images/faculty-surendra.jpg',
  },
  {
    name: 'Mr. L. Sankar Rao',
    subject: 'Technical Head',
    qualification: '',
    role: '09+ years experience',
    image: '/images/faculty-sankar.jpg',
  },
];

export default function Faculty() {
  const [viewportWidth, setViewportWidth] = useState(1024);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = useMemo(() => {
    if (viewportWidth >= 1024) {
      return 5;
    }
    if (viewportWidth >= 768) {
      return 4;
    }
    if (viewportWidth >= 640) {
      return 3;
    }
    return 2;
  }, [viewportWidth]);

  const visibleFaculty = Array.from({ length: itemsPerView }).map((_, index) => {
    const memberIndex = (startIndex + index) % faculty.length;
    return faculty[memberIndex];
  });

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? faculty.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === faculty.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (faculty.length <= itemsPerView) {
      return;
    }
    const interval = window.setInterval(() => {
      setStartIndex((prev) => (prev === faculty.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => window.clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="py-20 bg-light">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from experienced teachers from IITs, NITs, and top universities
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {visibleFaculty.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-b-4 border-primary group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <AdaptiveImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full"
                    imageClassName="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-primary font-semibold mb-1 uppercase tracking-wider">
                    {member.subject}
                  </div>
                  <h3 className="text-sm font-bold font-heading text-dark mb-1 leading-tight">
                    {member.name}
                  </h3>
                  {member.qualification && (
                    <p className="text-gray-600 text-xs">{member.qualification}</p>
                  )}
                  {member.role && (
                    <p className="text-gray-500 text-xs">{member.role}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Previous faculty"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: faculty.length }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setStartIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === startIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  aria-label={`Go to faculty slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 bg-white border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Next faculty"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
