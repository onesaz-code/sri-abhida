import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Lightbulb, Target } from 'lucide-react';
import Faculty from '../components/Faculty';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import AdaptiveImage from '../components/AdaptiveImage';

const courses = [
  {
    title: 'IIT JEE (Main & Advanced)',
    description:
      'Master IIT JEE (Main & Advanced) with our expert-led coaching program. Get concept-driven learning, advanced problem-solving techniques, regular mock tests, and smart exam strategies designed to help you secure top ranks.',
    to: '/iit-jee-main-advanced',
    image: '/images/lecture.png',
  },
  {
    title: 'IIT/JEE Long Term Coaching',
    description:
      'Transform your IIT/JEE aspirations with our long-term coaching program. Deep dive into concepts, personalized mentoring, and continuous performance tracking for assured success.',
    to: '/iit-jee-long-term-coaching',
    image: '/images/calculating.png',
  },
  {
    title: 'Foundation Course – 8th, 9th & 10th Class',
    description:
      'Build a strong foundation for 8th, 9th & 10th Class. Our course lays the groundwork for IIT/JEE success with fundamental concepts and skill development.',
    to: '/foundation-course',
    image: '/images/experiment.png',
  },
  {
    title: 'NEET',
    description:
      'Comprehensive NEET coaching with expert biology, chemistry, and physics faculty. Structured approach to crack one of India\'s toughest medical entrance exams.',
    to: '/neet',
    image: '/images/microscope.png',
  },
  {
    title: 'Crash Course',
    description:
      'Intensive crash course for last-minute preparation. Focused revision, mock tests, and exam strategies to maximize your score.',
    to: '/crash-course',
    image: '/images/calculating.png',
  },
];

const whyFeatures = [
  {
    icon: Users,
    title: 'Highly Qualified & Dedicated Faculty',
    description: 'Experienced teachers specialised in Physics, Chemistry, Maths & Biology, delivering deep conceptual understanding and exam-focused training.',
  },
  {
    icon: BookOpen,
    title: 'Small Batch Sizes',
    description: 'Limited students per batch ensuring personalized attention and better student-teacher interaction for effective learning.',
  },
  {
    icon: Lightbulb,
    title: 'Conceptual Clarity',
    description: 'Focus on building strong fundamentals rather than rote learning, enabling students to tackle any problem with confidence.',
  },
  {
    icon: Target,
    title: 'Regular Testing & Analysis',
    description: 'Weekly tests, mock exams, and detailed performance analysis with instant score, rank & performance reports.',
  },
];

