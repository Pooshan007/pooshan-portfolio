"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import emailjs from "@emailjs/browser";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
};

  return (
    <main className="relative bg-black w-full min-h-screen text-white select-none selection:bg-[#FF5000] selection:text-white">
      
      {/* Nike-Style Minimalist Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md px-6 md:px-12 py-5 flex items-center justify-between border-b border-white/10 pointer-events-auto">
        <div>
          <a href="#" className="font-display font-normal text-2xl tracking-wide text-white uppercase hover:text-[#FF5000] transition-colors duration-300">
            pooshan goud
          </a>
        </div>
        
        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 font-black"
          >
            Home
          </a>
          <a 
            href="#projects" 
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 font-black"
          >
            Projects
          </a>
          <a 
            href="#achievements" 
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 font-black"
          >
            Achievements
          </a>
          <a 
            href="#contact" 
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 font-black"
          >
            Contact
          </a>
        </nav>

        {/* Call to action header link */}
        <div>
          <a 
            href="#contact"
            className="font-sans text-[10px] tracking-[0.15em] uppercase text-black bg-white px-5 py-2.5 hover:bg-[#FF5000] hover:text-white transition-all duration-300 font-black rounded-none border border-white"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Scroll Canvas Section */}
      <div ref={containerRef} className="relative w-full h-[500vh]">
        <ScrollyCanvas containerRef={containerRef} />
        <Overlay containerRef={containerRef} />
      </div>

      {/* Projects and Achievements Integrated Block */}
      <Projects />

      {/* CTA SECTION */}
      <section id="contact" className="relative bg-black py-40 px-6 md:px-16 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="font-sans text-[#FF5000] text-xs tracking-[0.35em] uppercase block font-black">
            READY TO COLLABORATE // NEXT ACTION
          </span>
          
          <h2 className="font-display font-normal text-6xl md:text-8xl lg:text-[7.5rem] text-white uppercase tracking-tighter leading-none select-none">
            LET'S BUILD SOMETHING GREAT.
          </h2>
          
          <form
  ref={formRef}
  onSubmit={sendEmail}
  className="max-w-xl mx-auto pt-8 space-y-5"
>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full bg-[#111] border border-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#FF5000]"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full bg-[#111] border border-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#FF5000]"
  />

  <textarea
    name="message"
    rows={5}
    placeholder="Your Message"
    required
    className="w-full bg-[#111] border border-white/10 px-5 py-4 text-white placeholder:text-white/40 outline-none resize-none focus:border-[#FF5000]"
  />

  <button
    type="submit"
    className="w-full bg-[#FF5000] hover:bg-white hover:text-black text-white py-4 uppercase tracking-[0.25em] font-black transition-all duration-300"
  >
    Send Message
  </button>

</form>
        </div>
      </section>

      {/* FOOTER SECTION: WHY WORK WITH ME */}
      <footer className="relative bg-black py-24 px-8 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="space-y-4">
            <span className="font-sans text-[#FF5000] text-xs tracking-[0.3em] uppercase block font-black">
              ATHLETE VALUES // DOSSIER
            </span>
            <h3 className="font-display font-normal text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
              WHY WORK WITH ME?
            </h3>
          </div>

          {/* Value Cards: 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/10 bg-black rounded-none space-y-3">
              <h4 className="font-display font-normal text-2xl text-[#FF5000] uppercase tracking-tight">
                Fast Learner
              </h4>
              <p className="font-sans text-white/50 text-xs leading-relaxed font-light">
                Adapt to new frameworks and deploy solutions with high velocity. Always tracking forward loops.
              </p>
            </div>
            
            <div className="p-8 border border-white/10 bg-black rounded-none space-y-3">
              <h4 className="font-display font-normal text-2xl text-[#FF5000] uppercase tracking-tight">
                Hackathon Proven
              </h4>
              <p className="font-sans text-white/50 text-xs leading-relaxed font-light">
                Battle-tested builder capable of engineering functional prototypes under intense time constraints.
              </p>
            </div>
            
            <div className="p-8 border border-white/10 bg-black rounded-none space-y-3">
              <h4 className="font-display font-normal text-2xl text-[#FF5000] uppercase tracking-tight">
                Problem Solver
              </h4>
              <p className="font-sans text-white/50 text-xs leading-relaxed font-light">
                Focused on creating scalable, efficient, and impactful solutions through engineering, innovation, and continuous learning.
              </p>
            </div>
            
            <div className="p-8 border border-white/10 bg-black rounded-none space-y-3">
              <h4 className="font-display font-normal text-2xl text-[#FF5000] uppercase tracking-tight">
                Data Analytics
              </h4>
              <p className="font-sans text-white/50 text-xs leading-relaxed font-light">
                Transforming raw data into actionable insights through statistical analysis, visualization, and data-driven decision making.
              </p>
            </div>
          </div>

          {/* Socials / Copyright */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-sans text-white/40 text-[10px] tracking-widest uppercase">
              © 2026 POOSHAN GOUD // RUN OVER LIMITS.
            </span>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/Pooshan007"
                className="font-sans text-[10px] tracking-widest uppercase text-white/60 hover:text-[#FF5000] border border-white/20 hover:border-[#FF5000] px-4 py-2 rounded-none transition-all duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/pooshan-goud-nalla/"
                className="font-sans text-[10px] tracking-widest uppercase text-white/60 hover:text-[#FF5000] border border-white/20 hover:border-[#FF5000] px-4 py-2 rounded-none transition-all duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/PooshanGoud"
                className="font-sans text-[10px] tracking-widest uppercase text-white/60 hover:text-[#FF5000] border border-white/20 hover:border-[#FF5000] px-4 py-2 rounded-none transition-all duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
