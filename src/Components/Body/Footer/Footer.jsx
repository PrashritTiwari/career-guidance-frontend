import { useState } from 'react';
import './Footer.css';

const Footer = () => {
 
  const [formData, setFormData] = useState({ email: '', message: '', rating: 0 });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  
  const [contactData, setContactData] = useState({ first: '', last: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (rate) => {
    setFormData(prev => ({ ...prev, rating: rate }));
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setFormData({ email: '', message: '', rating: 0 });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setContactData({ first: '', last: '', email: '', message: '' });
  };

  return (
    <footer className="footer-container">
      <h2 className="footer-heading">Let Us Hear From You</h2>

      <div className="footer-card-wrapper">
        {}
        <div className="footer-card">
          <h3>Contact Us</h3>
          {contactSubmitted ? (
            <div className="footer-thankyou animate-fade-in">
             
              <p>Thanks! We'll be in touch.</p>
            </div>
          ) : (
            <form className="footer-form animate-slide-up" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <input type="text" name="first" placeholder="First Name" value={contactData.first} onChange={handleContactChange} required />
                <input type="text" name="last" placeholder="Last Name" value={contactData.last} onChange={handleContactChange} required />
              </div>
              <input type="email" name="email" placeholder="Email" value={contactData.email} onChange={handleContactChange} required />
              <textarea name="message" rows="4" placeholder="Your Message" value={contactData.message} onChange={handleContactChange} required />
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>

        {}
        <div className="footer-card">
          <h3>Feedback Us</h3>
          {feedbackSubmitted ? (
            <div className="footer-thankyou animate-fade-in">
              
              <p>We appreciate your feedback!</p>
            </div>
          ) : (
            <form className="footer-form animate-slide-up" onSubmit={handleFeedbackSubmit}>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFeedbackChange} required />
              <textarea name="message" rows="4" placeholder="What can we improve?" value={formData.message} onChange={handleFeedbackChange} required />
              <div className="rating-section">
                <label>Rate this page:</label>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${formData.rating >= star ? 'active' : ''}`}
                      onClick={() => handleRating(star)}
                    >⭐</span>
                  ))}
                </div>
              </div>
              <button type="submit" className="submit-btn">Submit Feedback</button>
            </form>
          )}
        </div>
      </div>

      <p className="footer-credits">© {new Date().getFullYear()} Career Guidance. All rights reserved.</p>
    </footer>
  );
};

export default Footer;