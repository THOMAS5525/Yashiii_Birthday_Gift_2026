import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import AboutJayPage from './pages/AboutJayPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import BirthdayMessagePage from './pages/BirthdayMessagePage.jsx';
import CelebratePage from './pages/CelebratePage.jsx';
import GiftPage from './pages/GiftPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutJayPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/message" element={<BirthdayMessagePage />} />
        <Route path="/celebrate" element={<CelebratePage />} />
        <Route path="/gift" element={<GiftPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;