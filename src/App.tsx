import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { UploadPage } from './pages/UploadPage';
import { LibraryPage } from './pages/LibraryPage';
import { ProgressPage } from './pages/ProgressPage';
import { ProfilePage } from './pages/ProfilePage';
import QuizPage from './pages/QuizPage';
import MindMapPage from './pages/MindMapPage';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/auth/LoginPage.tsx';
import { RegisterPage } from './pages/auth/RegisterPage.tsx';
import { EmailVerificationSentPage } from './pages/auth/EmailVerificationSentPage.tsx';
import { PricingPage } from './pages/PricingPage';
import FlashcardPage from './pages/FlashcardPage';
import NotesPage from './pages/NotesPage';
import { FillBlanksPage } from './pages/FillBlanksPage';
import { WrittenTestPage } from './pages/WrittenTestPage';
import { StatisticsPage } from './pages/StatisticsPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ResourcesPage } from './pages/ResourcesPage';


function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

import { StudySidebar } from './components/study/StudySidebar';

// ... imports remain the same

function AppContent() {
  const location = useLocation();
  const isBookPage = location.pathname.startsWith('/book/');
  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/login', '/register', '/pricing', '/email-verification-sent', '/features', '/resources', '/how-it-works'].includes(location.pathname);

  return (
    <Layout>
      {!isLandingPage && !isAuthPage && (
        isBookPage ? <StudySidebar /> : <Sidebar />
      )}
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/email-verification-sent" element={<EmailVerificationSentPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<PageTransition><FeaturesPage /></PageTransition>} />
        <Route path="/how-it-works" element={<PageTransition><HowItWorksPage /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} />

        {/* Main pages */}
        <Route path="/upload" element={<PageTransition><UploadPage /></PageTransition>} />

        <Route path="/library" element={<PageTransition><LibraryPage /></PageTransition>} />
        <Route path="/dashboard" element={<Navigate to="/library" replace />} />

        <Route path="/progress" element={<PageTransition><ProgressPage /></PageTransition>} />
        <Route path="/progress" element={<PageTransition><ProgressPage /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><ProfilePage /></PageTransition>} />
        <Route path="/statistics" element={<PageTransition><StatisticsPage /></PageTransition>} />

        <Route path="/flashcards-mode" element={<PageTransition><FlashcardPage /></PageTransition>} />
        <Route path="/notes-mode" element={<PageTransition><NotesPage /></PageTransition>} />

        {/* Book pages */}
        <Route path="/book/:bookId" element={<Navigate to="quiz" replace />} />


        <Route path="/book/:bookId/quiz" element={<QuizPage />} />
        <Route path="/book/:bookId/mindmap" element={<MindMapPage />} />
        <Route path="/book/:bookId/flashcards" element={<FlashcardPage />} />
        <Route path="/book/:bookId/open-questions" element={<WrittenTestPage />} />

        <Route path="/book/:bookId/notes-mode" element={<NotesPage />} />
        <Route path="/book/:bookId/fill-blanks" element={<FillBlanksPage />} />
        <Route path="/book/:bookId/statistics" element={<StatisticsPage />} />
        <Route path="/book/:bookId/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
