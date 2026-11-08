import React, { useState } from 'react';
import { CAMPUS_INFO } from '../data/portalData';

interface NavbarProps {
  onOpenPortalModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top utility ribbon */}
      <div className="w-full bg-inverse-surface text-inverse-on-surface py-2">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 flex flex-wrap items-center justify-between text-xs font-label-md">
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">call</span>
              <span>{CAMPUS_INFO.phoneNumbers[0]} • {CAMPUS_INFO.phoneNumbers[1]}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">mail</span>
              <span>{CAMPUS_INFO.email}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-surface-dim">
              <span className="material-symbols-outlined text-[15px]">location_on</span>
              <span>College Chowk, Taunsa Sharif, Punjab</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#admissions"
              className="hover:text-primary-fixed-dim transition-colors flex items-center gap-1 font-semibold"
            >
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">verified</span>
              <span>BISE DGK: #{CAMPUS_INFO.centerCode}</span>
            </a>
            <span className="text-secondary/50">|</span>
            <a
              href="#contact"
              className="hover:text-primary-fixed-dim transition-colors flex items-center gap-1 font-medium"
            >
              <span className="material-symbols-outlined text-[15px]">lock</span>
              <span>Portal Login</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Brand logo & campus identity */}
        <a href="#home" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-md">
            <span className="material-symbols-outlined text-[26px]">school</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="font-headline-sm font-bold text-on-surface tracking-tight">ASPIRE</span>
              <span className="font-headline-sm font-semibold text-primary">COLLEGE</span>
            </div>
            <span className="font-label-xs text-primary font-bold tracking-wider uppercase">
              Taunsa Sharif Campus
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-label-lg text-on-surface">
          <a href="#home" className="hover:text-primary transition-colors font-medium">Home</a>
          <a href="#about" className="hover:text-primary transition-colors font-medium">About</a>
          <a href="#programs" className="hover:text-primary transition-colors font-medium">Academic Programs</a>
          <a href="#facilities" className="hover:text-primary transition-colors font-medium">Facilities</a>
          <a href="#why-aspire" className="hover:text-primary transition-colors font-medium">Why Aspire</a>
          <a href="#admissions" className="hover:text-primary transition-colors font-medium">Admissions</a>
          <a href="#gallery" className="hover:text-primary transition-colors font-medium">Campus Gallery</a>
          <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact Us</a>
        </nav>

        {/* Action button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#admissions"
            className="inline-flex items-center gap-1.5 font-label-lg bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
            <span>Apply for Admission</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-[26px]">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-3 font-label-lg text-on-surface">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              About
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              Academic Programs
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              Facilities
            </a>
            <a
              href="#why-aspire"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              Why Aspire
            </a>
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              Admissions
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-surface-container/60 hover:text-primary"
            >
              Campus Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary"
            >
              Contact Us
            </a>
            <a
              href="#admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center font-label-lg bg-primary text-on-primary py-3 rounded-lg font-semibold shadow"
            >
              Apply for Admission
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
