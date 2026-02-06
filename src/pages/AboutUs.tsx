import { Link } from 'react-router-dom';
import { ArrowRight, Users, ClipboardCheck, Lightbulb, BookOpen } from 'lucide-react';
import PageHero from '../components/PageHero';

const features = [
  {
    icon: Users,
    title: 'Personalized Coaching',
    description: 'Tailored guidance and study plans designed to match each student\'s strengths, weaknesses, and learning pace.',
  },
  {
    icon: ClipboardCheck,
    title: 'Tests and Assignments',
    description: 'Regular assessments, mock tests, and practice papers to track progress and reinforce concepts.',
  },
  {
    icon: Lightbulb,
    title: 'Motivational Sessions',
    description: 'Inspiring talks and mentoring sessions to keep students motivated and focused on their goals.',
  },
  {
    icon: BookOpen,
    title: 'Study Material',
    description: 'Comprehensive, well-structured study resources covering the complete syllabus with practice problems.',
  },
];

export default function AboutUs() {
  return (
    <>
      <PageHero title="About Us" backgroundImage="/images/about-hero.jpg" />

      {/* Why Abhida */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">Why Abhida?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">About Us</h2>
              <div className="space-y-4 text-dark/70 leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">SRI ABHIDA</span> - When one takes the path less travelled and succeeds, he knows how tough his journey has been. And he will be all ready to support those who want to follow that path. SRI ABHIDA Institute is an outcome of that desire to support those who dream and dare.
                </p>
                <p>
                  From a humble forum for IIT-JEE and NEET/AIIMS aspirants to get an encouragement to pursue their dream, SRI ABHIDA had emerged into a strong launch pad in a very short span of time. The rich experience, strong commitment, and the innate passion to enable students to succeed has made SRI ABHIDA the first choice for students aspiring to be the best.
                </p>
                <p>
                  The expert faculty ensures that the students not only excel in examinations but also understand the concept thoroughly so that they apply the same in life successfully.
                </p>
              </div>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-colors font-semibold mt-6"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img src="/images/sectionimage1.jpg" alt="Sri Abhida Campus" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-6">Our Approach</h2>
            <p className="text-dark/70 leading-relaxed text-lg">
              Towards this their entire thought process is redefined and the approach is re-established. The student-friendly faculty hand-holds each one of them on this journey to excellence. They are encouraged to settle for nothing but the best at every step of this academic journey. Thus instilling positivity and confidence in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark mb-4">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-light rounded-xl p-8 shadow-md border-b-4 border-primary hover:bg-primary hover:text-white transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 mx-auto group-hover:bg-light/20">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-3">{feature.title}</h3>
                <p className="text-dark/70 group-hover:text-white/90 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
