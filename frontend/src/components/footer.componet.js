import React, { useState, useEffect } from 'react';
import '../style/home.css'; // Make sure to import your CSS file

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Detect scrolling and show/hide button
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('myBtn');
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="footer">
        <img src='logo\logo_without_bg.png' alt="" />
        <p>Copyright © AlphaDevs</p>
      </div>

      {/* Scroll-to-top button */}
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        id="myBtn"
        title="Go to top"
      >
        ▲
      </button>
    </div>
  );
};

export default Footer;
