import { useState } from 'react';
import Swal from 'sweetalert2';
import '../assets/sass/footer.scss';
import logo from '../assets/images/logo-footer-sidearea.png';
import backgroundImage from '../assets/images/footer-top-img-1.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError('The field is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('The e-mail address entered is invalid.');
      return;
    }

    // SweetAlert2 klassik formatda
    Swal.fire({
      title: "Subscribed!",
      text: "Thank you for subscribing to our newsletter.",
      icon: "success"
    });

    setEmail('');
    setError('');
  };

  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="footer-overlay">
        <img src={logo} alt="Corretto Logo" className="footer-logo" />
<p className="footer-title">CORRETTO</p>
        <p className="footer-description">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris.”
        </p>

        <div className="footer-locations">
          <h3>STORES</h3>
          <p>Dunsmuir Ave, Los Angeles, CA 90036, USA</p>
          <p>Atkins Ave, Brooklyn, NY 11208, USA</p>
        </div>

        <div className="footer-newsletter">
          <h3>NEWS AS FRESH AS OUR COFFEE</h3>
          <div className="newsletter-input">
            <input
              type="email"
              className={error ? 'input-error' : ''}
              placeholder="Your E-mail Address..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
            />
            <button onClick={handleSubscribe}>
              <i className="fas fa-envelope"></i>
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Footer;
