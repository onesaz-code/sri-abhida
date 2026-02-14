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
}: ContactFormProps) {  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const courseTypeOptions = [
    { value: "EAMCET_MPC", label: "EAMCET MPC (160 Bits)" },
    { value: "JEE MAINS", label: "JEE MAINS 2020 (75bits numerical)" },
    { value: "JEEMAIN_2021", label: "JEE MAIN 2021 (90bits numerical)" },
    { value: "BIOP", label: "JEE MAIN (75bits no negative)" },
    { value: "JEEMAIN_2025", label: "JEE MAIN 2025 (75bits Nearest integer)" },
    {
      value: "JEEMAIN_2022",
      label: "JEE MAIN 2022-24 (90bits Nearest integer)",
    },
    { value: "JEE ADVANCED", label: "JEE ADVANCED" },
    { value: "NEET", label: "NEET OLD MODEL (180bits)" },
    { value: "NEET_2021", label: "NEET (200 bits new model) 2025" },
    { value: "CUSTOM", label: "CUSTOM" },
    { value: "BITSAT", label: "BITSAT" },
    { value: "BOARD", label: "BOARD" },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const hasNonDigits = /\D/.test(inputValue);
    
    if (hasNonDigits) {
      setPhoneError("Only numbers are allowed");
      setTimeout(() => setPhoneError(""), 2000);
    } else {
      setPhoneError("");
    }
    
    const value = inputValue.replace(/\D/g, ''); // Remove non-digits
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 3000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  const payload = {
    name: formData.name,
    phone: formData.phone,
    message: formData.message,
    ...(showCourseField
      ? { course: formData.course }
      : { email: formData.email }),
  };

    try {
      const res = await fetch("http://localhost:7077/public/Mail-Notification", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });


      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setSuccessMsg("Thank you for choosing us. We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });
        setSubmitted(true);
        setTimeout(() => {
          setShowPopup(false);
          setSuccessMsg("");
        }, 10000);

      } else {
        alert("Mail not sent");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setIsLoading(false);
    }
  };



  const isTransparent = variant === 'transparent';
  const containerClass = isTransparent
    ? 'bg-transparent border border-white/30 rounded-2xl p-8 md:p-10'
    : 'bg-light rounded-2xl shadow-xl p-8 md:p-10';
  const headingClass = isTransparent
    ? 'text-2xl md:text-3xl font-bold font-heading text-white mb-2'
    : 'text-2xl md:text-3xl font-bold font-heading text-dark mb-2';
  const subheadingClass = isTransparent ? 'text-white/70 mb-6' : 'text-dark/70 mb-6';
  const inputClass = isTransparent
    ? 'w-full px-4 py-3 rounded-lg border border-light/40 bg-light/10 text-white placeholder-white/70 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all'
    : 'w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all';
  const textareaClass = isTransparent
    ? 'w-full px-4 py-3 rounded-lg border border-light/40 bg-light/10 text-white placeholder-white/70 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none'
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
          <p className="text-dark/70">We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className={inputClass}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {!showCourseField && (
            <input
              type="email"
              placeholder="Your Email"
              required
              className={inputClass}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          )}
          <div className="w-full">
            <input
              type="tel"
              placeholder="Phone"
              required
              className={inputClass}
              value={formData.phone}
              onChange={handlePhoneChange}
              maxLength={10}
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1 ml-1">{phoneError}</p>
            )}
          </div>
          {showCourseField && (
            <select
              className={inputClass}
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              required
            >
              <option value="">Select Course</option>
              {courseTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
          <textarea
            placeholder="Your Message"
            rows={4}
            className={textareaClass}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className={buttonClass}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {buttonText}
              </>
            )}
          </button>
        </form>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg text-center">
            {/* <h2 className="text-lg font-bold text-green-600 mb-2">Success</h2> */}
            <p className="text-green-700 mb-4 font-semibold">{successMsg}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
