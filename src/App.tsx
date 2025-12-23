import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home } from './components/Home';
import { Team } from './components/Team';
import { Challenge } from './components/Challenge';
import { Product } from './components/Product';
import { Integration } from './components/Integration';
import { ChemistrySoil } from './components/ChemistrySoil';
import { Mathematics } from './components/Mathematics';
import { Physics } from './components/Physics';
import { Acknowledgement } from './components/Acknowledgement';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'The Team' },
    { path: '/challenge', label: 'Challenge & Solution' },
    { path: '/product', label: 'Product' },
    { path: '/integration', label: 'Scientific Foundations' },
    { path: '/acknowledgement', label: 'Credits' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <img 
                src="https://drive.google.com/uc?export=view&id=1YMvf8Lm1SWfRrVk_iYFDB6-3jaZqmyVE" 
                alt="AgriCore Dynamics Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="text-gray-900">AgriCore Dynamics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-all duration-200 relative group ${
                  isActive(item.path)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
                {!isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white">AC</span>
              </div>
              <span>AgriCore Dynamics</span>
            </div>
            <p className="text-gray-400">
              ISPC Project 2025
            </p>
          </div>
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors duration-200">The Team</Link></li>
              <li><Link to="/product" className="hover:text-white transition-colors duration-200">Product</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: ispc.agricoredynamics@snk.edu
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 AgriCore Dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.95 }}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <NavBar />
        <PageTransition>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/challenge" element={<Challenge />} />
              <Route path="/product" element={<Product />} />
              <Route path="/integration" element={<Integration />} />
              <Route path="/integration/chemistry" element={<ChemistrySoil />} />
              <Route path="/integration/mathematics" element={<Mathematics />} />
              <Route path="/integration/physics" element={<Physics />} />
              <Route path="/acknowledgement" element={<Acknowledgement />} />
            </Routes>
          </main>
        </PageTransition>
        <Footer />
      </div>
    </Router>
  );
}
