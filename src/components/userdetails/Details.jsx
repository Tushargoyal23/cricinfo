import React, { useState } from 'react'
import Navbar from '../Navbar'
import './details.css'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
export default function Details() {
    let navigate = useNavigate();
    const [credentials, setcredentials] = useState({
        name: "", age: "", location: "", experiance: "", team: "", type: "", fav_cricketer: "", fav_batsman: ""
        , fav_bowler: "", fav_fielder: "", fav_captain: "", fav_wicketKeeper: "", fav_alrounder: "", moment: "", formats: "", contact: "", tel: "",
        address: "", city: "", work: "", work_place: "", Work_city: "", contact_work: "", position: ""
    });
    // const [authtoken, setToken] = useState(null);
    const authToken = localStorage.getItem("authToken");

    const Onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/editdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                name: credentials.name, age: credentials.age, location: credentials.location, experiance: credentials.experiance,
                team: credentials.team, type: credentials.type, fav_cricketer: credentials.fav_cricketer, fav_batsman: credentials.fav_batsman,
                fav_bowler: credentials.fav_bowler, fav_captain: credentials.fav_captain, fav_wicketKeeper: credentials.fav_wicketKeeper, fav_fielder: credentials.fav_fielder,
                fav_alrounder: credentials.fav_alrounder, moment: credentials.moment, formats: credentials.formats, address: credentials.address, city: credentials.city,
                tel: credentials.tel, contact: credentials.contact, work: credentials.work, Work_city: credentials.Work_city, work_place: credentials.work_place,
                position: credentials.position, contact_work: credentials.contact_work
            })

        })
        const json = await response.json();
        if (json.success) {
            alert("enter valid credentials")
        }
        if (!json.success) {
            // localStorage.setItem("authToken" , json.authToken);
            // console.log(localStorage.getItem("authToken"));
            console.log(json.updatedData);
            setcredentials(json.updatedData);
            navigate('/');
        }
    }
        return (
        <div id='editpro'>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='contar' id='content'>
                <div>
                    <h2> personal details</h2>
                    <hr></hr>
                    <form id='from1' onSubmit={handleSubmit}>
                        <div className="form-gr" id='foh'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label className="form-label"><h6>Full Name:</h6></label>
                                </div>
                                <div className='col-md-9'>
                                    <input type="text" className="form-control" name='name' value={credentials.name} placeholder='name' onChange={Onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-gr" id='foh'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label><h6>Country:</h6></label>
                                </div>
                                <div className='col-md-9'>
                                    <input type="text" className="form-control" name='location' value={credentials.location} placeholder='country' onChange={Onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-gr" id='foh'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label><h6>Team:</h6></label>
                                </div>
                                <div className='col-md-9'>
                                    <input type="text" className="form-control" name='team' value={credentials.team} placeholder='team' onChange={Onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-gr" id='foh'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label><h6>Age:</h6></label>
                                </div>
                                <div className='col-md-9'>
                                    <input type="number" className="form-control" name='age' value={credentials.age} placeholder='age' onChange={Onchange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group" id='foh'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label htmlFor="exampleFormControlSelect1">Experiance:</label>
                                </div>
                                <div className='col-md-9'>
                                    <select className="form-control" name='experiance' value={credentials.experiance} id="exampleFormControlSelect1" onChange={Onchange}>
                                        <option>select</option>
                                        <option>Batsman</option>
                                        <option>Bowler</option>
                                        <option>Fielder</option>
                                        <option>Wicket-keeper</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group" id='foh'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label htmlFor="exampleFormControlSelect1">Type:</label>
                                </div>
                                <div className='col-md-9'>
                                    <select className="form-control" name='type' value={credentials.type} id="exampleFormControlSelect1" onChange={Onchange}>
                                        <option>select</option>
                                        <option>Supporter</option>
                                        <option>Player</option>
                                        <option>Analyst</option>
                                        <option>Generalist</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <h2>Cricket Details</h2>
                            <hr></hr>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Crickerter :</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_cricketer' value={credentials.fav_cricketer} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Batsman:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_batsman' value={credentials.fav_batsman} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Bowler:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_bowler' value={credentials.fav_bowler} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Alrounder:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_alrounder' value={credentials.fav_alrounder} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Wicket-Keeper:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_wicketKeeper' value={credentials.fav_wicketKeeper} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Fielder:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_fielder' value={credentials.fav_fielder} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Fav Captain:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='fav_captain' value={credentials.fav_captain} className="form-control" placeholder='name' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                        <div>
                            <h2>Professional Details</h2>
                            <hr></hr>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Contact:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='contact' value={credentials.contact} className="form-control" placeholder='12345678' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Tel NO:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="number" name='tel' value={credentials.tel} className="form-control" placeholder='12345678' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>City:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='city' value={credentials.work_city} className="form-control" placeholder='Mumbai' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Address:</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='address' value={credentials.address} className="form-control" placeholder='xyz' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Other details</h2>
                            <hr></hr>
                            <div className="form-group" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label for="exampleFormControlTextarea1">Mamorable Moment:</label>
                                    </div>
                                    <div className='col-md-9'>
                                        <textarea className="form-control" name='moment' value={credentials.moment} id="exampleFormControlTextarea1" rows="3" placeholder='write here' onChange={Onchange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-gr" id='foh'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <label><h6>Formats :</h6></label>
                                    </div>
                                    <div className='col-md-9'>
                                        <input type="text" name='formats' value={credentials.formats} className="form-control" placeholder='xyz' onChange={Onchange} />
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div>
                                <h2>Work details</h2>
                                <hr></hr>
                                <div className="form-group" id='foh'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label for="exampleFormControlTextarea1">Work:</label>
                                        </div>
                                        <div className='col-md-9'>
                                            <input type='text' className="form-control" name='work' value={credentials.work} id="exampleFormControlTextarea1" rows="3" placeholder='cricketer' onChange={Onchange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" id='foh'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label for="exampleFormControlTextarea1">Work Place:</label>
                                        </div>
                                        <div className='col-md-9'>
                                            <input type='text' className="form-control" name='work_place' value={credentials.work_place} id="exampleFormControlTextarea1" rows="3" placeholder='write here' onChange={Onchange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" id='foh'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label for="exampleFormControlTextarea1">Work City:</label>
                                        </div>
                                        <div className='col-md-9'>
                                            <input type='text' className="form-control" name='Work_city' value={credentials.Work_city} id="exampleFormControlTextarea1" rows="3" placeholder='write here' onChange={Onchange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" id='foh'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label for="exampleFormControlTextarea1">Position:</label>
                                        </div>
                                        <div className='col-md-9'>
                                            <input type='text' className="form-control" name='position' value={credentials.position} id="exampleFormControlTextarea1" rows="3" placeholder='write here' onChange={Onchange}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group" id='foh'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <label for="exampleFormControlTextarea1">Contact No:</label>
                                        </div>
                                        <div className='col-md-9'>
                                            <input type='text' className="form-control" name='contact_work' value={credentials.contact_work} id="exampleFormControlTextarea1" rows="3" placeholder='write here' onChange={Onchange}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='sub'>
                            <button type="submit" className="btn btn-success">Submit</button>
                            <Link to='/profile' className="btn btn-danger" id='cancel'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}
