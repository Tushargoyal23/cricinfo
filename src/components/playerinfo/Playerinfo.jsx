import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './Playerinfo.css'
import Footer from '../Footer'
import { useParams } from 'react-router-dom'
export default function Player() {
    const  {id}  = useParams();
  const ide ='6602d875-cf56-46a3-866c-de80aaa006bc' ;
    let url = `https://api.cricapi.com/v1/players_info?apikey=586a3d71-2711-41a3-a100-14ea6f0eeaf3&id=${id}`;
    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        return await fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }

    useEffect(() => {
        fetchInfo();
    }, []);
    if (!data || !data.data) {
        return <div>Loading...</div>;
      }
    return (
        <div id='info'>
            {console.log(id)}
            <Navbar title='CricInfo'></Navbar>
            <div>
                <div className='row' id='prof'>
                    <div className=' col-md' style={{ width: '20rem' }}>
                        <img src={data.data.playerImg} id='img'></img>
                    </div>
                    <div className=' col' style={{ width: '35rem' }} id='details'>
                        <h1>{data.data.name}</h1>
                        <h4>{data.data.role}</h4>
                        <div id='basic'>
                            <h5>Batting Style :{" "}{data.data.battingStyle}</h5>
                            <h5>Bowling Style :{" "}{data.data.bowlingStyle}</h5>
                            <h5>Place of Birth:{" "}{data.data.placeOfBirth}</h5>
                            <h5>Country:{" "}{data.data.country}</h5>
                        </div>
                    </div>
                </div>
            </div>
            {console.log(data.data.stats)}
            <div id='type'>
                <div id='details'>
                    <h2>Batting</h2>
                </div>
                <table class="table" id='table'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Type</th>
                            <th scope="col">Matches</th>
                            <th scope="col">Innings</th>
                            <th scope="col">No</th>
                            <th scope="col">Runs</th>
                            <th scope="col">Highest</th>
                            <th scope="col">Avg</th>
                            <th scope="col">bf</th>
                            <th scope="col">SR</th>
                            <th scope="col">100s</th>
                            <th scope="col">200s</th>
                            <th scope="col">50s</th>
                            <th scope="col">4s</th>
                            <th scope="col">6s</th>

                        </tr>
                    </thead>
                    <tbody>
                        {[0, 13, 26,39].map((start, rowIndex) => (
                            <tr key={rowIndex}>
                                <th scope="row">{rowIndex + 1}</th>
                                <td>{data.data.stats[start].matchtype}</td>
                                {data.data.stats.slice(start, start + 13).map((stat, colIndex) => (
                                    <td key={colIndex}>{stat.value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div id='details'> <h2>Bowling</h2></div>
            <table class="table" id='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Type</th>
                        <th scope="col">Matches</th>
                        <th scope="col">Innings</th>
                        <th scope="col">b</th>
                        <th scope="col">Runs</th>
                        <th scope="col">wickets</th>
                        <th scope="col">bbi</th>
                        <th scope="col">bbm</th>
                        <th scope="col">econ</th>
                        <th scope="col">Avg</th>
                        <th scope="col">sr</th>
                        <th scope="col">5w</th>
                        <th scope="col">10w</th>
                    </tr>
                </thead>
                <tbody>
                    {[52, 64, 76,88].map((start, rowIndex) => (
                        <tr key={rowIndex}>
                            <th scope="row">{rowIndex + 1}</th>
                            <td>{data.data.stats[start].matchtype}</td>
                            {data.data.stats.slice(start, start + 12).map((stat, colIndex) => (
                                <td key={colIndex}>{stat.value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer></Footer>
        </div>
    )
}
