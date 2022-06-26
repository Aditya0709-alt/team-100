import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./screens/Dashboard";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import Home from "./screens/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
