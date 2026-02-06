import PageHero from '../components/PageHero';

const resultGroups = [
  {
    title: '2025 Results',
    images: [
      { src: '/images/results/2025-01.jpg', alt: 'Results 2025' },
      { src: '/images/results/2025-02.png', alt: 'Results 2025' },
      { src: '/images/results/2025-03.png', alt: 'Results 2025' },
      { src: '/images/results/2025-04.png', alt: 'Results 2025' },
    ],
  },
  {
    title: '2024 Results',
    images: [
      { src: '/images/results/2024-01.jpg', alt: 'Results 2024' },
    ],
  },
  {
    title: '2023 Results',
    images: [
      { src: '/images/results/2023-01.jpg', alt: 'Results 2023' },
      { src: '/images/results/2023-02.jpg', alt: 'Results 2023' },
    ],
  },
  {
    title: '2022 Results',
    images: [
      { src: '/images/results/2022-01.jpg', alt: 'Results 2022' },
    ],
  },
  {
    title: '2020 Results',
    images: [
      { src: '/images/results/2020-01.jpg', alt: 'Results 2020' },
      { src: '/images/results/2020-02.jpg', alt: 'Results 2020' },
      { src: '/images/results/2020-03.jpg', alt: 'Results 2020' },
    ],
  },
];

export default function Results() {
  return (
    <>
      <PageHero title="Results" backgroundImage="/images/course-hero.webp" />

      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Our Results</h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg">
              Our students consistently achieve top ranks in IIT-JEE, NEET, and other competitive examinations.
            </p>
          </div>

          <div className="space-y-16">
            {resultGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-bold font-heading text-dark mb-6 pb-3 border-b-2 border-primary inline-block">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {group.images.map((img, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-light">
                      <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
