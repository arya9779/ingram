import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';

const teamMembers = [
    {
        name: 'Le\'Angela Ingram',
        role: 'Principal',
        bio: 'Le\'Angela Ingram is the Principal and founder of Ingram Consulting Group. With over 30 years of experience in human capital consulting, she has led numerous complex, large-scale organizational development initiatives for federal agencies and Fortune 500 companies alike. Her expertise lies in executive coaching, strategic alignment, and designing high-impact leadership programs.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
        email: 'leangela@consultingram.com',
        linkedin: 'https://www.linkedin.com/in/leangela-ingram/'
    },
    {
        name: 'Barbara Upston',
        role: 'Sr. Consultant',
        bio: 'Barbara brings exceptional expertise in facilitation and meeting design. She specializes in guiding leadership teams through complex transitions and strategic planning sessions, ensuring that every voice is heard and actionable outcomes are achieved.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
        email: 'barbara@consultingram.com',
        linkedin: '#'
    },
    {
        name: 'John Riordan',
        role: 'Sr. Consultant',
        bio: 'John is a seasoned executive coach and leadership development expert. He has a passion for developing resilient leaders in the public sector, helping them navigate bureaucracy and drive meaningful organizational change.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
        email: 'john@consultingram.com',
        linkedin: '#'
    },
    {
        name: 'Nancy Rosenshine',
        role: 'Sr. Consultant',
        bio: 'Nancy specializes in organizational assessment and change management. She works closely with clients to diagnose underlying structural issues and implement sustainable methodologies that improve workplace culture and operational efficiency.',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800',
        email: 'nancy@consultingram.com',
        linkedin: '#'
    },
    {
        name: 'Tony Bennae',
        role: 'Sr. Consultant',
        bio: 'Tony is an expert in diversity, equity, and inclusion (DEI) strategies and team dynamics. He designs and delivers transformational training programs that build cultural competence and foster highly collaborative, high-performing teams.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        email: 'tony@consultingram.com',
        linkedin: '#'
    }
];

export function Team() {
    return (
        <main className="pt-24 pb-32 bg-background min-h-screen">
            {/* Header Section */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center relative">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-lg blur-[120px] -z-10" />
                <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-lg blur-[100px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/50 border border-orange-900/10 rounded-lg text-cta font-medium text-sm shadow-sm ring-1 ring-inset ring-orange-900/10">
                        Our Experts
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                        Meet the <span className="text-secondary italic">Minds</span> <br /> Behind ICG
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
                        Our collective of diverse, highly-experienced senior consultants brings over 30 years of proven track records solving complex "People" problems across sectors.
                    </p>
                </motion.div>
            </section>

            {/* Team Grid */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Principal - Featured */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border grid lg:grid-cols-2 gap-12 items-center overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent -z-10 pointer-events-none" />

                    <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-xl shadow-xl shadow-foreground/5">
                        <img
                            src={teamMembers[0].image}
                            alt={teamMembers[0].name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="mb-2 text-cta font-bold tracking-widest uppercase text-sm font-sans">{teamMembers[0].role}</div>
                        <h2 className="text-4xl font-heading font-bold text-foreground mb-6">{teamMembers[0].name}</h2>
                        <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                            {teamMembers[0].bio}
                        </p>
                        <div className="flex gap-4">
                            <a href={`mailto:${teamMembers[0].email}`} className="flex items-center gap-2 bg-muted hover:bg-orange-100 text-stone-700 hover:text-orange-700 px-6 py-3 rounded-xl transition-colors duration-300 font-bold font-sans">
                                <Mail size={18} />
                                Email
                            </a>
                            <a href={teamMembers[0].linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-stone-900 text-white hover:bg-secondary rounded-xl transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Other Members Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {teamMembers.slice(1).map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% 0px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-border hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-cta font-bold font-sans text-sm tracking-wide">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground font-sans leading-relaxed mb-8 flex-grow">
                                {member.bio}
                            </p>
                            <div className="flex gap-3 mt-auto pt-6 border-t border-border/50">
                                <a href={`mailto:${member.email}`} className="text-stone-400 hover:text-orange-600 transition-colors p-2 bg-muted rounded-lg hover:bg-orange-50">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
