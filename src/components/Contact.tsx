import { useState } from 'react'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        industry: '',
        interest: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const inputClass = "w-full bg-transparent border-b border-slate-300 text-[15px] font-sans text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-primary py-3 transition-colors peer"

    return (
        <section id="contact" className="py-24 bg-secondary text-white w-full border-b border-white/10 relative">
            <div className="mx-auto max-w-[1400px] px-8">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column - Contact Info */}
                    <div className="flex-1 max-w-lg pt-8">
                        <h2 className="text-4xl md:text-[50px] font-bold mb-6 font-heading tracking-tight">
                            Reach Out
                        </h2>
                        <p className="text-xl font-bold text-slate-200 mb-12 font-sans border-b border-white/10 pb-12">
                            We'd love to connect
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary p-3 rounded-full text-secondary shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="text-[17px] text-slate-200 mt-1 leading-relaxed">
                                    <span className="font-bold text-white mb-1 block text-lg">In person</span>
                                    Le’Angela Ingram, Principal<br />
                                    4938 Hampden Lane #302<br />
                                    Bethesda, MD 20814
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary p-3 rounded-full text-secondary shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-[17px] text-slate-200 mt-1 leading-relaxed">
                                    <span className="font-bold text-white mb-1 block text-lg">Email</span>
                                    <a href="mailto:leangela@consultingram.com" className="text-white hover:text-primary transition-colors">leangela@consultingram.com</a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary p-3 rounded-full text-secondary shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-[17px] text-slate-200 mt-1 leading-relaxed">
                                    <span className="font-bold text-white mb-1 block text-lg">Drop us a line</span>
                                    <a href="tel:2026436011" className="text-white hover:text-primary transition-colors">(202) 643-6011</a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary p-3 rounded-full text-secondary shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="text-[15px] text-slate-200 mt-1.5 font-medium tracking-wide">
                                    Monday - Saturday: 8.00am - 17.00pm<br />
                                    Sunday: Closed
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form inside Light Box */}
                    <div className="flex-1 lg:max-w-[700px] bg-[#d3d9e3] rounded-[40px] p-10 md:p-14 text-slate-900 shadow-2xl z-10 lg:-mb-40">
                        <h3 className="text-3xl font-bold font-heading mb-10 text-secondary leading-snug">
                            Ready to Elevate Your Leadership and Drive Organizational Impact?
                        </h3>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-8 font-semibold text-sm w-full">

                            <div className="relative">
                                <input id="name" type="text" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Full Name*" required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input id="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="Email*" required />
                                </div>
                                <div className="relative">
                                    <input id="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Phone*" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input id="industry" type="text" value={formData.industry} onChange={handleChange} className={inputClass} placeholder="Industry" />
                                </div>
                                <div className="relative group/select">
                                    <select id="interest" value={formData.interest} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-8 bg-transparent`} required>
                                        <option value="" disabled className="text-slate-500">Service Of Interest*</option>
                                        <option value="training" className="text-slate-800">Training & Development</option>
                                        <option value="leadership" className="text-slate-800">Leadership Development</option>
                                        <option value="organizational" className="text-slate-800">Organizational Effectiveness</option>
                                        <option value="factional" className="text-slate-800">Fractional CODC / CDO</option>
                                    </select>
                                </div>
                            </div>

                            <div className="relative pt-4 border-b border-slate-300">
                                <textarea id="message" value={formData.message} onChange={handleChange} rows={2} className="w-full bg-transparent resize-none text-[15px] font-sans text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-primary peer transition-colors" placeholder="Message"></textarea>
                            </div>

                            <div className="pt-6">
                                <button type="submit" className="bg-primary hover:bg-primary-hover text-secondary font-bold py-3.5 px-8 rounded-full transition-all shadow-md hover:-translate-y-0.5 text-[15px] inline-flex items-center justify-center tracking-wide">
                                    Submit Inquiry
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
