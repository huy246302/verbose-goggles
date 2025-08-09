export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
                    <div className="text-center z-10 px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                            Hi, my name is Nguyễn Huy
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                            Sinh viên CNTT với kinh nghiệm thực tập Frontend và từng xây dựng nhiều dự
                            án cá nhân. Thành thạo tiếng Anh, có khả năng làm việc nhóm, giao tiếp tốt và
                            tư duy logic. Chủ động, kỹ lưỡng, yêu thích học hỏi và cập nhật công nghệ.
                            Mong muốn phát triển thành lập trình viên chuyên nghiệp tại môi trường công
                            nghệ cao có cơ hội sử dụng tiếng Anh
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
    </section>
}