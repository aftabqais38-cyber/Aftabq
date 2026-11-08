import React, { useState } from 'react';
import { CAMPUS_INFO } from '../data/portalData';
import { submitContactQuery } from '../services/api';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContactQuery(formData);
      setSuccessMsg(true);
      setFormData({ fullName: '', phone: '', message: '' });
      setTimeout(() => setSuccessMsg(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-xs uppercase tracking-widest text-primary font-bold">
            Get In Touch
          </span>
          <h2 className="font-headline-lg text-3xl md:text-4xl font-bold text-on-surface mt-1">
            Contact Campus & Visit Us
          </h2>
          <p className="font-body-md text-base text-on-surface-variant mt-2">
            Our admissions desk and administrative council welcome parents and prospective students throughout the week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campus Details & Quick Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 4 Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="p-5 rounded-xl bg-surface-container-lowest border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">location_on</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm font-bold text-on-surface">Campus Address</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {CAMPUS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Helpline */}
              <div className="p-5 rounded-xl bg-surface-container-lowest border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-secondary-container text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">call</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm font-bold text-on-surface">Helpline & Mobile</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {CAMPUS_INFO.phoneNumbers[0]}
                    <br />
                    {CAMPUS_INFO.phoneNumbers[1]}
                  </p>
                </div>
              </div>

              {/* Inquiries */}
              <div className="p-5 rounded-xl bg-surface-container-lowest border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-tertiary-container/20 text-tertiary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm font-bold text-on-surface">Official Inquiries</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed break-all">
                    {CAMPUS_INFO.email}
                    <br />
                    {CAMPUS_INFO.admissionsEmail}
                  </p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="p-5 rounded-xl bg-surface-container-lowest border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">schedule</span>
                </div>
                <div>
                  <h4 className="font-title-md text-sm font-bold text-on-surface">Visiting Hours</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    {CAMPUS_INFO.visitingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Direct Query Form */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-slate-200 shadow-sm">
              <h4 className="font-title-md text-base font-bold text-on-surface mb-2">
                Send Direct Message to Campus Desk
              </h4>

              {successMsg && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">done_all</span>
                  <span>Message delivered to campus administration! We will reply promptly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-10 px-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface"
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="How can we assist you with admissions or transport?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm rounded-lg border border-slate-300 bg-white text-on-surface resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="font-label-md text-xs px-5 py-2.5 bg-inverse-surface hover:bg-slate-800 text-inverse-on-surface font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Location Map Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest border border-slate-200 shadow-md flex flex-col">
              <div className="p-4 bg-surface-container border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-title-md text-sm font-bold text-on-surface">Taunsa Sharif Campus Map</h4>
                  <span className="text-xs text-secondary">College Chowk, Kot Adu Road Junction</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Taunsa+Sharif"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                </a>
              </div>

              {/* Map Canvas Graphic */}
              <div className="h-72 w-full bg-slate-100 relative flex items-center justify-center overflow-hidden">
                <iframe
                  title="Campus Location"
                  className="w-full h-full border-0 filter saturate-150"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54753.86470381665!2d70.61208925!3d30.70425785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392a832d73fffaef%3A0x8e874ce20ce03ef7!2sTaunsa%2C%20Dera%20Ghazi%20Khan%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  loading="lazy"
                />
              </div>

              {/* Campus Vans Routes Strip */}
              <div className="p-4 bg-surface-container-low text-xs border-t border-slate-200">
                <span className="font-bold text-on-surface block mb-1">Dedicated Transport Network:</span>
                <p className="text-secondary leading-relaxed">
                  Daily safe pick & drop college vans operating across Kot Adu Road, Mangrotha, Retra, Tibbi Qaisrani, and adjoining rural centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
