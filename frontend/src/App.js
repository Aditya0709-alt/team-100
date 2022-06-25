import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Profile from "./teachers/tprofilepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
