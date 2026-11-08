import React from 'react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose, onApply }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1.5 rounded-full hover:bg-surface-container transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Badge & Title */}
        <span className="font-label-xs uppercase tracking-wide bg-primary/10 text-primary px-2.5 py-1 rounded font-bold">
          BISE D.G. Khan Syllabus • {program.badge}
        </span>
        <h3 className="font-headline-md text-2xl font-bold text-on-surface mt-2">
          {program.name}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
          {program.description}
        </p>

        {/* Core Subjects & Eligibility */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-surface-container-low rounded-lg">
            <span className="font-bold text-on-surface block mb-1">Subjects Track:</span>
            <div className="flex flex-wrap gap-1">
              {program.subjects.map((sub, i) => (
                <span key={i} className="bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface font-medium border border-slate-200">
                  {sub}
                </span>
              ))}
            </div>
          </div>
          <div className="p-3 bg-surface-container-low rounded-lg">
            <span className="font-bold text-on-surface block mb-1">Eligibility:</span>
            <span className="text-primary font-semibold">{program.eligibility}</span>
          </div>
        </div>

        {/* Evaluation Scheme */}
        {program.evaluationScheme && (
          <div className="mt-4 p-4 bg-surface-container rounded-lg">
            <h4 className="font-label-md text-sm text-on-surface font-bold mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">fact_check</span>
              Evaluation & Examination Scheme:
            </h4>
            <ul className="font-body-sm text-xs text-on-surface-variant space-y-1.5">
              {program.evaluationScheme.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-primary font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Career Paths */}
        <div className="mt-3 text-xs text-secondary">
          <span className="font-bold text-on-surface">Career Gateways: </span>
          <span>{program.careerPath}</span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
          <button
            onClick={onClose}
            className="font-label-md text-sm px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-dim transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(program.name);
            }}
            className="font-label-md text-sm px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors shadow flex items-center gap-1.5"
          >
            <span>Apply Now</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
