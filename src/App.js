import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Playerinfo from "./components/playerinfo/Playerinfo";
import Details from "./components/userdetails/Details";
import Players from "./pages/Players/Players";
import Profile from "./pages/Profile/Profile";
import Fanpage from "./components/fanpage/Fanpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/matches" element={<Matches></Matches>}></Route>
        <Route path="/createuser" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/players" element={<Players></Players>}></Route>
        <Route path="/playersinfo/:id" element={<Playerinfo></Playerinfo>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/editprofile" element={<Details></Details>}></Route>
        <Route path="/fanpage" element={<Fanpage></Fanpage>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
