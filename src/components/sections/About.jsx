import ScrollReveal from '../ScrollReveal';

export const About = () => {
    const frontendSkills = ["HTML","CSS","Tailwindcss","Reactjs","Nextjs","TypeSript","English"];

    const backendSkills = ["Node.js","SQL","PostgreSQL","MySQL"];

    return <section 
    id="about" 
    className="min-h-screen flex items-center justify-center py-20">
        <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Skills
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key) => (
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                    >
                                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>
                                    B.S. in Computer Science
                                </strong>
                                Van Hien University(2019-2025)
                            </li>
                            {/* <li>
                                Relevance Coursework:Data sth,..
                            </li> */}
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Work Experience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4>
                                    Frontend Intern at DGV Company
                                </h4>
                                <p> Developed a WebApp dashboard using React.js, Next.js, and Tailwind CSS in a Scrum workflow; created responsive, SEO-friendly news pages; used TypeScript, Git, Jira, and gained familiarity with Axios, Postman, Figma, and performance optimization.</p>
                            </div>

                            <div>
                                <h4>
                                    Developer Intern at Katsura Company
                                </h4>
                                <p> Analyzed and documented a C codebase in Visual Studio, creating reports and supporting the team in improving code clarity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    </section>
}