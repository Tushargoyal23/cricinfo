import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
export default function Navbar(props) {
  const [authtoken, setToken] = useState(null);
  const [userdata, setdata] = useState({});
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        // console.log(decodedToken); // Log the decoded token to the console
        // console.log(decodedToken.user.id);
        // console.log(decodedToken.user.name);
        setdata(decodedToken);
      } catch (error) {
        console.log("Error decoding authToken:", error);
      }
      setToken(authToken);
    }
  }, []);

  return (
    <div id='Navbar'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "100px" }} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h2><i>{props.title}</i></h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/matches">Matches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/players">Players</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fanpage">Fanpage</Link>
              </li>
          
            </ul>
            <div id="user">
              {authtoken ? <div>
                <Link className="nav-link" to="/profile"><h4><img src='https://www.pngitem.com/pimgs/m/146-1468298_profile-icon-white-png-user-icon-ico-transparent.png' alt='' id='icon'></img>{" "}{userdata.user.name}</h4></Link>
              </div> :
                <div>
                  <Link className="nav-link" to="/login">Login</Link>
                  {/* <span className="separator">|</span> */}
                  <Link className="nav-link" to="/createuser">Sign Up</Link>
                </div>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
