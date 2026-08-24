import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Leadership from './components/Leadership';
import GovtRecognition from './components/GovtRecognition';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Services from './components/Services';
import HiringProcess from './components/HiringProcess';
import Positions from './components/Positions';
import Benefits from './components/Benefits';
import FAQs from './components/FAQs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [selectedRoleForContact, setSelectedRoleForContact] = useState('');

  const handleSelectPosition = (roleName) => {
    setSelectedRoleForContact(roleName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#C9A227] selection:text-white pb-14 md:pb-0">
      
      {/* 1. Slim Clean Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Authentic Human Hero Section */}
        <Hero onSelectRole={handleSelectPosition} />

        {/* 3. About Us Section */}
        <AboutUs />

        {/* 4. Leadership & Founders Testimonials */}
        <Leadership />

        {/* 5. Government Recognized MSME Banner */}
        <GovtRecognition />

        {/* 5. Why Choose Us (20 Points with Search) */}
        <WhyChooseUs />

        {/* 6. Industries We Serve (7 Core Sectors) */}
        <Industries />

        {/* 7. Services We Provide (01–13 Numbered List) */}
        <Services />

        {/* 8. Our Hiring Process (6-Step Stepper) */}
        <HiringProcess />

        {/* 9. Positions We Hire For (Job Board Filter & Search) */}
        <Positions onSelectPosition={handleSelectPosition} />

        {/* 10. Benefits for Companies (7 ROI Cards) */}
        <Benefits />

        {/* 11. Practical FAQs for Employers & Job Seekers */}
        <FAQs />

        {/* 12. Contact / Get In Touch Section with Map & Form */}
        <ContactSection prefilledRole={selectedRoleForContact} />
      </main>

      {/* 13. Clean Corporate Footer with Social Icons Row */}
      <Footer />

      {/* Floating WhatsApp Quick Chat Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileBottomBar />

    </div>
  );
}
