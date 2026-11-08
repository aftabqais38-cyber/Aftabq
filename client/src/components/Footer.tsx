import React, { useState } from 'react';
import { CAMPUS_INFO, PROGRAMS } from '../data/portalData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-surface-container-high border-t border-slate-200 pt-16 pb-12 text-on-surface">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <div>
                <span className="font-headline-sm text-lg font-bold text-on-surface block leading-tight">
                  Aspire College
                </span>
                <span className="font-label-md text-xs text-primary font-bold">
                  Taunsa Campus
                </span>
              </div>
            </div>

            <p className="font-body-sm text-xs text-on-surface-variant max-w-sm leading-relaxed">
              Affiliated with the Board of Intermediate & Secondary Education (BISE) Dera Ghazi Khan. Empowering rural and suburban talent across South Punjab with collegiate excellence and character values.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="material-symbols-outlined text-[18px] text-tertiary">verified</span>
              <span className="font-semibold text-on-surface">
                Official BISE DG Khan Center Code: #{CAMPUS_INFO.centerCode}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-title-md text-sm font-bold text-on-surface">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
              <li><a href="#about" className="hover:text-primary transition-colors">About Campus</a></li>
              <li><a href="#admissions" className="hover:text-primary transition-colors">Admission Criteria</a></li>
              <li><a href="#facilities" className="hover:text-primary transition-colors">Science & IT Labs</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Scholarship Policy</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Campus Life & Events</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Campus</a></li>
            </ul>
          </div>

          {/* Intermediate Programs */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-title-md text-sm font-bold text-on-surface">Intermediate Programs</h4>
            <ul className="flex flex-col gap-2 text-xs text-on-surface-variant">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <a href="#programs" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[14px] text-primary">arrow_right_alt</span>
                    <span>{p.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-title-md text-sm font-bold text-on-surface">Campus Contacts</h4>
            <div className="flex flex-col gap-2 text-xs text-on-surface-variant">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">location_on</span>
                <span>{CAMPUS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0">call</span>
                <span>{CAMPUS_INFO.phoneNumbers[0]} / {CAMPUS_INFO.phoneNumbers[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary shrink-0">mail</span>
                <span>{CAMPUS_INFO.email}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-bold text-on-surface block mb-1.5">
                Admissions Newsletter
              </span>
              {subscribed ? (
                <span className="text-xs text-emerald-700 font-semibold block">
                  ✓ Thank you for subscribing!
                </span>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter student or guardian email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-surface-container-lowest text-on-surface text-xs px-3 py-2 rounded-lg border border-slate-300 outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-container text-on-primary text-xs font-bold px-3.5 py-2 rounded-lg transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-300/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>© {new Date().getFullYear()} Aspire College Taunsa Campus. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#home" className="hover:text-primary transition-colors">Terms of Admission</a>
            <span>•</span>
            <a href="#contact" className="hover:text-primary transition-colors">Campus Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
