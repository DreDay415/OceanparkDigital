"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils'; // Not strictly used here but good practice

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight hover:text-cyan-400 transition-colors text-white font-display">
                    Ocean Park <span className="text-cyan-400">Digital</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link>
                    <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Blog</Link>
                    <Link
                        href="mailto:partnerships@oceanparkdigital.com"
                        className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-all hover:scale-105 active:scale-95 text-sm font-semibold backdrop-blur-sm"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
                >
                    <Link href="/#services" onClick={() => setIsOpen(false)} className="text-lg text-white font-medium">Services</Link>
                    <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg text-white font-medium">Blog</Link>
                    <Link href="mailto:partnerships@oceanparkdigital.com" onClick={() => setIsOpen(false)} className="px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-center rounded-lg font-bold shadow-lg">Get Started</Link>
                </motion.div>
            )}
        </motion.header>
    );
}
