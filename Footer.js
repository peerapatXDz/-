// Footer.js (หรือแทรกในไฟล์ component ที่เหมาะสม)
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '10px 0',
      fontSize: '14px',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.3)'
    }}>
      <div>
        ติดต่อเจ้าของเว็บ: <a href="mailto:owner@example.com" style={{color: '#4CAF50', textDecoration: 'none'}}>owner@example.com</a> | เบอร์โทร: 012-345-6789
      </div>
      <div>
        Facebook: <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" style={{color: '#4CAF50'}}>facebook.com/yourpage</a>
      </div>
    </footer>
  );
};

export default Footer;


import Footer from './Footer';

function App() {
  return (
    <div>
      {/* ส่วนอื่นของเว็บ */}
      <Footer />
    </div>
  );
}
