import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademicPrograms } from './components/AcademicPrograms';
import { FacilitiesSection } from './components/FacilitiesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProgramModal } from './components/ProgramModal';
import { Program } from './types';

export function App() {
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);
  const [selectedProgramForAdmission, setSelectedProgramForAdmission] = useState<string>('');

  const handleApplyForProgram = (programName: string) => {
    setSelectedProgramForAdmission(programName);
    const admissionsElement = document.getElementById('admissions');
    if (admissionsElement) {
      admissionsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body text-body-md text-on-surface antialiased selection:bg-primary/20 selection:text-primary">
      {/* Institutional Top Navbar */}
      <Navbar />

      {/* Main Body Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us & Leadership Rigor */}
        <AboutSection />

        {/* 3. Academic Programs & Scholarships */}
        <AcademicPrograms
          onSelectProgram={(program) => setActiveModalProgram(program)}
          onApplyForProgram={handleApplyForProgram}
        />

        {/* 4. Campus Infrastructure & Facilities */}
        <FacilitiesSection />

        {/* 5. Why Choose Aspire Advantage */}
        <WhyChooseSection />

        {/* 6. Admissions & Interactive Fast-Track Inquiry */}
        <AdmissionsSection selectedProgramName={selectedProgramForAdmission} />

        {/* 7. Photo & Event Gallery */}
        <GallerySection />

        {/* 8. Campus Contacts & Location */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Modal: Program Syllabus Details */}
      <ProgramModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
        onApply={handleApplyForProgram}
      />
    </div>
  );
}

export default App;
