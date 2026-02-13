"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-white/5 py-12 text-slate-400">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Ocean Park Digital</h3>
                        <p className="text-sm">Digital growth solutions for ambitious brands.</p>
                    </div>

                    <div className="flex gap-8">
                        <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
                        <Link href="mailto:partnerships@oceanparkdigital.com" className="hover:text-cyan-400 transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-600">
                    &copy; {new Date().getFullYear()} Ocean Park Digital. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
