import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

function AppContent() {
  const location = useLocation();
  const isBookPage = location.pathname.startsWith('/book/');

  return (
    <Layout>
      {!isBookPage && <Sidebar />}
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
