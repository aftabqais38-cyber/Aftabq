import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/portalData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus Building' },
    { id: 'labs', label: 'Classrooms & Labs' },
    { id: 'students', label: 'Students & Scholars' },
    { id: 'events', label: 'Events & Sports' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-surface-container-low/60">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
              Campus Life & Events
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mt-1">
              Campus Photo & Event Gallery
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-container-lowest p-1.5 rounded-xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-label-md text-xs px-3.5 py-1.5 rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? 'bg-inverse-surface text-inverse-on-surface font-bold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-surface-container-lowest border border-slate-200 shadow-sm aspect-[4/3] flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="relative z-10 p-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-primary/90 text-on-primary px-2.5 py-0.5 rounded inline-block mb-2">
                  {item.categoryLabel}
                </span>
                <h3 className="font-title-md text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
