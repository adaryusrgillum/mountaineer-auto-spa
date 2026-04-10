import React, { useState, useEffect } from 'react';
import { Droplets, Sparkles, MapPin, Clock, Phone, ChevronRight, Shield, Menu, X } from 'lucide-react';
import heroImg from './assets/hero.png';
import logoImg from './assets/logo.png';
import serviceImg from './assets/service.png';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo-container" onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>
            <img src={logoImg} alt="Mountaineer Auto Spa Logo" className="logo-img" />
            <span className="logo-text">MOUNTAINEER <span className="text-gradient">AUTO SPA</span></span>
          </div>
          
          <ul className="nav-links desktop-links">
            <li><button className="nav-btn" onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className="nav-btn" onClick={() => scrollToSection('services')}>Services</button></li>
            <li><button className="nav-btn" onClick={() => scrollToSection('location')}>Location</button></li>
            <li><button className="btn-primary" style={{padding: '0.5rem 1.5rem', fontSize: '0.9rem'}}>Book Now</button></li>
          </ul>

          <button className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('location')}>Location</button></li>
          <li><button className="btn-primary" style={{marginTop: '1rem'}}>Book Now</button></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="Luxury Car Wash Tunnel" />
        </div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content animate-fade-in">
            <div className="hero-badge">Morgantown's Premier Wash</div>
            <h1>Experience the <span className="text-gradient">Ultimate Glow.</span></h1>
            <p>State-of-the-art tunnel technology meets meticulous hand-finishing. We treat your vehicle to a premium spa experience right here in Morgantown, WV.</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollToSection('services')}>View Wash Packages <ChevronRight size={18} style={{display:'inline', verticalAlign:'middle', marginLeft:'5px'}}/></button>
              <button className="btn-secondary">Join Unlimited Club</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <h2 className="section-title">Our <span className="text-gradient">Signature Services</span></h2>
          <p className="section-subtitle">From a quick exterior shine to a complete ultimate detailing, we have the perfect package to make your ride stand out.</p>
          
          <div className="services-grid">
            <div className="service-card glass-panel animate-fade-in animate-delay-1">
              <div className="service-icon"><Droplets size={32} /></div>
              <h3>Express Wash</h3>
              <p>A quick, brilliant clean featuring soft-cloth technology, spot-free rinse, and high-velocity air dry. In and out in 3 minutes.</p>
              <div className="service-price">$12 <span>/ wash</span></div>
              <button className="btn-secondary" style={{marginTop: '1.5rem', width: '100%'}}>Select Package</button>
            </div>
            
            <div className="service-card glass-panel animate-fade-in animate-delay-2" style={{transform: 'translateY(-10px)', borderColor: 'var(--accent-blue)', boxShadow: '0 0 20px rgba(0, 210, 255, 0.1)'}}>
              <div className="service-icon" style={{background: 'var(--gradient-neon)', color: 'white'}}><Sparkles size={32} /></div>
              <h3>Mountaineer Ceramic</h3>
              <p>Our most popular package. Includes triple foam polish, clear coat protectant, tire shine, and a ceramic seal for lasting gloss.</p>
              <div className="service-price">$25 <span>/ wash</span></div>
              <button className="btn-primary" style={{marginTop: '1.5rem', width: '100%'}}>Most Popular</button>
            </div>

            <div className="service-card glass-panel animate-fade-in animate-delay-3">
              <div className="service-icon"><Shield size={32} /></div>
              <h3>Ultimate Detail</h3>
              <p>The full inside-out treatment. Hands-on interior vacuum, dash conditioning, glass cleaning, and premium exterior wax.</p>
              <div className="service-price">$55 <span>/ wash</span></div>
              <button className="btn-secondary" style={{marginTop: '1.5rem', width: '100%'}}>Select Package</button>
            </div>
          </div>

          <div className="service-img-container glass-panel">
            <img src={serviceImg} alt="Auto Detailing Service" />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section-padding location-section">
        <div className="location-bg-glow"></div>
        <div className="container location-content">
          <div className="location-info glass-panel" style={{padding: '3rem'}}>
            <h2>Visit Us in <span className="text-gradient">Morgantown</span></h2>
            <div className="location-details">
              <div className="detail-item">
                <div className="detail-icon"><MapPin size={24} /></div>
                <div className="detail-text">
                  <h4>Address</h4>
                  <p>123 Mountaineer Drive<br/>Morgantown, WV 26505</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><Clock size={24} /></div>
                <div className="detail-text">
                  <h4>Hours</h4>
                  <p>Mon - Sat: 7:00 AM - 8:00 PM<br/>Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><Phone size={24} /></div>
                <div className="detail-text">
                  <h4>Contact</h4>
                  <p>(304) 555-WASH<br/>hello@mountaineerautospa.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-80.0!3d39.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88357b98f2195f2d%3A0x6e0eacd76cd3b8ee!2sMorgantown%2C%20WV!5e0!3m2!1sen!2sus!4v1614000000000!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-container" onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>
                <img src={logoImg} alt="Mountaineer Auto Spa Logo" className="logo-img" style={{height: '40px'}}/>
                <span className="logo-text" style={{fontSize: '1.2rem'}}>MOUNTAINEER <span className="text-gradient">AUTO SPA</span></span>
              </div>
              <p>Morgantown's premier destination for luxury car washing and detailing. Experience the difference of our state-of-the-art tunnel and unmatched customer service.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><button className="nav-btn" onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button className="nav-btn" onClick={() => scrollToSection('services')}>Wash Packages</button></li>
                <li><button className="nav-btn">Unlimited Club</button></li>
                <li><button className="nav-btn">Fleet Accounts</button></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><button className="nav-btn" onClick={() => scrollToSection('location')}>Location</button></li>
                <li><button className="nav-btn">About Us</button></li>
                <li><button className="nav-btn">Careers</button></li>
                <li><button className="nav-btn">Contact</button></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Mountaineer Auto Spa. All rights reserved. Morgantown, WV.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
