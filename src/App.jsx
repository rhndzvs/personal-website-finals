import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Support from './pages/Support';
import { ThemeProvider } from './context/ThemeContext';
import { FeedbackProvider } from './context/FeedbackContext';
import './assets/css/style.css';

// Create a wrapper component to conditionally render the footer
const AppContent = () => {
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial state based on current scroll position
    if (window.scrollY > 100) {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.add('sticky');
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <Router>
          <AppContent />
        </Router>
      </FeedbackProvider>
    </ThemeProvider>
  );
}

export default App; 