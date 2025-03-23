import Navbar from "./components/Navbar";
import { FaBook } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";
import "./App.css";
import Image from "./components/IMG/Image";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BsChatDotsFill } from "react-icons/bs";

function App() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [showChat, setShowChat] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

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
    <>
      <Navbar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </Navbar>

      <Image />

      <div className="container">
        <button className="btn1" onClick={() => navigate("/Train")}>
          <FaBook size={50} style={{ color: "red" }} />
          <h2>Training Guides</h2>
          <p>Explore comprehensive guides to train your pets effectively</p>
        </button>

        <button className="btn2" onClick={() => navigate("/Firstaid")}>
          <RiFirstAidKitFill size={50} style={{ color: "red" }} />
          <h2>First Aid Tips</h2>
          <p>Learn essential first aid tips to keep your pets safe</p>
        </button>
      </div>

      <div ref={sectionRef} className="container2">
        <img src="pic1.avif" className="pic2" alt="Pet Training" />
        <h1 className="he font1">
          Welcome to Pet Training & First Aid on Pet Connect! Find personalized
          training guides and emergency first aid tips tailored to your pet’s
          breed, age, and health needs. Stay prepared with expert advice to
          ensure the best care for your furry friend.
        </h1>
      </div>

      <div className="block">
        <img src="pic2.png" className="pic" alt="Project Image" />
        <h3 className="title">What is Pet Connect?</h3>
        <button className="learn-more-btn">Learn More &#127757;</button>
      </div>

      {/* Chatbot Button */}
      <button className="chatbot-btn" onClick={() => setShowChat(!showChat)}>
        <BsChatDotsFill size={40} />
      </button>

      {/* Chatbot Popup */}
      {showChat && (
        <div className="chat-popup">
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
          <button onClick={sendMessage}>Send</button>
          <p>{response}</p>
          <button className="close-chat" onClick={() => setShowChat(false)}>
            Close
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
