import { HashRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import ScrollToTop from './Components/ScrollToTop';

// Importiamo la configurazione delle lingue!
import './i18n';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      {/* Sfondo principale dell'app */}
      <div className="min-h-screen bg-dark w-full font-sans selection:bg-primary/30 selection:text-primary">
        <Sidebar />
        <Header />
        
        {/* Il main assorbe lo spazio lasciato dalla Sidebar fissa (w-64 = 16rem o 256px) */}
        <main className="w-full relative min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Pagine Placeholders per farti vedere come naviga la Sidebar */}
            
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
