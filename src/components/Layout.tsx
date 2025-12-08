import { ReactNode } from 'react';
import { InteractiveBackground } from './InteractiveBackground';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Check if we should show the main sidebar (vs book mode)
  // This logic is mirrored from App.tsx - ideally should be passed via context or props, 
  // but for now we infer it to set the correct padding.
  const isBookPage = location.pathname.startsWith('/book/');
  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/login', '/register', '/pricing', '/email-verification-sent'].includes(location.pathname);

  const showSidebar = !isLandingPage && !isAuthPage;

  return (
    <div className="min-h-screen relative text-white bg-slate-950 font-sans selection:bg-blue-500/30">
      <InteractiveBackground />

      <div className={`relative z-10 min-h-screen flex flex-col transition-all duration-300 ${showSidebar ? 'pl-20 lg:pl-64' : ''
        }`}>
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
