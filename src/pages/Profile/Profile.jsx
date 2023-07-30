import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './profile.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import jwtDecode from 'jwt-decode';
export default function Profile() {
  const [userdetail, setdetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        try {
          const decodedToken = jwtDecode(authToken);
          setdetails(decodedToken);
        } catch (error) {
          console.log('Error decoding authToken:', error);
        }
      }
    };

    fetchData();
  }, []);


    const [userdata, setdata] = useState({});
    useEffect(() => {
        const fetchData = async () => {
          if (userdetail.user) {
            const id = userdetail.user.id;
            try {
              const response = await fetch('http://localhost:5000/api/userdata', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
    
              if (response.ok) {
                const data = await response.json();
                const user = data[0].find((user) => user._id === id);
                if (user) {
                  setdata(user);
                } else {
                  console.log('User not found');
                }
              } else {
                console.log('Error:', response.status);
              }
            } catch (error) {
              console.error(error);
            }
          }
        };
    
        fetchData();
      }, [userdetail]);


    // console.log(userdata);

    const navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }




    return (
        <div id='procss'>
            <div>
                <Navbar title='CricInfo'></Navbar>
            </div>
            <div id='logout'>
                <button className='btn btn-danger' onClick={handlelogout}>logout</button>
            </div>
            <div className='row'>
                <div id='perdet'>
                    <div id='headi'>
                        <h4>Personal details</h4>
                    </div>
                    <hr id='norms'></hr>
                    <div id='cricketinfo'>
                        Name : {userdata.name}<br></br>
                        Age  : {userdata.age ? userdata.age : ''}<br></br>
                        Country : {userdata.location}<br></br>
                        Type : {userdata.type}<br></br>
                    </div>
                    <hr id='norms'></hr>
                    <div id='headi'>
                        <h4>Contact details</h4>
                    </div>
                    <hr id='norms'></hr>
                    <div id='cricketinfo'>
                        Email : {userdata.email?userdata.email:'--'}<br></br>
                        Phone No.  :{" "}{userdata.contact?userdata.contact:'--'}<br></br>
                        Tel No. : {userdata.tel?userdata.tel:'--'}<br></br>
                        Address : {userdata.address?userdata.address:'--'}<br></br>
                        City : {userdata.city?userdata.city:'--'}<br></br>
                    </div>
                    <hr id='norms'></hr>
                    <div id='headi'>
                        <h4>Professional details</h4>
                    </div>
                    <hr id='norms'></hr>
                    <div id='cricketinfo'>
                        Work : {userdata.work?userdata.work:'--'}<br></br>
                        Position  : {userdata.position?userdata.position:'--'}<br></br>
                        Contact : {userdata.contact_work?userdata.contact_work:'--'}<br></br>
                        Work Place : {userdata.work_place?userdata.work_place:'--'}<br></br>
                        City : {userdata.Work_city?userdata.Work_city:'--'}<br></br>
                    </div>
                </div>
                <div id='otherdet'>
                    <div className='' id='basicpro'>
                        <div className='row'>
                            <div className='' id='procont' >
                                <img src='https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png' id='propic' alt='...'></img>
                            </div>
                            <div className='vertical-hr'></div>
                            <div className='col' id='userdetails'>
                                <h1>{userdata.name}</h1>
                                <hr id='norms'></hr>
                                <div className='row'>
                                    <h5 id="dta">Country:{" "}{userdata.location}</h5>
                                    <h5 id='dta'>Type: {(userdata.type) ? (userdata.type) : "Supporter"}</h5>
                                    <h5 id="dta">Team:{" "}{(userdata.team) ? (userdata.team) : (userdata.location)}</h5>
                                    <h5 id='dta'>Expert: {(userdata.experiance) ? (userdata.experiance) : '-'}</h5>
                                </div>
                                <Link to='/editprofile' className='btn btn-success' id='edit'>Edit Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className='' id='basicpro'>
                        <h2>Cricket Favourite Details</h2>
                        <hr></hr>
                        <div id='cricketinfo'>
                            Favourite Cricketer       : {userdata.fav_cricketer?userdata.fav_cricketer:'--'}<br></br>
                            <hr id='norm'></hr>
                            Favourite Batsman         : {userdata.fav_batsman?userdata.fav_batsman:'--'}<br></br>
                            <hr id='norm'></hr>
                            Favourite Bowler          : {userdata.fav_bowler?userdata.fav_bowler:'--'}<br></br>
                            <hr id='norm'></hr>
                            Favourite Alrounder       : {userdata.fav_alrounder?userdata.fav_alrounder:'--'}<br></br>
                            <hr id='norm'></hr>
                            Favourite Wicket-Keeper   : {userdata.fav_wicketKeeper?userdata.fav_wicketKeeper:'--'}<br></br>
                            <hr id='norm'></hr>
                            Favourite Fielder         : {userdata.fav_fielder?userdata.fav_fielder:'--'}<br></br>
                            <hr id='norm'></hr>
                            Favourite Captain         : {userdata.fav_captain?userdata.fav_captain:'--'}<br></br>
                            <hr id='norm'></hr>
                        </div>
                    </div>
                    <div className='' id='basicpro'>
                        <h2>Cricket Details</h2>
                        <hr></hr>
                        <div id='cricketinfo'>
                            Memorable moment          : {(userdata.moment) ? (userdata.moment) : "-"}<br></br>
                            <hr id='norm'></hr>
                            Format like               : {(userdata.formats) ? (userdata.formats) : "-"}<br></br>
                            <hr id='norm'></hr>
                        </div>
                    </div>
                </div>
            </div>
            <div id='foot'>
                <Footer></Footer>
            </div>
        </div>
    )
}
