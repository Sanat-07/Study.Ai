import { ReactNode } from 'react';

interface ActivityCardProps {
    children: ReactNode;
    className?: string;
}

export function ActivityCard({ children, className = '' }: ActivityCardProps) {
    return (
        <div className={`bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative ${className}`}>
            {/* Subtle inner glow/gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10 p-6 md:p-8 h-full">
                {children}
            </div>
        </div>
    );
}
