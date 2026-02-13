import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

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
        <div className="relative group p-1">
            <button
                onClick={toggleTheme}
                className={`
                    relative flex items-center gap-1.5 px-4 py-2 
                    font-mono transition-all duration-300
                    before:absolute before:inset-0 before:bg-white/5 before:-z-10
                    ${theme === 'cyberpunk'
                        ? 'text-pink-500 border-l-4 border-l-pink-500 bg-pink-500/10'
                        : 'text-cyan-400 border-l-4 border-l-cyan-400 bg-cyan-400/5'}
                `}
                style={{
                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                }}
                aria-label="Toggle theme"
            >
                <div className="flex flex-col items-start leading-none gap-0.5">
                    <span className="text-[9px] uppercase tracking-[0.2em] opacity-50 font-bold">System Theme</span>
                    <span className="text-xs font-black tracking-widest uppercase">
                        {theme === 'ocean' ? 'Ocean_OS v1.0' : 'Cyber_NET v2.4'}
                    </span>
                </div>

                <div className="ml-4 flex items-center justify-center p-1.5 rounded-sm bg-black/40 border border-white/10 group-hover:border-white/30 transition-colors">
                    {theme === 'ocean' ? (
                        <Sun className="w-4 h-4 text-cyan-400 animate-pulse" />
                    ) : (
                        <Moon className="w-4 h-4 text-pink-500 animate-pulse" />
                    )}
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-0 right-2 w-1 h-3 ${theme === 'cyberpunk' ? 'bg-pink-500/50' : 'bg-cyan-400/50'}`} />
                <div className={`absolute bottom-0 left-4 w-6 h-[1px] ${theme === 'cyberpunk' ? 'bg-pink-500/50' : 'bg-cyan-400/50'}`} />
            </button>

            {/* Background Glow */}
            <div className={`
                absolute -inset-1 -z-20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500
                ${theme === 'cyberpunk' ? 'bg-pink-500' : 'bg-cyan-400'}
            `} />
        </div>
    );
}
