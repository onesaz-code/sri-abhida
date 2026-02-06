import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import CourseFeatureCards from '../components/CourseFeatureCards';
import ContactForm from '../components/ContactForm';

const courseStructure = [
  {
    title: 'First Year (During Intermediate 1st Year)',
    content:
      'During the first academic session, the JEE (Main) which is common to Board syllabus of 1st year, will be taught to the students. This syllabus is scheduled to be finished by mid of January. During month of March the students take their board examinations.',
  },
  {
    title: 'Second Year (During Class 12th)',
    content:
      'During the second academic session, the JEE (Main) which is common to Board syllabus of 2nd year, will be taught to the students. This syllabus is scheduled to be finished by mid of August. The whole syllabus will be revised and students are prepared with rigorous practice for JEE Main and Advanced.',
  },
];

export default function IITJEEPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero title="IIT JEE (Main & Advanced)" backgroundImage="/images/course-hero.webp" />

      {/* About the Exam */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">About the Exam</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">IIT JEE (Main & Advanced)</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Indian Institutes of Technology Joint Entrance Examination (IIT JEE) is a two-tier exam, comprising JEE Main and JEE Advanced, aimed at selecting candidates for India's prestigious IITs. JEE Main serves as a preliminary test, while JEE Advanced is for final selection. This rigorous exam tests students' understanding of science and mathematics, and is a gateway to top engineering colleges in India.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img src="/images/sectionimage2.jpg" alt="IIT JEE Coaching" className="rounded-2xl shadow-lg w-full" />
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

      {/* Course Structure */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-10 text-center">Course Structure</h2>
            <div className="space-y-4">
              {courseStructure.map((item, index) => (
                <div key={index} className="border border-border rounded-xl overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between p-5 text-left font-semibold font-heading transition-colors ${
                      openIndex === index ? 'bg-primary text-white' : 'bg-light text-dark hover:bg-gray-200'
                    }`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    {item.title}
                    <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === index && (
                    <div className="p-5 bg-white">
                      <p className="text-gray-600 leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Start Your IIT JEE Journey?</h2>
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                Join Sri Abhida's IIT JEE coaching program and get expert guidance from experienced faculty.
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
