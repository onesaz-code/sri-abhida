import { Menu, X, ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const courseLinks = [
    { to: '/iit-jee-main-advanced', label: 'IIT JEE (Main & Advanced)' },
    { to: '/neet', label: 'NEET' },
    { to: '/foundation-course', label: 'Foundation Course – 8th, 9th & 10th Class' },
    { to: '/iit-jee-long-term-coaching', label: 'IIT/JEE Long Term Coaching' },
    { to: '/crash-course', label: 'Crash Course' },
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-secondary text-white text-sm hidden md:block">
        <div className="max-w-container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Kukatpally, Hyderabad
            </span>
            <a href="mailto:info@sriabhida.co.in" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@sriabhida.co.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <a href="tel:+919553300062" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              9553300062 / 63
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-light shadow-md sticky top-0 z-50 overflow-visible">
        <div className="max-w-container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.webp" alt="Sri Abhida" className="h-14 md:h-16 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/about-us" className={navLinkClass}>
                About Us
              </NavLink>
              <NavLink to="/results" className={navLinkClass}>
                Results
              </NavLink>
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 font-medium text-dark hover:text-primary transition-colors">
                  Courses
                  <ChevronDown className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-light shadow-xl rounded-lg py-2 min-w-[280px] border border-border">
                    {courseLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="block px-4 py-2.5 text-dark hover:bg-light/80 hover:text-primary transition-colors text-sm"
                        onClick={() => setCoursesDropdownOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
              <NavLink to="/contact-us" className={navLinkClass}>
                Contact Us
              </NavLink>
              <a
                href="https://sriabhidakp.onesaz.com/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-secondary transition-colors font-medium text-sm"
              >
                Student Login
              </a>
            </nav>

            <button
              className="lg:hidden text-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-border pt-4">
              <NavLink to="/" className={navLinkClass} end onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/about-us" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink to="/results" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                Results
              </NavLink>
              <div>
                <button
                  className="flex items-center gap-1 font-medium text-dark w-full"
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                >
                  Courses
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCoursesOpen && (
                  <div className="flex flex-col gap-2 mt-2 pl-4">
                    {courseLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="text-dark/70 hover:text-primary transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <NavLink to="/gallery" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </NavLink>
              <NavLink to="/contact-us" className={navLinkClass} onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </NavLink>
              <a
                href="https://sriabhidakp.onesaz.com/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-secondary transition-colors font-medium text-center text-sm"
              >
                Student Login
              </a>

              <ThemeSwitcher variant="menu" />
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
