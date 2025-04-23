import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import MainLayout from '../components/layout/MainLayout';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MainLayout>
              <PageWrapper><Home /></PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <PageWrapper><About /></PageWrapper>
            </MainLayout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <MainLayout>
              <PageWrapper><Portfolio /></PageWrapper>
            </MainLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// ✨ 페이지 전환용 래퍼
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