const achievementImages = [
  '/images/results/achievements-01.jpeg',
  '/images/results/achievements-02.jpeg',
  '/images/results/achievements-03.jpeg',
  '/images/results/achievements-04.jpeg',
  '/images/results/achievements-05.jpeg',
];

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(1024);
  const [achievementIndex, setAchievementIndex] = useState(0);
  const [showPromoModal, setShowPromoModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowPromoModal(true);
    }, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const achievementsPerView = useMemo(() => {
    if (viewportWidth >= 1024) {
      return 3;
    }
    if (viewportWidth >= 768) {
      return 2;
    }
    return 1;
  }, [viewportWidth]);

  const [achievementTransition, setAchievementTransition] = useState(true);
  const totalAchievementSlides = achievementImages.length;
  const totalAchievementStops = Math.max(1, totalAchievementSlides);

  const achievementSlides = useMemo(() => {
    return achievementImages.map((_, startIndex) =>
      Array.from({ length: achievementsPerView }).map((__, offset) => {
        const imageIndex = (startIndex + offset) % achievementImages.length;
        return achievementImages[imageIndex];
      })
    );
  }, [achievementsPerView]);
  const trackAchievementSlides = useMemo(
    () => achievementSlides.concat(achievementSlides[0] ? [achievementSlides[0]] : []),
    [achievementSlides]
  );
  const safeAchievementIndex =
    totalAchievementSlides === 0 ? 0 : achievementIndex % totalAchievementSlides;

  const handleAchievementPrev = () => {
    setAchievementTransition(true);
    setAchievementIndex((prev) => (prev === 0 ? totalAchievementSlides - 1 : prev - 1));
  };

  const handleAchievementNext = () => {
    setAchievementTransition(true);
    setAchievementIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (totalAchievementSlides <= achievementsPerView) {
      return;
    }
    const interval = window.setInterval(() => {
      setAchievementIndex((prev) => prev + 1);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [achievementsPerView, totalAchievementSlides]);

  return (
    <>
      {showPromoModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowPromoModal(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close promo"
              onClick={() => setShowPromoModal(false)}
              className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-light text-dark shadow-lg hover:bg-light/80 transition"
            >
              X
            </button>
            <a
              href="https://sriabhidakp.onesaz.com/new-registration"
              className="block"
            >
              <img
                src="/images/saatt-popup.jpeg"
                alt="SAAT 2026-27 registration"
                className="w-full rounded-2xl shadow-2xl"
              />
            </a>
          </div>
        </div>
      ) : null}
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/video_fallback.jpeg"
          >
            <source src="/videos/campus.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/35"></div>
        </div>

        <div className="relative z-10 max-w-container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-primary text-lg font-bold border border-primary/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Admission Open FOR SESSION 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                We Design and Improve a Brighter Future For Your Education
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/70 leading-relaxed max-w-xl">
                We create innovative learning solutions that inspire students, empower educators, and drive academic success. From personalized programs to modern teaching methods, we help you achieve real, measurable growth with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact-us"
                  className="bg-primary text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all font-semibold text-lg hover:scale-105 transform inline-flex items-center justify-center gap-2"
                >
                  APPLY NOW
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919553300062"
                  className="bg-light/10 backdrop-blur text-white border border-light/20 px-8 py-4 rounded-full hover:bg-light hover:text-dark transition-all font-semibold text-lg inline-flex items-center justify-center"
                >
                  Request a Call Back
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <ContactForm
                heading="Get Free Counselling"
                subheading="Fill the form below and we'll call you back"
                buttonText="Submit & Get Free Counselling"
                showCourseField
                variant="transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold font-heading mb-2">1000+</div>
              <div className="text-blue-200 text-lg">Happy Students</div>
              <p className="mt-3 text-sm md:text-base text-blue-100/90 max-w-xs mx-auto">
                Guided with expert mentorship, proven study plans, and consistent academic support to achieve their goals.
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold font-heading mb-2">800+</div>
              <div className="text-blue-200 text-lg">Engineering Admissions</div>
              <p className="mt-3 text-sm md:text-base text-blue-100/90 max-w-xs mx-auto">
                Successfully placed students in top engineering colleges through focused preparation and result-driven training.
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold font-heading mb-2">150+</div>
              <div className="text-blue-200 text-lg">JEE Admissions</div>
              <p className="mt-3 text-sm md:text-base text-blue-100/90 max-w-xs mx-auto">
                Cracked one of India&apos;s toughest exams with strategic coaching, concept clarity, and continuous performance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/sectionimage1.jpg" alt="Sri Abhida Campus" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
                Sri Abhida About Us
              </h2>
              <div className="space-y-4 text-dark/70 leading-relaxed">
                <p>
                  <strong className="text-dark">Our Mission:</strong> Our mission is to empower students through exceptional education, fostering innovative thinking, and building a strong foundation for future academic and career success in a supportive, inclusive environment.
                </p>
                <p>
                  <strong className="text-dark">Our Vision:</strong> Quality education is the right of every student. Sri Abhida was started with a single vision that every Parent must see best in their Child. Our major motto is 'unearthing the naturally talented students' around the world who cannot afford corporate fee structure.
                </p>
              </div>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold mt-6"
              >
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Results</p>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark mb-4">
              Our Students' Achievements
            </h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className={`flex transition-transform duration-500 ease-out ${
                  achievementTransition ? '' : 'transition-none'
                }`}
                style={{
                  transform: `translateX(-${achievementIndex * 100}%)`,
                }}
                onTransitionEnd={() => {
                  if (achievementIndex >= totalAchievementSlides) {
                    setAchievementTransition(false);
                    setAchievementIndex(0);
                    window.requestAnimationFrame(() => {
                      setAchievementTransition(true);
                    });
                  }
                }}
              >
                {trackAchievementSlides.map((slide, index) => (
                  <div
                    key={`slide-${index}`}
                    className="flex-shrink-0 w-full px-1 md:px-2"
                  >
                    <div
                      className="grid gap-4"
                      style={{
                        gridTemplateColumns: `repeat(${achievementsPerView}, minmax(0, 1fr))`,
                      }}
                    >
                      {slide.map((src) => (
                        <AdaptiveImage
                          key={`${src}-${index}`}
                          src={src}
                          alt="Student Achievements"
                          className="rounded-xl shadow-md w-full aspect-[4/3]"
                          imageClassName="w-full h-full object-contain"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleAchievementPrev}
                className="w-11 h-11 bg-light border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Previous achievement"
              >
                <span className="text-xl font-bold leading-none">{'<'}</span>
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalAchievementStops }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setAchievementIndex(index)}
                    className={`h-3 rounded-full transition-all ${
                      index === safeAchievementIndex ? 'bg-primary w-8' : 'bg-border/70 hover:bg-border w-3'
                    }`}
                    aria-label={`Go to achievements slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleAchievementNext}
                className="w-11 h-11 bg-light border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Next achievement"
              >
                <span className="text-xl font-bold leading-none">{'>'}</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/results"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold"
            >
              View All Results <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Our Courses</p>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark mb-4">
              Admission Open FOR SESSION 2026
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg">
              INTER+IIT-JEE MAIN/EAPCET LONG TERM JEE AND NEET
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.to}
                to={course.to}
                className="group bg-light rounded-xl shadow-md hover:shadow-xl border border-border overflow-hidden transition-all hover:-translate-y-1"
              >
                <div className="p-6 flex items-center justify-center h-48 bg-light/80">
                  <img src={course.image} alt={course.title} className="max-h-36 object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading text-dark mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-dark/70 text-sm leading-relaxed mb-4">{course.description}</p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Know More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sri Abhida Section */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Why Sri Abhida?</p>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-dark mb-4">
              Why Thousands of Parents Trust Us
            </h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg">
              Sri Abhida is built on the belief that every student can succeed with the right guidance, discipline, and personalised teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-5 p-6 bg-light/80 rounded-xl hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-dark mb-2">{feature.title}</h3>
                  <p className="text-dark/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <Faculty />

      {/* Testimonials */}
      <Testimonials />

      {/* Mobile CTA Form */}
      <section className="py-16 bg-light lg:hidden">
        <div className="max-w-container mx-auto px-4">
          <ContactForm
            heading="Get Free Counselling"
            subheading="Fill the form below and we'll call you back"
            buttonText="Submit & Get Free Counselling"
            showCourseField
          />
        </div>
      </section>
    </>
  );
}
