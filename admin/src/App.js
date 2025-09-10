import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  )

}

export default App;
