import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { UploadPage } from './pages/UploadPage';
import { DashboardPage } from './pages/DashboardPage';
import { LibraryPage } from './pages/LibraryPage';
import { ProgressPage } from './pages/ProgressPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { BookDetailsPage } from './pages/BookDetailsPage';
import { SummaryPage } from './pages/SummaryPage';
import { QuizPage } from './pages/QuizPage';
import { MindMapPage } from './pages/MindMapPage';
import { ReaderPage } from './pages/ReaderPage';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/auth/LoginPage.tsx';
import { RegisterPage } from './pages/auth/RegisterPage.tsx';
import { EmailVerificationSentPage } from './pages/auth/EmailVerificationSentPage.tsx';
import { PricingPage } from './pages/PricingPage';
import { FlashcardPage } from './pages/FlashcardPage';
import { NotesPage } from './pages/NotesPage';
import { FillBlanksPage } from './pages/FillBlanksPage';
import { WrittenTestPage } from './pages/WrittenTestPage';

import { StatisticsPage } from './pages/StatisticsPage';
import { AnimatePresence, motion } from 'framer-motion';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

import { StudySidebar } from './components/study/StudySidebar';

// ... imports remain the same

function AppContent() {
  const location = useLocation();
  const isBookPage = location.pathname.startsWith('/book/');
  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/login', '/register', '/pricing', '/email-verification-sent'].includes(location.pathname);

  return (
    <Layout>
      {!isLandingPage && !isAuthPage && (
        isBookPage ? <StudySidebar /> : <Sidebar />
      )}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/email-verification-sent" element={<EmailVerificationSentPage />} />
          <Route path="/pricing" element={<PricingPage />} />

          {/* Main pages */}
          <Route path="/upload" element={<PageTransition><UploadPage /></PageTransition>} />
          <Route path="/dashboard" element={<PageTransition><DashboardPage /></PageTransition>} />
          <Route path="/library" element={<PageTransition><LibraryPage /></PageTransition>} />
          <Route path="/progress" element={<PageTransition><ProgressPage /></PageTransition>} />
          <Route path="/profile" element={<PageTransition><ProfilePage /></PageTransition>} />
          <Route path="/settings" element={<PageTransition><SettingsPage /></PageTransition>} />
          <Route path="/flashcards-mode" element={<PageTransition><FlashcardPage /></PageTransition>} />
          <Route path="/notes-mode" element={<PageTransition><NotesPage /></PageTransition>} />

          {/* Book pages */}
          <Route path="/book/:bookId" element={<BookDetailsPage />} />
          <Route path="/book/:bookId/summary" element={<SummaryPage />} />
          <Route path="/book/:bookId/quiz" element={<QuizPage />} />
          <Route path="/book/:bookId/mindmap" element={<MindMapPage />} />
          <Route path="/book/:bookId/reader" element={<ReaderPage />} />
          <Route path="/book/:bookId/study" element={<FlashcardPage />} />


          // ... existing imports ...


          <Route path="/book/:bookId/notes-mode" element={<NotesPage />} />
          <Route path="/book/:bookId/fill-blanks" element={<FillBlanksPage />} />
          <Route path="/book/:bookId/written-test" element={<WrittenTestPage />} />
          <Route path="/book/:bookId/statistics" element={<StatisticsPage />} />
          <Route path="/book/:bookId/profile" element={<ProfilePage />} />
        </Routes>
      </AnimatePresence>
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
