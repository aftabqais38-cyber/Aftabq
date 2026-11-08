import React, { useState, useEffect } from 'react';
import { ADMISSION_SCHEDULE, REQUIRED_DOCUMENTS, PROGRAMS } from '../data/portalData';
import { submitAdmissionInquiry } from '../services/api';
import { AdmissionInquiry } from '../types';

interface AdmissionsSectionProps {
  selectedProgramName?: string;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ selectedProgramName }) => {
  const [formData, setFormData] = useState<AdmissionInquiry>({
    studentName: '',
    fatherName: '',
    phone: '',
    marks: '',
    totalMarks: '1100',
    program: selectedProgramName || '',
    message: '',
    consent: true,
  });

  useEffect(() => {
    if (selectedProgramName) {
      setFormData((prev) => ({ ...prev, program: selectedProgramName }));
    }
  }, [selectedProgramName]);

  const [loading, setLoading] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.studentName.trim() || !formData.fatherName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Father Name, Phone).');
      return;
    }

    if (!formData.program) {
      setErrorMessage('Please select a preferred academic program.');
      return;
    }

    setLoading(true);

    try {
      const response = await submitAdmissionInquiry(formData);
      if (response.success) {
        setSubmittedCode(response.referenceCode);
      } else {
        setErrorMessage(response.message || 'Submission failed. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage('Network error occurred. Please contact the campus helpline directly.');
    } finally {
      setLoading(false);
    }
  };

  const copyRefCode = () => {
    if (submittedCode) {
      navigator.clipboard.writeText(submittedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setFormData({
      studentName: '',
      fatherName: '',
      phone: '',
      marks: '',
      totalMarks: '1100',
      program: '',
      message: '',
      consent: true,
    });
  };

  return (
    <section id="admissions" className="py-20 bg-surface">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Admission Guidelines & Criteria */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
                Fall 2024 • Open Enrollment
              </span>
              <h2 className="font-headline-lg text-2xl md:text-4xl font-bold text-on-surface mt-1">
                Admission Guidelines & Criteria
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant mt-2 leading-relaxed">
                Admissions are granted strictly on merit according to the policies framed by the Punjab Higher Education Department & BISE D.G. Khan.
              </p>
            </div>

            {/* Schedule Timeline */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-slate-200/90 shadow-sm">
              <h3 className="font-title-md text-base font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary">calendar_today</span>
                Admission Schedule 2024–25
              </h3>
              <div className="space-y-3">
                {ADMISSION_SCHEDULE.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-on-surface">{item.phase}</span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded font-bold ${
                        item.isHighlight
                          ? 'bg-primary/10 text-primary'
                          : 'bg-surface-container text-secondary'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-slate-200/90 shadow-sm">
              <h3 className="font-title-md text-base font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary">description</span>
                Documents Required with Application
              </h3>
              <ul className="space-y-2 text-xs text-on-surface-variant">
                {REQUIRED_DOCUMENTS.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-slate-200/90 shadow-lg">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="font-label-xs uppercase tracking-wider text-primary font-bold">
                  Fast-Track Desk 2024
                </span>
                <h3 className="font-headline-md text-2xl font-bold text-on-surface mt-1">
                  Submit Online Admission Inquiry
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                  Fill in your credentials below and our Taunsa academic counselors will get in touch with you within 24 hours.
                </p>
              </div>

              {submittedCode ? (
                /* Success Confirmation State */
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <h4 className="font-headline-sm text-xl font-bold text-on-surface">
                    Inquiry Successfully Registered!
                  </h4>
                  <p className="font-body-sm text-sm text-on-surface-variant max-w-md mt-2">
                    Thank you, <strong className="text-on-surface">{formData.studentName}</strong>. Your inquiry for{' '}
                    <strong className="text-primary">{formData.program}</strong> has been logged in the campus admissions system.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-surface-container border border-slate-200 w-full max-w-sm flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[11px] font-bold text-secondary uppercase block">
                        Tracking Reference Code
                      </span>
                      <span className="font-mono text-lg font-bold text-primary tracking-wider">
                        {submittedCode}
                      </span>
                    </div>
                    <button
                      onClick={copyRefCode}
                      className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-slate-100 text-xs font-semibold border border-slate-300 transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copied ? 'done' : 'content_copy'}
                      </span>
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <p className="text-xs text-secondary mt-4 max-w-md">
                    Please keep this reference code handy when visiting the Taunsa Campus Admissions Office on Kot Adu Road.
                  </p>

                  <button
                    onClick={handleReset}
                    className="mt-6 font-label-md text-xs text-primary hover:underline font-semibold"
                  >
                    ← Submit another application
                  </button>
                </div>
              ) : (
                /* Interactive Form State */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">error</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Student Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Muhammad Ahmad"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Father / Guardian Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ghulam Qasim"
                        value={formData.fatherName}
                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                        className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Mobile / WhatsApp Number <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0300-1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Matric Marks / Total Marks
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="e.g. 980"
                          value={formData.marks}
                          onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                          className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface"
                        />
                        <span className="text-secondary text-sm">/</span>
                        <input
                          type="text"
                          value={formData.totalMarks}
                          onChange={(e) => setFormData({ ...formData, totalMarks: e.target.value })}
                          className="w-24 h-11 px-2 text-sm text-center rounded-lg border border-slate-300 bg-white text-on-surface"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Preferred Intermediate Program <span className="text-primary">*</span>
                    </label>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full h-11 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface cursor-pointer"
                    >
                      <option value="">Select an intermediate program...</option>
                      {PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.name}>
                          {prog.name} ({prog.badge})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface mb-1">
                      Message / Additional Inquiry (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about hostel facility, college van transport, or fee scholarship concessions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="consentCheck"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 text-primary rounded border-slate-300"
                    />
                    <label htmlFor="consentCheck" className="text-xs text-on-surface-variant leading-tight">
                      I authorize Aspire College Taunsa to contact me regarding admissions guidance, merit list schedules, and scholarship verifications.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !formData.consent}
                    className="w-full h-12 bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-lg font-bold rounded-lg transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <span className="material-symbols-outlined text-[20px] animate-spin">
                          progress_activity
                        </span>
                        <span>Registering Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        <span>Submit Admission Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
