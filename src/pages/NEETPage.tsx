import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseFeatureCards from '../components/CourseFeatureCards';
import ContactForm from '../components/ContactForm';

export default function NEETPage() {
  return (
    <>
      <PageHero title="NEET" backgroundImage="/images/course-hero.webp" />

      {/* Director's Letter */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-light rounded-2xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
              <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">Director's Letter</p>
              <blockquote className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  "When a student of mine secured All India Rank 1 with a perfect 720/720, people asked me, 'What study material did you use?' My answer was simple: It wasn't just the book. It was the behavior."
                </p>
                <p>
                  "As a Director who is still a teacher at heart, I have spent the last 6 years refining a program that goes beyond the syllabus. Securing a medical seat in India is not a sprint; it is a marathon of mental endurance."
                </p>
                <p className="font-semibold text-dark">
                  "If you are looking for a factory, look elsewhere. If you are looking for a mentor who will treat your child's ambition as their own, welcome to Sri Abhida, Kukatpally."
                </p>
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-bold font-heading text-dark">Raja Narender Reddy (RNR sir)</p>
                <p className="text-primary text-sm">Co-Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">Our NEET Coaching Features</h2>
          </div>
          <CourseFeatureCards />
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/sectionimage3.webp" alt="NEET Coaching" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Course Details</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This program builds up a concrete confidence about their success in NEET or any other meritorious exams of high standards. These students will definitely feel at ease in front of question paper as they have accustomed to similar type of papers in their regular practice.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                By fostering a sense of self-awareness and confidence, our NEET program ensures that students are thoroughly prepared for one of India's most competitive medical entrance examinations.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Start Your NEET Journey Today</h2>
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                Join our comprehensive NEET coaching program with expert guidance from experienced faculty.
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
