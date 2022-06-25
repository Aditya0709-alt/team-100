import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Profile from "./teachers/tprofilepage";
import View_data from "./teacherassistant/view_data";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
