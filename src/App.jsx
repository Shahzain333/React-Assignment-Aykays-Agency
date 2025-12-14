import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.45 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Project Name — concise meta title</title>
          <meta name="description" content="Concise project description for SEO." />
          <meta property="og:title" content="Project Name" />
          <meta property="og:description" content="Concise project description." />
        </Helmet>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
    // <div>
    //   <Navbar/>
    //   <HeroSection/>
    //   <Features/>
    //   <About/>
    //   <HowItWork/>
    //   <Donation/>
    //   <Testimonials/>
    //   <Footer/>
    // </div>
  );
}
