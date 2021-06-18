import React from 'react'
import imgArrow from '../assets/images/arrow-red.svg';

const Footer = () => {
  return (
    <footer>
      <p className="footer-header">Let's have a chat</p>
      <section className="footer-trust">
        <div className="footer-trust-item">
          <div className="footer-trust-item-head">Build<img src={imgArrow} width="16" height="18"/></div>
          <div className="footer-trust-item-tagline">Help you build something</div>
        </div>
        <div className="footer-trust-item">
          <div className="footer-trust-item-head">Co-incubate<img src={imgArrow} width="16" height="18"/></div>
          <div className="footer-trust-item-tagline">Help you build something</div>
        </div>
        <div className="footer-trust-item">
          <div className="footer-trust-item-head">Customise<img src={imgArrow} width="16" height="18"/></div>
          <div className="footer-trust-item-tagline">Customize a solution for your business</div>
        </div>
        <div className="footer-trust-item">
          <div className="footer-trust-item-head">Organize<img src={imgArrow} width="16" height="18"/></div>
          <div className="footer-trust-item-tagline">Organise learning sessions with us</div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
