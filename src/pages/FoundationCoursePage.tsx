import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseFeatureCards from '../components/CourseFeatureCards';
import ContactForm from '../components/ContactForm';

export default function FoundationCoursePage() {
  return (
    <>
      <PageHero title="Foundation Course – 8th, 9th & 10th Class" backgroundImage="/images/course-hero.webp" />

      {/* Why Foundation */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Why Foundation Course?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
                Foundation Course – 8th, 9th & 10th Class
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Foundation Course for 8th, 9th, and 10th Class is designed to strengthen the core concepts in Science and Mathematics at an early stage. This course lays a solid groundwork for competitive exams like IIT JEE, ensuring students develop a deep understanding and aptitude in these subjects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Through interactive learning, regular assessments, and a focus on analytical thinking, the course aims to build a strong academic base, fostering confidence and a love for learning in young minds.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img src="/images/sectionimage1.jpg" alt="Foundation Course" className="rounded-2xl shadow-lg w-full" />
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

      {/* Course Content */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Course Details</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              This program builds up a concrete confidence about their success in IIT or any other meritorious exams of high standards. These students will definitely feel at ease in front of question paper as they have accustomed to similar type of papers in their regular practice.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              When the students start their approach towards IIT from 8th class onwards, it will be easy for adaptability to their respective subjects. By fostering a sense of self-awareness and building a solid conceptual foundation, students gain the confidence to excel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Build a Strong Foundation Early</h2>
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                Start your child's competitive exam preparation from 8th class for the best results.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <ContactForm heading="Enquire Now" buttonText="Submit" />
          </div>
        </div>
      </section>
    </>
  );
}
