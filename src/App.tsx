import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Results from './pages/Results';
import Gallery from './pages/Gallery';
import Courses from './pages/Courses';
import IITJEEPage from './pages/IITJEEPage';
import NEETPage from './pages/NEETPage';
import FoundationCoursePage from './pages/FoundationCoursePage';
import LongTermCoachingPage from './pages/LongTermCoachingPage';
import CrashCoursePage from './pages/CrashCoursePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/iit-jee-main-advanced" element={<IITJEEPage />} />
          <Route path="/neet" element={<NEETPage />} />
          <Route path="/foundation-course" element={<FoundationCoursePage />} />
          <Route path="/iit-jee-long-term-coaching" element={<LongTermCoachingPage />} />
          <Route path="/crash-course" element={<CrashCoursePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
