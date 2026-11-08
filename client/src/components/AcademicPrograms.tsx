import React from 'react';
import { PROGRAMS, SCHOLARSHIPS } from '../data/portalData';
import { Program } from '../types';

interface AcademicProgramsProps {
  onSelectProgram: (program: Program) => void;
  onApplyForProgram: (programName: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({
  onSelectProgram,
  onApplyForProgram,
}) => {
  return (
    <section id="programs" className="py-20 bg-surface-container-low/60">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
            Higher Secondary School Certificate
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mt-1">
            Academic Programs Offered
          </h2>
          <p className="font-body-md text-base text-on-surface-variant mt-3">
            Two-year full-time Intermediate degrees affiliated with the Board of Intermediate & Secondary Education (BISE) D.G. Khan.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-xs uppercase tracking-wider text-primary font-bold bg-primary/10 px-2.5 py-1 rounded">
                    {prog.badge}
                  </span>
                  <span className="font-label-xs text-secondary font-medium">
                    {prog.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline-sm text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  {prog.name}
                </h3>

                {/* Description */}
                <p className="font-body-sm text-sm text-on-surface-variant mt-2.5 leading-relaxed line-clamp-3">
                  {prog.description}
                </p>

                {/* Subjects Pill Row */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-on-surface block mb-1.5">
                    Subjects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.subjects.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-surface-container px-2 py-0.5 rounded text-on-surface font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mt-3 text-xs">
                  <span className="font-semibold text-on-surface">Eligibility: </span>
                  <span className="text-primary font-medium">{prog.eligibility}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="font-label-md text-xs text-primary hover:text-primary-container font-semibold flex items-center gap-1 py-1"
                >
                  <span>Program Details & Syllabus</span>
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                </button>
                <button
                  onClick={() => onApplyForProgram(prog.name)}
                  className="font-label-md text-xs bg-primary hover:bg-primary-container text-on-primary px-3 py-1.5 rounded-md font-semibold transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}

          {/* 6. Special Aspire Scholarships Card */}
          <div className="bg-gradient-to-br from-inverse-surface via-[#14233c] to-inverse-surface text-inverse-on-surface rounded-2xl p-6 shadow-xl border border-tertiary-fixed/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-xs uppercase tracking-wider text-tertiary-fixed font-bold bg-tertiary-container/40 px-2.5 py-1 rounded border border-tertiary-fixed/30">
                  {SCHOLARSHIPS.badge}
                </span>
                <span className="material-symbols-outlined text-tertiary-fixed text-[22px]">
                  workspace_premium
                </span>
              </div>

              <h3 className="font-headline-sm text-xl font-bold text-surface-bright">
                {SCHOLARSHIPS.title}
              </h3>
              <p className="font-body-md text-sm text-tertiary-fixed font-semibold mt-1">
                {SCHOLARSHIPS.headline}
              </p>
              <p className="font-body-sm text-xs text-surface-dim mt-2 leading-relaxed">
                {SCHOLARSHIPS.description}
              </p>

              <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {SCHOLARSHIPS.categories.map((cat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[16px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <span className="font-semibold text-surface-bright">{cat.title}: </span>
                      <span className="text-surface-dim">{cat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#admissions"
                className="w-full text-center block font-label-md text-xs bg-tertiary-container hover:bg-tertiary text-on-tertiary py-2.5 rounded-lg font-semibold transition-all shadow"
              >
                Inquire About Scholarships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
