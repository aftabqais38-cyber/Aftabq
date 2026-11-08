import React from 'react';
import { CAMPUS_INFO } from '../data/portalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
              Collegiate Heritage • South Punjab
            </span>
            <h2 className="font-headline-lg text-2xl md:text-4xl text-on-surface font-bold mt-1">
              Dedicated to Educational Rigor in Taunsa Sharif
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full text-xs font-label-md text-on-surface">
            <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
            <span>Registered Center BISE DG Khan</span>
          </div>
        </div>

        {/* Content Grid: Pillars + Principal Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Vision */}
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <h3 className="font-title-md font-bold text-on-surface mb-2">Our Vision</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Fostering intellect, moral character, and innovative thinking capable of addressing regional and global challenges with resilience and scholastic clarity.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-secondary-container text-secondary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">flag</span>
              </div>
              <h3 className="font-title-md font-bold text-on-surface mb-2">Our Mission</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Providing accessible, world-class intermediate and tertiary education backed by high pedagogical standards directly to the aspiring youth of Southern Punjab.
              </p>
            </div>

            {/* Educational Philosophy */}
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">psychology</span>
              </div>
              <h3 className="font-title-md font-bold text-on-surface mb-2">Educational Philosophy</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Student-centric inquiry, practical hands-on experimentation, daily testing discipline, and systematic personality grooming.
              </p>
            </div>

            {/* Success Commitment */}
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[24px]">trending_up</span>
              </div>
              <h3 className="font-title-md font-bold text-on-surface mb-2">Success Commitment</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Structured test tracking, daily test series, immediate parent feedback loops, and extensive entry test mentoring.
              </p>
            </div>
          </div>

          {/* Right: Principal Message Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-xl bg-gradient-to-br from-inverse-surface via-[#132034] to-inverse-surface text-inverse-on-surface shadow-xl relative overflow-hidden border border-white/10">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                  alt={CAMPUS_INFO.principal.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-fixed"
                />
                <div>
                  <h4 className="font-title-md text-lg font-bold text-surface-bright">
                    {CAMPUS_INFO.principal.name}
                  </h4>
                  <p className="font-label-md text-xs text-primary-fixed">
                    {CAMPUS_INFO.principal.role}
                  </p>
                  <p className="font-label-xs text-xs text-surface-dim opacity-80">
                    {CAMPUS_INFO.principal.credentials}
                  </p>
                </div>
              </div>

              <blockquote className="font-body-md text-base text-surface-dim italic leading-relaxed border-l-2 border-tertiary-fixed pl-4 my-4">
                "{CAMPUS_INFO.principal.quote}"
              </blockquote>
            </div>

            <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-surface-dim">
              <span>Taunsa Sharif, Punjab</span>
              <span className="text-tertiary-fixed font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                {CAMPUS_INFO.principal.badge}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
