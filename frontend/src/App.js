import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Profile from "./teachers/tprofilepage";
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";
import Upload from "./teachers/uploads/Upload";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
