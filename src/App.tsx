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
import { TutorPage } from './pages/TutorPage';
import { ReaderPage } from './pages/ReaderPage';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/auth/LoginPage.tsx';
import { RegisterPage } from './pages/auth/RegisterPage.tsx';
import { EmailVerificationSentPage } from './pages/auth/EmailVerificationSentPage.tsx';
import { PricingPage } from './pages/PricingPage';
import { GoogleOAuthProvider } from "@react-oauth/google";

function AppContent() {
  const location = useLocation();
  const isBookPage = location.pathname.startsWith('/book/');
  const isLandingPage = location.pathname === '/';
  const isAuthPage = ['/login', '/register', '/pricing', '/email-verification-sent'].includes(location.pathname);

  return (
    <Layout>
      {!isBookPage && !isLandingPage && !isAuthPage && <Sidebar />}
      <Routes>
        {/* Redirect root to dashboard */}
        {/* Redirect root to dashboard */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/email-verification-sent" element={<EmailVerificationSentPage />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* Main pages */}
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />

        {/* Book pages */}
        <Route path="/book/:bookId" element={<BookDetailsPage />} />
        <Route path="/book/:bookId/summary" element={<SummaryPage />} />
        <Route path="/book/:bookId/quiz" element={<QuizPage />} />
        <Route path="/book/:bookId/mindmap" element={<MindMapPage />} />
        <Route path="/book/:bookId/chat" element={<TutorPage />} />
        <Route path="/book/:bookId/reader" element={<ReaderPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "mock_client_id_for_development"}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
