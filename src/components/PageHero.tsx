import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  backgroundImage?: string;
}

export default function PageHero({ title, backgroundImage = '/images/about-hero.jpg' }: PageHeroProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  );
}
