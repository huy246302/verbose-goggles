import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData,setFromData] = useState({
        name:"",
        email: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, e.target, 
            import.meta.env.VITE_PUBLIC_ID).then((result) => {
            alert("Message send!");
            setFromData({ name: "", email: "", message: ""});
        }).catch(() => alert("Oops! Something went wrong.Please try again."));
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
            <ScrollReveal direction="up" delay={0.1}>
                <div className='w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto'>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='relative'>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            placeholder='Name...'
                            onChange={(e) => setFromData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div className='relative'>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            placeholder='@example.@email.com...'
                            onChange={(e) => setFromData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div className='relative'>
                            <textarea 
                            id="message" 
                            name="message" 
                            required 
                            value={formData.message}
                            rows={5}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
                            placeholder='Your Message...'
                            onChange={(e) => setFromData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)}'>
                            Send button
                        </button>
                    </form>
                </div>
            </ScrollReveal>
    </section>
}