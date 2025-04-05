import Navbar from "./components/Navbar";
import { FaBook, FaArrowRight } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";
import { BsChatDotsFill, BsChevronDown } from "react-icons/bs";
import "./App.css";
import Image from "./components/IMG/Image";
import Image1 from "./components/IMG/Image1";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const featuresSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const [showChat, setShowChat] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right, .zoom-in')
      .forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:5000/send-message", {
        phoneNumber,
        message,
      });
      setResponse("Message Sent Successfully!");
    } catch (error) {
      setResponse("Failed to Send Message.");
    }
  };

  return (
    <div className="app-container">
      <Navbar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section">
        <Image />
        <div className="hero-content">
          <h1 className="hero-title slide-up">Welcome to Pet Connect</h1>
          <p className="hero-subtitle fade-in">Your complete solution for pet training and emergency care</p>
          <div className="hero-buttons">
            <button className="primary-btn slide-in-left" onClick={() => scrollToSection(featuresSectionRef)}>
              Explore Services
            </button>
            <button className="secondary-btn slide-in-right" onClick={() => navigate("/about")}>
              About Us
            </button>
          </div>
          <div className="scroll-indicator" onClick={() => scrollToSection(featuresSectionRef)}>
            <span>Scroll Down</span>
            <BsChevronDown className="bounce" />
          </div>
        </div>
      </div>

   
      <div className="features-section" ref={featuresSectionRef}>
        <h2 className="section-title fade-in">Our Services</h2>
        <div className="features-container">
          <div className="feature-card slide-in-left">
            <div className="feature-icon">
              <FaBook />
            </div>
            <h3>Training Guides</h3>
            <p>Explore comprehensive guides to train your pets effectively with scientifically-backed methods</p>
            <button className="feature-btn" onClick={() => navigate("/Train")}>
              Explore Guides <FaArrowRight />
            </button>
          </div>

          <div className="feature-card slide-in-right">
            <div className="feature-icon">
              <RiFirstAidKitFill />
            </div>
            <h3>First Aid Tips</h3>
            <p>Learn essential first aid techniques to handle pet emergencies until veterinary care is available</p>
            <button className="feature-btn" onClick={() => navigate("/pet")}>
              View First Aid <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* About Section with Parallax */}
      <div className="about-section parallax-container" ref={aboutSectionRef}>
        <div className="parallax-background"></div>
        <div className="about-content">
          <h2 className="section-title light fade-in">What is Pet Connect?</h2>
          <p className="about-description slide-up">
            Pet Connect is your all-in-one platform dedicated to enhancing the bond between you and your pet through education, 
            emergency preparedness, and expert guidance. Our mission is to create healthier, happier relationships 
            between pets and their owners through accessible, reliable information.
          </p>
          <button className="learn-more-btn" onClick={() => navigate("/about")}>
            Learn More <span className="globe-icon">&#127757;</span>
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section" ref={testimonialsSectionRef}>
        <h2 className="section-title fade-in">What Pet Owners Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card slide-in-left">
            <div className="testimonial-avatar"><Image1/></div>
            <p>"The training guides helped my rescue dog overcome anxiety in just weeks!"</p>
            <h4>Sarah & Max</h4>
          </div>
          <div className="testimonial-card slide-up">
            <div className="testimonial-avatar"><Image1/></div>
            <p>"The first aid tips saved my cat's life when she had an emergency at night."</p>
            <h4>Michael & Whiskers</h4>
          </div>
          <div className="testimonial-card slide-in-right">
            <div className="testimonial-avatar"><Image1/></div>
            <p>"The personalized advice for my senior dog has made his golden years so much better."</p>
            <h4>Emma & Buddy</h4>
          </div>
        </div>
      </div>

      <button className="chatbot-btn pulse" onClick={() => setShowChat(!showChat)}>
        <BsChatDotsFill size={30} />
      </button>

      {showChat && (
        <div className="chat-popup slide-up">
          <h3>Chat with Pet Connect</h3>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
          <p className="response-message">{response}</p>
          <button className="close-chat" onClick={() => setShowChat(false)}>
            Close
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;