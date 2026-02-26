import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const textClass = "text-xl sm:text-2xl font-sans font-bold text-slate-400 leading-relaxed";
  const inputClass = "w-full bg-transparent border-none text-xl sm:text-2xl font-sans font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-0 peer px-0 py-1";

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden text-left z-10 w-full border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-lg blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-lg bg-orange-100 text-primary w-fit">
              <span className="w-2 h-2 rounded-lg bg-primary animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide uppercase">Start a Conversation</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-[1.15]">
              Ready to invest in your <span className="text-primary">people?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
              Whether you need leadership development, executive coaching, or strategic facilitation — our team brings 30+ years of expertise to every engagement. Let's talk about what's possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">mail</span>
                </div>
                <div className="flex flex-col justify-center h-14">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Email Us</h4>
                  <a href="mailto:leangela@consultingram.com" className="text-lg text-slate-600 hover:text-primary transition-colors">leangela@consultingram.com</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">call</span>
                </div>
                <div className="flex flex-col justify-center h-14">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Call Us</h4>
                  <a href="tel:+12026436011" className="text-lg text-slate-600 hover:text-primary transition-colors">(202) 643-6011</a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[28px]">location_on</span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-wide">Visit Us</h4>
                  <p className="text-lg text-slate-600">4938 Hampden Lane #302</p>
                  <p className="text-lg text-slate-600">Bethesda, MD 20814</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Mad Libs Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-white shadow-xl shadow-blue-900/5 rounded-xl -z-10 border border-slate-100"></div>
            <div className="p-8 sm:p-12 relative z-10">
              <form onSubmit={(e) => e.preventDefault()} className="max-w-[500px]">

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-3 mb-8">
                  <span className={textClass}>My name is</span>
                  <div className="relative inline-block flex-1 min-w-[200px] max-w-[300px]">
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="FULL NAME"
                      className={inputClass}
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-200 transition-colors pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out peer-hover:w-full peer-focus:w-full peer-focus:shadow-[0_4px_12px_rgba(249,115,22,0.3)] pointer-events-none"></div>
                  </div>
                  <span className={textClass}>and</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-3 mb-8">
                  <span className={textClass}>I can be reached at</span>
                  <div className="relative inline-block w-full sm:flex-1 min-w-[250px]">
                    <input
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      className={inputClass}
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-200 transition-colors pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out peer-hover:w-full peer-focus:w-full peer-focus:shadow-[0_4px_12px_rgba(249,115,22,0.3)] pointer-events-none"></div>
                  </div>
                  <span className={textClass}>.</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-3 mb-8">
                  <span className={textClass}>I'm interested in</span>
                  <div className="relative inline-block w-full sm:flex-1 min-w-[250px] group/select">
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer pr-8 bg-transparent`}
                      required
                    >
                      <option value="" disabled className="text-slate-400 font-normal text-base">SELECT SERVICE...</option>
                      <option value="training" className="text-slate-800 font-normal text-base">Training & Development</option>
                      <option value="leadership" className="text-slate-800 font-normal text-base">Leadership Development</option>
                      <option value="organizational" className="text-slate-800 font-normal text-base">Organizational Effectiveness</option>
                      <option value="facilitation" className="text-slate-800 font-normal text-base">Facilitation & Meeting Design</option>
                      <option value="coaching" className="text-slate-800 font-normal text-base">Executive Coaching</option>
                      <option value="keynote" className="text-slate-800 font-normal text-base">Keynote Speaking</option>
                      <option value="other" className="text-slate-800 font-normal text-base">Something Else</option>
                    </select>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-200 transition-colors pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out peer-hover:w-full peer-focus:w-full peer-focus:shadow-[0_4px_12px_rgba(249,115,22,0.3)] pointer-events-none"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover/select:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[24px]">expand_more</span>
                    </div>
                  </div>
                  <span className={textClass}>.</span>
                </div>

                <div className="flex flex-col gap-y-3 mb-12 w-full">
                  <span className={textClass}>Here are some details:</span>
                  <div className="relative w-full mt-2">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="TELL US ABOUT YOUR GOALS..."
                      className="w-full bg-transparent border-none text-xl sm:text-2xl font-sans font-bold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-0 peer resize-none px-0 py-1"
                      rows={3}
                    ></textarea>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-200 transition-colors pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out peer-hover:w-full peer-focus:w-full peer-focus:shadow-[0_4px_12px_rgba(249,115,22,0.3)] pointer-events-none"></div>
                  </div>
                </div>

                <div className="pt-2">
                  <button type="submit" className="group bg-secondary hover:bg-slate-900 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary/20 flex items-center justify-center cursor-pointer w-full text-lg">
                    Send Message <span className="material-symbols-outlined ml-3 transition-transform group-hover:translate-x-1 text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
