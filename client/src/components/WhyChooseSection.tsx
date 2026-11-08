import React from 'react';
import { WHY_CHOOSE_PILLARS } from '../data/portalData';

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-aspire" className="py-20 bg-surface-container-low/70">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
            The Aspire Advantage
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mt-1">
            Why Choose Aspire College Taunsa?
          </h2>
          <p className="font-body-md text-base text-on-surface-variant mt-2">
            Committed to transforming raw potential into undeniable leadership through six institutional pillars.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
            >
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-headline-md text-3xl font-extrabold text-primary/30 group-hover:text-primary transition-colors">
                  {pillar.number}
                </span>
                <span className="material-symbols-outlined text-primary/60 text-[20px]">
                  verified_user
                </span>
              </div>

              <h3 className="font-title-md text-lg font-bold text-on-surface mb-2">
                {pillar.title}
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
