import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import CvPage from './Pages/CvPage';
import ScrollToTop from './Components/ScrollToTop';

// Importiamo la configurazione delle lingue!
import './i18n';

// Inizializziamo Google Analytics 4 con il tuo ID di misurazione
ReactGA.initialize('G-2H7GB7HGFH');

// Componente per tracciare i cambi di pagina
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Tracciamo il percorso completo includendo pathname, search query ed eventuale hash
    const pagePath = location.pathname + location.search + location.hash;
    ReactGA.send({
      hitType: 'pageview',
      page: pagePath,
      title: document.title || 'Portfolio'
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      {/* Sfondo principale dell'app */}
      <div className="min-h-screen bg-dark w-full font-sans selection:bg-primary/30 selection:text-primary">
        <Sidebar />
        <Header />
        
        {/* Il main assorbe lo spazio lasciato dalla Sidebar fissa */}
        <main className="w-full relative min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cv" element={<CvPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
