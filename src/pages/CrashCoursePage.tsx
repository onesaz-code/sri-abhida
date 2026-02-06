import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseFeatureCards from '../components/CourseFeatureCards';
import ContactForm from '../components/ContactForm';

const distinctiveFeatures = [
  'Free Study Material with detailed theory and questions with Solutions',
  'Online Test Series with video solutions',
  'Live interactive classes and Doubt discussions',
  'Weekend JEE MAIN/ JEE ADVANCED /NEET Examinations with Instant Score, Rank & Performance Analysis in Online mode',
  'Recorded video lectures',
  'Advance level problems to satisfy the student who wants to solve problems of high difficulty level with complete solutions',
];

export default function CrashCoursePage() {
  return (
    <>
      <PageHero title="Crash Course" backgroundImage="/images/course-hero.webp" />

      {/* Overview */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Program Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Crash Course</h2>
              <p className="text-dark/70 leading-relaxed mb-6">
                IIT JEE Crash Course is a comprehensive program designed for students aspiring to crack the IIT JEE exam. It offers in-depth coverage of the syllabus, focusing on building strong fundamentals in science and mathematics.
              </p>
              <p className="text-dark/70 leading-relaxed mb-6">
                This program includes regular tests, doubt-clearing sessions, and personalized guidance, making it ideal for students who wish to thoroughly prepare and excel in one of India's most challenging engineering entrance exams.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img src="/images/sectionimage3.webp" alt="Crash Course" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Our Coaching Features</h2>
          </div>
          <CourseFeatureCards />
        </div>
      </section>

      {/* Distinctive Features */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-10 text-center">
              Distinctive Features
            </h2>
            <div className="space-y-4">
              {distinctiveFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-light/80 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-dark/80">{feature}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-dark/60 mt-6 text-center italic">
              Note: Study Materials are available in the English medium only.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Submit Your Details</h2>
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                Interested in our crash course? Fill in the form and we'll get back to you with all the details.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <ContactForm heading="Submit Your Details" buttonText="Submit" showCourseField />
          </div>
        </div>
      </section>
    </>
  );
}
