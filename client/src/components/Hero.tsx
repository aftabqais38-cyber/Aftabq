import React from 'react';
import { QUICK_STATS } from '../data/portalData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 md:pt-32">
      {/* Background Image with Scrim */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/95 via-on-background/85 to-on-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl flex flex-col items-start gap-4">
          {/* Live Academic Alert Tag */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-surface-bright border border-white/20">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-fixed opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-fixed" />
            </span>
            <span className="font-label-xs uppercase tracking-wider text-surface-bright font-semibold">
              Admissions Open 2024–2025 • Affiliated with BISE Dera Ghazi Khan
            </span>
          </div>

          {/* H1 Header */}
          <h1 className="font-headline-xl text-3xl md:text-5xl lg:text-6xl text-surface-bright font-bold tracking-tight leading-tight">
            Welcome to Aspire College{' '}
            <span className="text-tertiary-fixed underline decoration-primary-container decoration-4 underline-offset-8">
              Taunsa Campus
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-lg md:text-xl text-surface-dim max-w-2xl font-light leading-relaxed">
            Building Bright Futures Through Quality Education — Inspiring Leadership, Integrity, and Academic Distinction in Taunsa Sharif.
          </p>

          {/* Dual CTA Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center font-label-lg bg-primary hover:bg-primary-container text-on-primary px-6 py-3.5 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-[20px] mr-2">edit_calendar</span>
              <span>Apply for Admission</span>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center font-label-lg bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 backdrop-blur-md text-surface-bright border border-white/20 px-6 py-3.5 rounded-lg transition-all"
            >
              <span>Explore Programs</span>
              <span className="material-symbols-outlined text-[20px] ml-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Quick Stats Row */}
      <div className="relative z-10 w-full bg-surface-container-lowest/15 backdrop-blur-md border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-surface-bright">
            {QUICK_STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/60 text-surface-bright flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
                </div>
                <div>
                  <div className="font-headline-sm text-xl md:text-2xl font-bold text-surface-bright">
                    {stat.value}
                  </div>
                  <div className="font-label-md text-xs md:text-sm text-surface-dim">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
