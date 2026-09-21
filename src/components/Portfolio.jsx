"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Github,
  Linkedin,
  Facebook,
  Menu,
  Asterisk,
} from 'lucide-react';

const pic = 'https://res.cloudinary.com/dn7esger9/image/upload/v1783432404/elijah_eucwq1.png';
import ahbbaBrandCover from '../assets/ahbba-brand-cover.jpg';
import portraitsEditorialCover from '../assets/portraits-editorial-cover.jpg';
import onelifePostersCover from '../assets/onelife-posters-cover.jpg';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Graphics', href: '#graphics' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = ['DEVELOPMENT', 'DESIGN', 'BRANDING', 'STRATEGY', 'UI/UX', 'MOTION GRAPHIC', 'ART DIRECTION'];

  // Career milestones — edit years / descriptions to match your real history
  const milestones = [
    { id: '01', title: 'Ahbba Homes', subtitle: 'Secure infrastructure build', tag: 'DEVELOPMENT', year: '2025' },
    { id: '02', title: 'Builders of Consequence', subtitle: 'Editorial platform & manifesto', tag: 'DESIGN', year: '2025' },
    { id: '03', title: 'Libco Zambia Ltd', subtitle: 'Corporate services platform', tag: 'DEVELOPMENT', year: '2024' },
    { id: '04', title: 'Portraits of Ambition', subtitle: 'Visual narrative & UX design', tag: 'ART DIRECTION', year: '2024' },
  ];

  // Shipped work
  const mainProjects = [
    {
      title: 'Ahbba Homes',
      tag: 'DEVELOPMENT',
      description: 'Secure digital infrastructure for a family-focused housing platform.',
      link: 'https://ahbbahomes.com',
    },
    {
      title: 'Builders of Consequence',
      tag: 'DESIGN',
      description: 'A digital manifesto platform built for high-end storytelling.',
      link: 'https://buildersofconsequence.com',
    },
    {
      title: 'Libco Zambia',
      tag: 'DEVELOPMENT',
      description: 'Service-oriented platform bridging quality and innovation.',
      link: 'https://libcozambia.com',
    },
    {
      title: 'Portraits of Ambition',
      tag: 'ART DIRECTION',
      description: "An immersive visual narrative on Zambia's most ambitious builders.",
      link: 'https://portraitsofambition.com',
    },
  ];

  // Currently in progress
  const currentBuilds = [
    {
      title: 'Link Media Zambia',
      tag: 'IN PROGRESS',
      description: 'A media & communications platform in active development.',
      link: 'https://linkmediazambia.com',
    },
    {
      title: 'Atmosphere Daily',
      tag: 'IN PROGRESS',
      description: 'A daily news, devotion web application.',
      link: 'https://atmospheredaily.com',
    },
    {
      title: 'Kabulonga Fitness Squad',
      tag: 'IN PROGRESS',
      description: 'A fitness and health community.',
      link: 'https://kabulonga-fitness-squad.vercel.app',
    },
  ];

  // Graphics design work — imageUrl is bundled locally (see /src/assets/graphics).
  // pdfUrl points at /public/graphics — swap either for your own Cloudinary links whenever you like:
  // Cloudinary image example: https://res.cloudinary.com/<your-cloud-name>/image/upload/v.../file.jpg
  // Cloudinary PDF example:   https://res.cloudinary.com/<your-cloud-name>/image/upload/v.../file.pdf
  const graphicsProjects = [
    {
      title: 'Logo Artwork',
      tag: 'BRANDING',
      description: 'Logo system, color palette, and brand guidelines for a housing platform.',
      imageUrl: ahbbaBrandCover,
      pdfUrl: '/graphics/ahbba-brand-book.pdf',
    },
    {
      title: 'QR Code Letterhead Design',
      tag: 'ART DIRECTION',
      description: 'Magazine-style layout and typography system for a visual qrcode.',
      imageUrl: portraitsEditorialCover,
      pdfUrl: '/graphics/portraits-editorial.pdf',
    },
    {
      title: 'Onelife Events — Quest Checkin QR Code',
      tag: 'POSTER',
      description: 'Promotional poster series and social assets for an events & communications brand.',
      imageUrl: onelifePostersCover,
      pdfUrl: '/graphics/onelife-posters.pdf',
    },
  ];

  const githubUrl = 'https://github.com/kalosa0770';

  const socials = [
    { icon: <Github size={18} />, link: 'https://github.com/kalosa0770', label: 'GitHub' },
    { icon: <Linkedin size={18} />, link: 'https://linkedin.com/in/elijah-kalosa-9b1b47278', label: 'LinkedIn' },
    { icon: <Facebook size={18} />, link: 'https://facebook.com/elijahkalosa', label: 'Facebook' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (

    <div className="min-h-screen text-[#131313] font-sans selection:bg-orange-200 overflow-x-hidden w-full max-w-full">

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#F2F0EA]/90 backdrop-blur-md border-b border-black/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-1.5 font-black text-lg tracking-tight">
            <Asterisk size={22} className="text-[#E85C33]" strokeWidth={2.5} />
            Kalosa.
          </div>

          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-500">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:kalosaelijah3@gmail.com"
              className="hidden sm:block bg-[#131313] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-black transition-all"
            >
              Let's talk
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#F2F0EA] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-1.5 font-black text-lg tracking-tight">
                <Asterisk size={22} className="text-[#E85C33]" strokeWidth={2.5} />
                Kalosa.
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-white rounded-full shadow-sm active:scale-95 transition-transform"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="text-5xl font-black tracking-tighter flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight className="text-[#E85C33]" />
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-black/10">
              <div className="flex gap-6 mb-10">
                {socials.map((s) => (
                  <a key={s.label} href={s.link} className="text-sm font-bold hover:text-[#E85C33] transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
              <a
                href="mailto:kalosaelijah3@gmail.com"
                className="block w-full text-center bg-[#131313] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest"
              >
                Got a project?
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO --- */}
      <section className="px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div initial="hidden" animate="show" variants={fadeUp} className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Hi, I'm Elijah.
              <br />
              A creative <Asterisk size={30} className="inline text-[#E85C33] -translate-y-1" strokeWidth={2.5} /> developer & designer
              <br />
              based in <span className="relative inline-block">
                <span className="opacity-40">Lusaka</span>
                <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#131313]"></span>
              </span> — remote-friendly.
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500 mb-8">
              <span>Developer</span>
              <Asterisk size={14} className="text-[#E85C33]" />
              <span>Designer</span>
              
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-black/15 hover:border-black/40 transition-colors"
              >
                Got a project?
              </a>
              <a
                href="mailto:kalosaelijah3@gmail.com"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#131313] text-white hover:bg-black transition-colors"
              >
                Let's talk
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 relative flex justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -right-2 md:right-6 text-[#E85C33]"
            >
              <Asterisk size={64} strokeWidth={1.5} />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-4 -left-4 text-[#E85C33]/70"
            >
              <Asterisk size={40} strokeWidth={1.5} />
            </motion.div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
              <img src={pic} alt="Elijah Kalosa" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS TICKER --- */}
      <div className="relative py-2">
        <div className="bg-[#131313] text-white py-5 md:py-6 overflow-hidden whitespace-nowrap -rotate-2 shadow-lg">
          <div className="flex gap-10 animate-marquee uppercase font-bold text-sm md:text-lg tracking-widest">
            {[...Array(3)].map((_, r) => (
              <div key={r} className="flex gap-10 items-center">
                {skills.map((s) => (
                  <span key={s} className="flex items-center gap-10">
                    {s} <Asterisk size={14} className="text-[#E85C33]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- ABOUT / BIO --- */}
      <section id="about" className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-10 md:gap-16"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              <span>Elijah</span> <Asterisk size={14} className="text-[#E85C33]" /> <span>Kalosa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Full-stack developer
              <br />
              and graphics designer.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              I build end-to-end products — from database and API to interface — and design the
              visual identity that holds them together. Every project gets the same standard:
              reliable under the hood, considered on the surface.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Based in Lusaka, Zambia, working with teams and clients across Zambia and a scaling in mind aross the world.
              Comfortable owning a project from first wireframe to production deploy.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Based in</p>
                <p className="text-sm font-black">Lusaka, Zambia</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Focus</p>
                <p className="text-sm font-black">Web &amp; Brand Systems</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- STATS BAR --- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="grid grid-cols-3 mt-16 rounded-3xl overflow-hidden border border-black/10"
        >
          <div className="bg-white text-center py-8 px-4">
            <p className="text-3xl md:text-4xl font-black">6+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Years Experience</p>
          </div>
          <div className="bg-[#131313] text-white text-center py-8 px-4">
            <p className="text-3xl md:text-4xl font-black">7+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Projects Shipped</p>
          </div>
          <div className="bg-white text-center py-8 px-4">
            <p className="text-3xl md:text-4xl font-black">2</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">In Development</p>
          </div>
        </motion.div>
      </section>

      {/* --- MILESTONES --- */}
      <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <Asterisk size={28} className="text-[#E85C33] mx-auto mb-4" strokeWidth={2} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Milestones</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-3">Shipped Work, By Year</p>
        </motion.div>

        <div className="space-y-3">
          {milestones.map((m, i) => (
            <motion.div
              key={m.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-black/5 px-6 py-5"
            >
              <div className="flex items-center gap-5">
                <span className="w-8 h-8 flex items-center justify-center bg-[#E85C33] text-white text-xs font-black rounded-lg shrink-0">
                  {m.id}
                </span>
                <div>
                  <p className="font-black text-sm md:text-base">{m.title}</p>
                  <p className="text-xs md:text-sm text-gray-400">{m.subtitle}</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{m.tag}</p>
                <p className="text-xs md:text-sm font-black">{m.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PORTFOLIO / WORK --- */}
      <section id="work" className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <Asterisk size={28} className="text-[#E85C33] mx-auto mb-4" strokeWidth={2} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Portfolio</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-3">Shipped &amp; In Progress</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {[...currentBuilds, ...mainProjects].map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-black/5 p-7 md:p-8 flex flex-col justify-between min-h-[200px]"
            >
              <div className="absolute -right-6 -bottom-6 text-black/[0.03] group-hover:text-[#E85C33]/10 transition-colors">
                <Asterisk size={140} strokeWidth={1} />
              </div>
              <div className="relative flex justify-between items-start">
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                    project.tag === 'IN PROGRESS' ? 'bg-[#E85C33] text-white' : 'bg-black/5 text-gray-500'
                  }`}
                >
                  {project.tag}
                </span>
                <ArrowUpRight className="text-gray-300 group-hover:text-[#E85C33] group-hover:rotate-45 transition-all" size={20} />
              </div>
              <div className="relative mt-10">
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.description}</p>
                <span className="text-xs font-bold text-gray-400 group-hover:text-[#131313] transition-colors">
                  {project.link.replace('https://', '')}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={mainProjects.length + currentBuilds.length}
          className="flex justify-center mt-10"
        >
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-black/15 hover:border-black/40 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            View More on GitHub
            <ArrowUpRight size={16} className="text-[#E85C33] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* --- GRAPHICS DESIGN --- */}
      <section id="graphics" className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <Asterisk size={28} className="text-[#E85C33] mx-auto mb-4" strokeWidth={2} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Graphics Design</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-3">Brand, Print &amp; Editorial Work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {graphicsProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={i}
              className="group rounded-3xl overflow-hidden bg-white border border-black/5 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/90 text-gray-600">
                  {project.tag}
                </span>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-black tracking-tight mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-5 flex-1">{project.description}</p>
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E85C33] hover:text-[#131313] transition-colors"
                >
                  View Case Study (PDF)
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-[#131313] text-white rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <Asterisk size={200} strokeWidth={1} className="absolute -top-16 -right-16 text-white/5" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 relative">Let's build something.</h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md mx-auto relative">
            Open to collaborations that need both engineering and design under one roof.
          </p>
          <a
            href="mailto:kalosaelijah3@gmail.com"
            className="relative inline-block bg-[#E85C33] text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-[#d64f28] transition-colors"
          >
            Send Message
          </a>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5">
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 order-2 md:order-1">
          © 2026 Elijah Kalosa — Full-Stack Developer &amp; Graphics Designer — Lusaka
        </div>
        <div className="flex gap-6 order-1 md:order-2">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest hover:text-[#E85C33] transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default Portfolio;