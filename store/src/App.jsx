import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Filter from './pages/Filter';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Cart from './pages/Cart';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="bg-neutral-800 min-h-screen text-white">
        <Navbar />
        <div className="pt-16"> {/* Add padding top to ensure content doesn't hide under the Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/games/:gameName" element={<Games />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<PaymentPage />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
