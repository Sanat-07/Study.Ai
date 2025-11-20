import { ReactNode } from 'react';
import { InteractiveBackground } from './InteractiveBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative text-white">
      <InteractiveBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
