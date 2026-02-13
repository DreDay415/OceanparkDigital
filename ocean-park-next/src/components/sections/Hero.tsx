"use client";

import { motion } from 'framer-motion';
import { Ocean } from '@/components/canvas/Ocean';
import Link from 'next/link';
import { services } from '@/lib/data';
// import { Card } from '@/components/ui/Card'; // Not used in this file? Wait, I saw Card imported in Services but not Hero.

export function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-slate-900">
            <div className="absolute inset-0 z-0">
                <Ocean />
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight leading-none text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
                >
                    {/* Added drop shadow for better readability against the brighter ocean */}
                    Ocean Park <br />
                    {/* Changed gradient to be brighter/solid if needed, but gradient text usually pops on dark. */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white drop-shadow-none">Digital</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-slate-100 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                >
                    {/* Ensuring text is slate-100 (near white) for readability */}
                    We execute <span className="text-cyan-200 font-medium">creative solutions</span> to help business owners thrive in the digital space.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-4 justify-center items-center"
                >
                    <Link
                        href="mailto:partnerships@oceanparkdigital.com"
                        className="px-8 py-4 rounded-full bg-white text-[#543ab7] font-bold text-lg hover:bg-cyan-50 transition-all shadow-lg hover:scale-105 active:scale-95"
                    >
                        Let's Connect
                    </Link>
                    <Link
                        href="/#services"
                        className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                        Our Services
                    </Link>

                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 pointer-events-none drop-shadow-md"
            >
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
