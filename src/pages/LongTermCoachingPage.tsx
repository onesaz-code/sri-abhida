import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseFeatureCards from '../components/CourseFeatureCards';
import ContactForm from '../components/ContactForm';

export default function LongTermCoachingPage() {
  return (
    <>
      <PageHero title="IIT/JEE Long Term Coaching" backgroundImage="/images/course-hero.webp" />

      {/* Overview */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Program Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">
                IIT/JEE Long Term Coaching
              </h2>
              <p className="text-dark/70 leading-relaxed mb-6">
                IIT JEE Long Term Coaching is a comprehensive program designed for students aspiring to crack the IIT JEE exam. Spanning over a year or more, it offers in-depth coverage of the syllabus, focusing on building strong fundamentals in science and mathematics.
              </p>
              <p className="text-dark/70 leading-relaxed mb-6">
                This program includes regular tests, doubt-clearing sessions, and personalized guidance, making it ideal for students who wish to thoroughly prepare and excel in one of India's most challenging engineering entrance exams.
              </p>

              {/* Key Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-light/80 rounded-lg p-4 text-center">
                  <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-dark">1 Year Course</p>
                  <p className="text-xs text-dark/60">For Repeaters</p>
                </div>
                <div className="bg-light/80 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-dark">July - February</p>
                  <p className="text-xs text-dark/60">10 Months Duration</p>
                </div>
                <div className="bg-light/80 rounded-lg p-4 text-center">
                  <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-dark">Complete Syllabus</p>
                  <p className="text-xs text-dark/60">10+1 & 10+2</p>
                </div>
              </div>

              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img src="/images/sectionimage2.jpg" alt="Long Term Coaching" className="rounded-2xl shadow-lg w-full" />
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

      {/* Course Details */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Course Details</h2>
            <p className="text-dark/70 leading-relaxed text-lg mb-6">
              This 10-month course covers complete First (10+1) and Second (10+2) year syllabus in Fastrack manner with proper guidelines to crack JEE MAIN and JEE ADVANCE Exams.
            </p>
            <p className="text-dark/70 leading-relaxed text-lg">
              1 year course for JEE Main & Advanced long term classes for repeaters (who completed Intermediate or 10+2). Course Duration: Last week of July to Last week of February.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready for Intensive JEE Preparation?</h2>
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                Join our long-term coaching program for comprehensive JEE Main and Advanced preparation.
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
