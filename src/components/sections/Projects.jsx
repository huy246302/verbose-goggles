import ScrollReveal from '../ScrollReveal';

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <ScrollReveal direction="up" delay={0.1}>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> 
                            Sport new website
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {" "}
                                A sports news web app where users can read the latest articles about various sports and share their opinions through a comment section, 
                                creating a space for fans to stay informed and engage in discussions.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Javascript","CSS","PHP","HTML"].map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                href="https://github.com/Songtho123/do-an-" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    View project {" "}
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> 
                            Personal portfolio
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {" "}
                                A personal portfolio website that highlights my skills, showcases selected projects with live demos and source code, 
                                and provides an easy way for potential employers or clients to learn about me and get in touch.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React","Tailwind CSS","HTML","Vite"].map((tech,key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a 
                                href="https://github.com/huy246302/nguyen-huy-porfolio" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    {" "}
                                    View project {" "}
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </ScrollReveal>
    </section>
}