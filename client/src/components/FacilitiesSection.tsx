import React from 'react';
import { FACILITIES } from '../data/portalData';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-surface">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
              Campus Infrastructure
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mt-1">
              State-of-the-Art Facilities
            </h2>
          </div>
          <p className="font-body-md text-sm text-on-surface-variant max-w-md">
            Providing students in Taunsa with modern scholastic amenities matching national benchmarks.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md p-2 rounded-lg text-primary shadow">
                  <span className="material-symbols-outlined text-[22px]">{facility.icon}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-title-md text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-2 leading-relaxed">
                    {facility.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-secondary">
                  <span className="font-medium">{facility.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
