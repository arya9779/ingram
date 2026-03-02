import { Building2, GraduationCap, Briefcase, Heart, Stethoscope } from 'lucide-react'

const clientCategories = [
    {
        title: "Federal & Local Government",
        icon: Building2,
        accent: "bg-secondary",
        iconColor: "text-secondary",
        clients: [
            "NASA",
            "U.S. Department of Army",
            "U.S. Agency for International Development",
            "U.S. Department of Agriculture (APHIS/AMS)",
            "United States Navy: Naval District Washington",
            "U.S. Attorney's Office",
            "U.S. Department of Commerce",
            "U.S. Census Bureau",
            "U.S. Department of Education",
            "U.S. Department of Energy",
            "U.S. Dept. of Health & Human Services (SAMHSA)",
            "U.S. Department of Labor",
            "U.S. Dept. of Transportation (FHWA)",
            "U.S. Environmental Protection Agency",
            "U.S. Dept. of State (Foreign Service Institute)",
            "U.S. Department of Treasury",
            "Frederick County Teachers' Association",
            "District of Columbia Superior Court"
        ]
    },
    {
        title: "Academic & Education",
        icon: GraduationCap,
        accent: "bg-[#4aa5e5]",
        iconColor: "text-[#4aa5e5]",
        clients: [
            "Anne Arundel Community College",
            "Bowie University",
            "Howard University",
            "Johns Hopkins University",
            "Montgomery Community College",
            "Morehouse School of Medicine"
        ]
    },
    {
        title: "Private Sector",
        icon: Briefcase,
        accent: "bg-slate-700",
        iconColor: "text-slate-700",
        clients: [
            "Chesapeake Utilities",
            "Colleague Training",
            "Cygnus Corporation",
            "ORC/MACRO International",
            "Graduate School, USA",
            "Jenkins and Jones Law Firm",
            "Management Consulting & Associates",
            "Benchmark Training"
        ]
    },
    {
        title: "Non-Profit Sector",
        icon: Heart,
        accent: "bg-primary",
        iconColor: "text-primary",
        clients: [
            "American Bar Association",
            "ATTC-Southeast & Mountain West",
            "Partnership for Public Service",
            "Global Learning Systems",
            "Council for Excellence in Government",
            "Florida Prevention Partners",
            "NC School for Alcohol and Drug Studies"
        ]
    },
    {
        title: "Hospitals & Healthcare",
        icon: Stethoscope,
        accent: "bg-emerald-700",
        iconColor: "text-emerald-700",
        clients: [
            "Washington Hospital",
            "Whitman Walker Clinic",
            "Wellmont Healthcare Systems"
        ]
    }
];

const logos = [
    { name: "NASA", url: "/nasa.png" },
    { name: "USDA", url: "/usda.png" },
    { name: "Dept of Education", url: "/ed.png" },
    { name: "Johns Hopkins", url: "/jh_transparent.png" },
];

export function Clients() {
    return (
        <section id="clients" className="py-24 bg-white relative overflow-hidden w-full font-sans border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* Header content matching Consultingram text formatting */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary text-primary text-sm font-semibold mb-6">
                        Our Clients
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-secondary font-heading mb-4">
                        Trusted Across <span className="text-primary">Government</span><br />Healthcare & Beyond
                    </h2>
                </div>

                {/* Client Logos Banner */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-20 items-center">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center w-36 h-36 md:w-52 md:h-52 overflow-hidden">
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="max-w-full max-h-[130px] md:max-h-[160px] object-contain hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                                title={logo.name}
                            />
                        </div>
                    ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

                    {/* Row 1: Government (7 cols) + Academic (5 cols) */}
                    <div className="md:col-span-7 bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                        <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-200 bg-white">
                            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                <Building2 strokeWidth={2} className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary font-heading">Federal & Local Government</h3>
                            <span className="ml-auto text-sm font-bold text-secondary bg-slate-100 px-3 py-1 rounded-full">{clientCategories[0].clients.length}</span>
                        </div>
                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                            {clientCategories[0].clients.map((c) => (
                                <div key={c} className="flex items-start gap-3 text-[15px] font-medium text-slate-600 hover:text-secondary hover:translate-x-1 transition-all">
                                    <span className="w-2 h-2 rounded-full bg-secondary/50 flex-shrink-0 mt-1.5"></span>
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                        <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-200 bg-white">
                            <div className="w-12 h-12 bg-[#4aa5e5]/10 rounded-xl flex items-center justify-center text-[#4aa5e5]">
                                <GraduationCap strokeWidth={2} className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary font-heading">Academic & Education</h3>
                            <span className="ml-auto text-sm font-bold text-[#4aa5e5] bg-slate-100 px-3 py-1 rounded-full">{clientCategories[1].clients.length}</span>
                        </div>
                        <div className="p-8 space-y-3">
                            {clientCategories[1].clients.map((c) => (
                                <div key={c} className="flex items-start gap-3 text-[15px] font-medium text-slate-600 hover:text-[#4aa5e5] hover:translate-x-1 transition-all">
                                    <span className="w-2 h-2 rounded-full bg-[#4aa5e5]/50 flex-shrink-0 mt-1.5"></span>
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Private (5 cols) + Non-Profit (4 cols) + Healthcare (3 cols) */}
                    <div className="md:col-span-5 bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                        <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-200 bg-white">
                            <div className="w-12 h-12 bg-slate-700/10 rounded-xl flex items-center justify-center text-slate-700">
                                <Briefcase strokeWidth={2} className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary font-heading">Private Sector</h3>
                            <span className="ml-auto text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">{clientCategories[2].clients.length}</span>
                        </div>
                        <div className="p-8 space-y-3">
                            {clientCategories[2].clients.map((c) => (
                                <div key={c} className="flex items-start gap-3 text-[15px] font-medium text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all">
                                    <span className="w-2 h-2 rounded-full bg-slate-400/50 flex-shrink-0 mt-1.5"></span>
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                        <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-200 bg-white">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <Heart strokeWidth={2} className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary font-heading">Non-Profit</h3>
                            <span className="ml-auto text-sm font-bold text-primary bg-slate-100 px-3 py-1 rounded-full">{clientCategories[3].clients.length}</span>
                        </div>
                        <div className="p-8 space-y-3">
                            {clientCategories[3].clients.map((c) => (
                                <div key={c} className="flex items-start gap-3 text-[15px] font-medium text-slate-600 hover:text-primary hover:translate-x-1 transition-all">
                                    <span className="w-2 h-2 rounded-full bg-primary/50 flex-shrink-0 mt-1.5"></span>
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3 bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300">
                        <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-200 bg-white">
                            <div className="w-12 h-12 bg-emerald-700/10 rounded-xl flex items-center justify-center text-emerald-700">
                                <Stethoscope strokeWidth={2} className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary font-heading">Healthcare</h3>
                            <span className="ml-auto text-sm font-bold text-emerald-700 bg-slate-100 px-3 py-1 rounded-full">{clientCategories[4].clients.length}</span>
                        </div>
                        <div className="p-8 space-y-3">
                            {clientCategories[4].clients.map((c) => (
                                <div key={c} className="flex items-start gap-3 text-[15px] font-medium text-slate-600 hover:text-emerald-700 hover:translate-x-1 transition-all">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500/50 flex-shrink-0 mt-1.5"></span>
                                    {c}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
