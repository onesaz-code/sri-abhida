import { Users, GraduationCap, ClipboardCheck } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Personalized Learning Plans',
    description:
      'Tailored guidance and study plans designed to match each student\'s strengths, weaknesses, and learning pace.',
  },
  {
    icon: GraduationCap,
    title: 'Expert Faculty',
    description:
      'Learn from experienced teachers from IITs, NITs, and top universities with decades of coaching expertise.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Testing & Feedback',
    description:
      'Continuous assessments, mock tests, and detailed performance analysis to track progress and improve.',
  },
];

export default function CourseFeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div
          key={feature.title}
        className="bg-light rounded-xl p-8 shadow-md border-b-4 border-primary hover:bg-primary hover:text-white transition-all duration-300 group"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-light/20">
            <feature.icon className="w-7 h-7 text-primary group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
          <p className="text-dark/70 group-hover:text-white/90 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
