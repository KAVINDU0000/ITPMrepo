import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes,Route } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Trainpage from "./Pages/Trainpage.jsx";
import Firstaidpage from "./Pages/Firstaidpage.jsx";
import Adminpanel from "./Pages/Adminpanel.jsx";
import Home from "./Pages/Home.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/Train" element={<Trainpage />} />
        <Route path="/Firstaid" element={<Firstaidpage />} />
        <Route path="/adminpanel" element={<Adminpanel/>} />
        <Route path="/Home" element={<Home/>} />
      
     </Routes>

    </BrowserRouter>
  </StrictMode>
);
