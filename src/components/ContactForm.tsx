import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  showCourseField?: boolean;
  variant?: 'default' | 'transparent';
}

export default function ContactForm({
  heading,
  subheading,
  buttonText = 'Send',
  showCourseField = false,
  variant = 'default',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const isTransparent = variant === 'transparent';
  const containerClass = isTransparent
    ? 'bg-transparent border border-white/30 rounded-2xl p-8 md:p-10'
    : 'bg-white rounded-2xl shadow-xl p-8 md:p-10';
  const headingClass = isTransparent
    ? 'text-2xl md:text-3xl font-bold font-heading text-white mb-2'
    : 'text-2xl md:text-3xl font-bold font-heading text-dark mb-2';
  const subheadingClass = isTransparent ? 'text-white/70 mb-6' : 'text-gray-500 mb-6';
  const inputClass = isTransparent
    ? 'w-full px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all'
    : 'w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all';
  const textareaClass = isTransparent
    ? 'w-full px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none'
    : 'w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none';
  const buttonClass = isTransparent
    ? 'w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20'
    : 'w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center justify-center gap-2';

  return (
    <div className={containerClass}>
      {heading && <h3 className={headingClass}>{heading}</h3>}
      {subheading && <p className={subheadingClass}>{subheading}</p>}

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-dark">Thank you!</p>
          <p className="text-gray-500">We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Your Name" required className={inputClass} />
          {!showCourseField && (
            <input type="email" placeholder="Your Email" required className={inputClass} />
          )}
          <input type="tel" placeholder="Phone" required className={inputClass} />
          {showCourseField && (
            <input type="text" placeholder="Course Interested" className={inputClass} />
          )}
          <textarea
            placeholder="Your Message"
            rows={4}
            className={textareaClass}
          ></textarea>
          <button
            type="submit"
            className={buttonClass}
          >
            <Send className="w-4 h-4" />
            {buttonText}
          </button>
        </form>
      )}
    </div>
  );
}
