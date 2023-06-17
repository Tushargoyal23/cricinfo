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
    // const data = {
    //     "apikey": "586a3d71-2711-41a3-a100-14ea6f0eeaf3",
    //     "data": {
    //         "id": "6602d875-cf56-46a3-866c-de80aaa006bc",
    //         "name": "Jasprit Bumrah",
    //         "dateOfBirth": "1993-12-06T00:00:00",
    //         "role": "Bowler",
    //         "battingStyle": "Right Handed Bat",
    //         "bowlingStyle": "Right-arm fast",
    //         "placeOfBirth": "Ahmedabad",
    //         "country": "India",
    //         "playerImg": "https://h.cricapi.com/img/players/6602d875-cf56-46a3-866c-de80aaa006bc.jpg",
    //         "stats": [
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "m",
    //                 "value": "30"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "inn",
    //                 "value": "46"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "no",
    //                 "value": "17"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "runs",
    //                 "value": "212"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "hs",
    //                 "value": "34"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "avg",
    //                 "value": "7.31"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "bf",
    //                 "value": "455"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "sr",
    //                 "value": "46.59"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "100s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "200s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "50s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "4s",
    //                 "value": "24"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "test",
    //                 "stat": "6s",
    //                 "value": "6"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "m",
    //                 "value": "72"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "inn",
    //                 "value": "20"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "no",
    //                 "value": "13"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "runs",
    //                 "value": "47"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "hs",
    //                 "value": "14"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "avg",
    //                 "value": "6.71"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "bf",
    //                 "value": "93"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "sr",
    //                 "value": "50.54"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "100s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "200s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "50s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "4s",
    //                 "value": "5"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "odi",
    //                 "stat": "6s",
    //                 "value": "1"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "m",
    //                 "value": "60"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "inn",
    //                 "value": "7"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "no",
    //                 "value": "5"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "runs",
    //                 "value": "8"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "hs",
    //                 "value": "7"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "avg",
    //                 "value": "4.0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "bf",
    //                 "value": "13"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "sr",
    //                 "value": "61.54"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "100s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "200s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "50s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "4s",
    //                 "value": "1"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "t20i",
    //                 "stat": "6s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "m",
    //                 "value": "120"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "inn",
    //                 "value": "26"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "no",
    //                 "value": "19"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "runs",
    //                 "value": "56"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "hs",
    //                 "value": "16"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "avg",
    //                 "value": "8.0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "bf",
    //                 "value": "66"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "sr",
    //                 "value": "84.85"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "100s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "200s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "50s",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "4s",
    //                 "value": "4"
    //             },
    //             {
    //                 "fn": "batting",
    //                 "matchtype": "ipl",
    //                 "stat": "6s",
    //                 "value": "1"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "m",
    //                 "value": "30"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "inn",
    //                 "value": "58"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "b",
    //                 "value": "6268"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "runs",
    //                 "value": "2815"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "wkts",
    //                 "value": "128"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "bbi",
    //                 "value": "6/27"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "bbm",
    //                 "value": "9/86"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "econ",
    //                 "value": "2.69"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "avg",
    //                 "value": "21.99"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "sr",
    //                 "value": "48.97"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "5w",
    //                 "value": "8"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "test",
    //                 "stat": "10w",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "m",
    //                 "value": "72"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "inn",
    //                 "value": "72"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "b",
    //                 "value": "3807"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "runs",
    //                 "value": "2941"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "wkts",
    //                 "value": "121"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "bbi",
    //                 "value": "6/19"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "bbm",
    //                 "value": "6/19"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "econ",
    //                 "value": "4.64"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "avg",
    //                 "value": "24.31"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "sr",
    //                 "value": "31.46"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "5w",
    //                 "value": "2"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "odi",
    //                 "stat": "10w",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "m",
    //                 "value": "60"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "inn",
    //                 "value": "59"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "b",
    //                 "value": "1283"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "runs",
    //                 "value": "1416"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "wkts",
    //                 "value": "70"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "bbi",
    //                 "value": "3/11"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "bbm",
    //                 "value": "3/11"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "econ",
    //                 "value": "6.62"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "avg",
    //                 "value": "20.23"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "sr",
    //                 "value": "18.33"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "5w",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "t20i",
    //                 "stat": "10w",
    //                 "value": "0"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "m",
    //                 "value": "120"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "inn",
    //                 "value": "120"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "b",
    //                 "value": "2742"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "runs",
    //                 "value": "3380"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "wkts",
    //                 "value": "145"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "bbi",
    //                 "value": "5/10"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "bbm",
    //                 "value": "5/10"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "econ",
    //                 "value": "7.4"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "avg",
    //                 "value": "23.31"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "sr",
    //                 "value": "18.91"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "5w",
    //                 "value": "1"
    //             },
    //             {
    //                 "fn": "bowling",
    //                 "matchtype": "ipl",
    //                 "stat": "10w",
    //                 "value": "0"
    //             }
    //         ]
    //     },
    //     "status": "success",
    //     "info": {
    //         "hitsToday": 90,
    //         "hitsUsed": 1,
    //         "hitsLimit": 100,
    //         "credits": 0,
    //         "server": 9,
    //         "queryTime": 12.586,
    //         "s": 0,
    //         "cache": 0
    //     }
    // }
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


        // </div>
        // <div>
        //      {renderDataArray()}
        //      {console.log(data.data)}
        //  </div>
    )
}
