import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const courses = [
  {
    title: 'IIT JEE (Main & Advanced)',
    description: 'Master IIT JEE with our expert-led coaching program. Concept-driven learning, advanced problem-solving, and smart exam strategies.',
    to: '/iit-jee-main-advanced',
    image: '/images/lecture.png',
  },
  {
    title: 'NEET',
    description: 'Comprehensive NEET coaching with expert biology, chemistry, and physics faculty for medical entrance success.',
    to: '/neet',
    image: '/images/microscope.png',
  },
  {
    title: 'Foundation Course - 8th, 9th & 10th Class',
    description: 'Build a strong foundation early. Our course lays the groundwork for competitive exam success with fundamental concepts.',
    to: '/foundation-course',
    image: '/images/experiment.png',
  },
  {
    title: 'IIT/JEE Long Term Coaching',
    description: 'Deep dive into concepts with personalized mentoring and continuous performance tracking for 10+2 repeaters.',
    to: '/iit-jee-long-term-coaching',
    image: '/images/calculating.png',
  },
  {
    title: 'Crash Course',
    description: 'Intensive crash course for last-minute preparation with focused revision, mock tests, and exam strategies.',
    to: '/crash-course',
    image: '/images/calculating.png',
  },
];

export default function Courses() {
  return (
    <>
      <PageHero title="Courses" backgroundImage="/images/course-hero.webp" />

      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Our Courses</h2>
            <p className="text-dark/70 max-w-2xl mx-auto text-lg">
              Choose from our comprehensive range of courses designed for competitive exam success.
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
    </>
  );
}
