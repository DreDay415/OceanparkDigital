import React, { useEffect, useState } from 'react';
import { ToggleLeft, ToggleRight, Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'ocean' | 'cyberpunk'>('ocean');

    useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') as 'ocean' | 'cyberpunk' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('cyberpunk', savedTheme === 'cyberpunk');
        } else {
            // Default to ocean
            setTheme('ocean');
            document.documentElement.classList.toggle('cyberpunk', false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'ocean' ? 'cyberpunk' : 'ocean';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('cyberpunk', newTheme === 'cyberpunk');
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/5 backdrop-blur-md text-sm font-medium text-white group"
            aria-label="Toggle theme"
        >
            <span className={`text-[10px] uppercase tracking-wider ${theme === 'ocean' ? 'text-cyan-300' : 'text-slate-400'}`}>Ocean</span>

            <div className="relative w-8 h-4 bg-slate-900 rounded-full border border-white/10 flex items-center px-0.5">
                <div
                    className={`w-3 h-3 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50 transition-all duration-300 ${theme === 'cyberpunk' ? 'translate-x-4 bg-purple-500 shadow-purple-500/50' : 'translate-x-0'}`}
                />
            </div>

            <span className={`text-[10px] uppercase tracking-wider ${theme === 'cyberpunk' ? 'text-purple-300' : 'text-slate-400'}`}>Cyber</span>
        </button>
    );
}
