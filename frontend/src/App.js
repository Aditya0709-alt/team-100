import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Profile from "./teachers/tprofilepage";
import View_data from "./teacherassistant/view_data";
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <div>
      <div><Navbar /></div>
      <Router>
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
