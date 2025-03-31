import React, { useState } from 'react';
import './Home.css';
import { FaDog, FaSearch, FaDonate, FaFirstAid, FaBell, FaPaw, FaUserCircle } from 'react-icons/fa';

const Home = () => {
  const [activeSection, setActiveSection] = useState('featured');

  return (
    <div className="home-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo">
          <FaPaw size={24} />
          <h1>PetConnect</h1>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="user-actions">
          <button className="notification-btn">
            <FaBell />
          </button>
          <button className="user-btn">
            <FaUserCircle />
            <span>Sign In</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Connecting Pets with Loving Communities</h1>
          <p>Find resources, report lost pets, donate to shelters, and learn pet care skills all in one place.</p>
          <div className="search-container">
            <input type="text" placeholder="Search for pets, resources, or guides..." />
            <button className="search-btn"><FaSearch /></button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="features-section">
        <h2>Our Services</h2>
        <div className="feature-cards">
          {/* Pet Profile Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <FaDog />
            </div>
            <h3>Pet Profiles</h3>
            <p>Create and manage detailed pet profiles with medical history, vaccination records, and more.</p>
            <button className="feature-btn">Manage Pets</button>
          </div>

          {/* Lost & Found Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <FaSearch />
            </div>
            <h3>Lost & Found</h3>
            <p>Report lost pets, browse found pet listings, or help reunite pets with their families.</p>
            <button className="feature-btn">Report Lost Pet</button>
          </div>

          {/* Donations Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <FaDonate />
            </div>
            <h3>Donations</h3>
            <p>Support shelters and animals in need through monetary donations or supplies.</p>
            <button className="feature-btn">Donate Now</button>
          </div>

          {/* Training & First Aid Feature */}
          <div className="feature-card">
            <div className="feature-icon">
              <FaFirstAid />
            </div>
            <h3>Training & First Aid</h3>
            <p>Access expert-approved guides for pet training and emergency care.</p>
            <button className="feature-btn">View Guides</button>
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section className="content-section">
        <div className="tabs">
          <button 
            className={activeSection === 'featured' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveSection('featured')}
          >
            Featured Pets
          </button>
          <button 
            className={activeSection === 'recent' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveSection('recent')}
          >
            Recent Lost Pets
          </button>
          <button 
            className={activeSection === 'campaigns' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveSection('campaigns')}
          >
            Donation Campaigns
          </button>
          <button 
            className={activeSection === 'guides' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveSection('guides')}
          >
            Popular Guides
          </button>
        </div>

        <div className="tab-content">
          {activeSection === 'featured' && (
            <div className="pet-grid">
              {/* Sample Pet Cards - would be dynamically generated */}
              {[1, 2, 3, 4].map(pet => (
                <div key={pet} className="pet-card">
                  <div className="pet-image"></div>
                  <div className="pet-info">
                    <h4>Pet Name</h4>
                    <p>Breed • Age • Gender</p>
                    <span className="shelter-name">Happy Paws Shelter</span>
                    <button className="view-profile-btn">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeSection === 'recent' && (
            <div className="lost-pet-grid">
              {/* Sample Lost Pet Listings */}
              {[1, 2, 3, 4].map(pet => (
                <div key={pet} className="lost-pet-card">
                  <div className="pet-image"></div>
                  <div className="pet-status">Lost</div>
                  <div className="pet-info">
                    <h4>Pet Name</h4>
                    <p>Missing since: March 28, 2025</p>
                    <p>Location: Downtown Area</p>
                    <button className="contact-btn">Contact Owner</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeSection === 'campaigns' && (
            <div className="campaign-grid">
              {/* Sample Donation Campaigns */}
              {[1, 2, 3].map(campaign => (
                <div key={campaign} className="campaign-card">
                  <div className="campaign-image"></div>
                  <div className="campaign-info">
                    <h4>Emergency Medical Fund</h4>
                    <div className="progress-container">
                      <div className="progress-bar" style={{width: '65%'}}></div>
                    </div>
                    <div className="campaign-stats">
                      <span>$6,500 raised of $10,000</span>
                      <span>18 days left</span>
                    </div>
                    <button className="donate-btn">Donate</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeSection === 'guides' && (
            <div className="guides-grid">
              {/* Sample Training Guides */}
              {[1, 2, 3, 4].map(guide => (
                <div key={guide} className="guide-card">
                  <div className="guide-image"></div>
                  <div className="guide-info">
                    <span className="guide-category">Training</span>
                    <h4>Basic Commands for Puppies</h4>
                    <p>Learn how to teach your new puppy essential commands in 5 easy steps.</p>
                    <button className="read-guide-btn">Read Guide</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Join Our Community Today</h2>
          <p>Create an account to access all features and help build a better world for our furry friends.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Sign Up</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PetConnect</h3>
            <p>Connecting pets with loving communities since 2025.</p>
            <div className="social-icons">
              {/* Social media icons would go here */}
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#profiles">Pet Profiles</a></li>
              <li><a href="#lost">Lost & Found</a></li>
              <li><a href="#donate">Donations</a></li>
              <li><a href="#training">Training & First Aid</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 PetConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;