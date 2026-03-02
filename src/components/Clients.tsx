import { Building2, GraduationCap, Briefcase, Heart, Stethoscope } from 'lucide-react'

const clientCategories = [
    {
        title: "Federal & Local Government",
        icon: Building2,
        bgImage: "/bg_government.png",
        colSpan: "md:col-span-7",
        listClass: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5",
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
        bgImage: "/bg_education.png",
        colSpan: "md:col-span-5",
        listClass: "flex flex-col gap-y-5",
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
        bgImage: "/bg_private.png",
        colSpan: "md:col-span-5",
        listClass: "flex flex-col gap-y-5",
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
        bgImage: "/bg_nonprofit.png",
        colSpan: "md:col-span-4",
        listClass: "flex flex-col gap-y-5",
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
        bgImage: "/bg_healthcare.png",
        colSpan: "md:col-span-3",
        listClass: "flex flex-col gap-y-5",
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

                {/* Bento Grid layout mapped cleanly */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
                    {clientCategories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <div
                                key={idx}
                                className={`${cat.colSpan} group relative bg-slate-50 rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-transparent transition-all duration-500`}
                            >
                                {/* Background Image that appears on hover */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <img src={cat.bgImage} alt={cat.title} className="w-full h-full object-cover" />
                                    {/* Dark overlay to ensure text remains readable */}
                                    <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm"></div>
                                </div>

                                {/* Content wrapper, z-10 puts it over the absolute background */}
                                <div className="relative z-10 w-full h-full flex flex-col">
                                    <div className="flex items-center gap-4 px-8 py-6 border-b border-slate-200 bg-white group-hover:bg-transparent group-hover:border-white/20 transition-colors duration-500">
                                        <div className="w-12 h-12 bg-secondary/10 group-hover:bg-white/10 rounded-xl flex items-center justify-center text-secondary group-hover:text-white transition-colors duration-500">
                                            <Icon strokeWidth={2} className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-secondary font-heading group-hover:text-white transition-colors duration-500">{cat.title}</h3>
                                        <span className="ml-auto text-sm font-bold text-secondary bg-slate-100 group-hover:bg-white/20 group-hover:text-white px-3 py-1 rounded-full transition-colors duration-500">{cat.clients.length}</span>
                                    </div>
                                    <div className={`p-8 ${cat.listClass}`}>
                                        {cat.clients.map((c, cIdx) => (
                                            <div key={cIdx} className="flex items-start gap-3 text-[15.5px] font-semibold text-slate-600 group-hover:text-white/90 hover:!text-primary transition-all duration-300 transform group-hover:translate-x-1">
                                                <span className="w-2.5 h-2.5 rounded-full bg-secondary/40 group-hover:bg-primary flex-shrink-0 mt-1.5 transition-colors duration-500"></span>
                                                {c}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
