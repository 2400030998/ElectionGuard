import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* ALL SECTIONS SIDE BY SIDE */}
        <div className="footer-sections">
          
          {/* LEFT: ElectionGuard */}
          <div className="footer-left">
            <h2 className="footer-title">🗳️ElectionGuard</h2>
            <p className="footer-tagline">
              Ensuring transparent and fair elections through technology and citizen engagement.
            </p>
          </div>

          {/* MIDDLE: Quick Links & Resources */}
          <div className="footer-middle">
            <div className="links-column">
              <h3 className="column-title">Quick Links</h3>
              <div className="footer-links">
                <div className="link-item">Home</div>
                <div className="link-item">Features</div>
                <div className="link-item">About Us</div>
                <div className="link-item">Contact</div>
              </div>
            </div>
            
            <div className="links-column">
              <h3 className="column-title">Resources</h3>
              <div className="footer-links">
                <div className="link-item">Voter Guides</div>
                <div className="link-item">Election Laws</div>
                <div className="link-item">FAQ</div>
                <div className="link-item">Support</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Connect With Us */}
          <div className="footer-right">
            <h3 className="column-title">Connect With Us</h3>
            <div className="footer-links">
              <div className="link-item">Facebook</div>
              <div className="link-item">Twitter</div>
              <div className="link-item">Instagram</div>
              <div className="link-item">LinkedIn</div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 ElectionGuard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;