import ScrollReveal from '../ScrollReveal';

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
                <ScrollReveal direction="up" delay={0.1}>

                    <div className="text-center z-10 px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                            Hi, my name is Nguyễn Huy
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                            IT student with Frontend internship experience and has built many personal projects. Has 1 year of internship working with Reactjs webapp project. 
                            Fluent in English, able to work in a team, good communication and logical thinking. Desire to develop into a professional programmer in a high-tech environment with the opportunity to use English. 
                            Has done some basic DB types such as Mysql, PostgreSQL, nodejs
                        </p>

                        <div className="flex justify-center space-x-4">
                            <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]">
                                View Project
                            </a>

                            <a href="#project" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                            overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.2)] hover:bg-blue-500/10">
                                Contact
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
    </section>
}