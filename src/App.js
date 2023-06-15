import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import Signup from "./components/Signup";
import Login from "./components/Login";
import RCB from "./pages/RCB/RCB";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/matches" element={<Matches></Matches>}></Route>
        <Route path="/createuser" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/rcb" element={<RCB></RCB>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
