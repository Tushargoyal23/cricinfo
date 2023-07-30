import React, { useEffect, useState } from 'react'
import './scores.css'
export default function Scores() {
    let url = "https://api.cricapi.com/v1/currentMatches?apikey=586a3d71-2711-41a3-a100-14ea6f0eeaf3&offset=0";
    const [data, setData] = useState([]);
    
    const fetchInfo = async () => {
        return await fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
    
    useEffect(() => {
        fetchInfo();
    }, []);
    
    // let y = data.data;
    let x = Math.floor(Math.random() * 5);
    x =0;
    if (!data || !data.data) {
        return <div>Loading...</div>;
      }
    return (
        <div id='livescores'>
            <div className="row gx-5">
                <div className="col-md-3">
                    <div className="p-3">
                    <div className="card" style={{ width: "18rem" }} id='cardId'>
                        <div className="card-body">
                        <h5 className="card-title"><img src ={data.data ? data.data[x].teamInfo[0].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "}<i>{data.data ? data.data[x].teamInfo[0].shortname : "Team 1"}</i>
                             {"  "}vs {"  "}<img src ={data.data ? data.data[x].teamInfo[1].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "} <i>{(data.data && data.data[x].teamInfo[1]) ? data.data[x].teamInfo[1].shortname : "Team 2"}</i></h5>
                            {(data.data[x].score.length >= 1)?<h6 className="card-subtitle mb-2 text-body-secondary">{(data.data && data.data[x].score[0].inning) ? data.data[x].score[0].inning: "" } : {data.data ? data.data[x].score[0].r: "" }/{data.data ? data.data[x].score[0].w: "" }
                            ({data.data ? data.data[x].score[0].o: "" } overs)</h6>:"Note yet started"}
                            { (data.data[x].score.length >= 2)?<h6 className="card-subtitle mb-2 text-body-secondary">{(data.data && data.data[x].score[1]) ? data.data[x].score[1].inning: "" } : {(data.data && data.data[x].score[1]) ? data.data[x].score[1].r: "" }/{(data.data && data.data[x].score[1]) ? data.data[x].score[1].w: "" } ({(data.data && data.data[x].score[1]) ? data.data[x].score[1].o: "" } overs)</h6> : " "}
                            <p className="card-text">{data.data ? data.data[x].venue: "" }</p>
                            <p className="card-text">Match type : {data.data ? data.data[x].matchType: "" } </p>
                            <b><p className="card-text">{data.data ? data.data[x].status: "" }</p></b>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-3">
                    <div className="card" style={{ width: "18rem" }} id='cardId'>
                        <div className="card-body">
                        <h5 className="card-title"><img src ={data.data ? data.data[1].teamInfo[0].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "}<i>{data.data ? data.data[1].teamInfo[0].shortname : "Team 1"}</i>
                             {"  "}vs {"  "}<img src ={data.data ? data.data[1].teamInfo[1].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "} <i>{data.data ? data.data[1].teamInfo[1].shortname : "Team 2"}</i></h5>
                            { (data.data[1].score.length>=1)?<h6 className="card-subtitle mb-2 text-body-secondary">{data.data ? data.data[1].score[0].inning: "" } : {data.data ? data.data[1].score[0].r: "" }/{data.data ? data.data[1].score[0].w: "" } ({data.data ? data.data[1].score[0].o: "" } overs)</h6> : "Not yet started"}
                            { (data.data[1].score.length>=2)?<h6 className="card-subtitle mb-2 text-body-secondary">{(data.data && data.data[1].score[1].inning) ? data.data[1].score[1].inning: "" } : {data.data ? data.data[1].score[1].r: "" }/{data.data ? data.data[1].score[1].w: "" } ({data.data ? data.data[1].score[1].o: "" } overs)</h6>:" "}
                            <p className="card-text">{data.data ? data.data[1].venue: "" }</p>
                            <p className="card-text">Match type : {data.data ? data.data[1].matchType: "" } </p>
                            <b><p className="card-text">{data.data ? data.data[1].status: "" }</p></b>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-3">
                        <div className="card" style={{ width: "18rem" }} id='cardId'>
                            <div className="card-body">
                            <h5 className="card-title"><img src ={data.data ? data.data[2].teamInfo[0].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "}<i>{data.data ? data.data[2].teamInfo[0].shortname : "Team 1"}</i>
                             {"  "}vs {"  "}<img src ={data.data ? data.data[2].teamInfo[1].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "} <i>{data.data ? data.data[2].teamInfo[1].shortname : "Team 2"}</i></h5>
                            { (data.data[2].score.length>=1)?<h6 className="card-subtitle mb-2 text-body-secondary">{data.data ? data.data[2].score[0].inning: "" } : {data.data ? data.data[2].score[0].r: "" }/{data.data ? data.data[2].score[0].w: "" } ({data.data ? data.data[2].score[0].o: "" } overs)</h6> : "Not yet started"}
                            { (data.data[2].score.length>=2)?<h6 className="card-subtitle mb-2 text-body-secondary">{(data.data && data.data[2].score[1].inning) ? data.data[2].score[1].inning: "" } : {data.data ? data.data[2].score[1].r: "" }/{data.data ? data.data[2].score[1].w: "" } ({data.data ? data.data[2].score[1].o: "" } overs)</h6>:" "}
                            <p className="card-text">{data.data ? data.data[2].venue: "" }</p>
                            <p className="card-text">Match type : {data.data ? data.data[2].matchType: "" } </p>
                            <b><p className="card-text">{data.data ? data.data[2].status: "" }</p></b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="p-3">
                        <div className="card" style={{ width: "18rem" }} id='cardId'>
                            <div className="card-body">
                            <h5 className="card-title"><img src ={data.data ? data.data[3].teamInfo[0].img: "" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "}<i>{data.data ? data.data[3].teamInfo[0].shortname : "Team 1"}</i>
                             {"  "}vs {"  "}<img src ={data.data ? data.data[3].teamInfo[1].img: "https://h.cricapi.com/img/icon512.png" } className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }}/>{"  "} <i>{data.data ? data.data[3].teamInfo[1].shortname : "Team 2"}</i></h5>
                            { (data.data[3].score.length>=1)?<h6 className="card-subtitle mb-2 text-body-secondary">{data.data ? data.data[3].score[0].inning: "" } : {data.data ? data.data[3].score[0].r: "" }/{data.data ? data.data[3].score[0].w: "" } ({data.data ? data.data[3].score[0].o: "" } overs)</h6> : "Not yet started"}
                            { (data.data[3].score.length>=2)?<h6 className="card-subtitle mb-2 text-body-secondary">{(data.data && data.data[3].score[1].inning) ? data.data[3].score[1].inning: "" } : {data.data ? data.data[3].score[1].r: "" }/{data.data ? data.data[3].score[1].w: "" } ({data.data ? data.data[3].score[1].o: "" } overs)</h6>:" "}
                            <p className="card-text">{data.data ? data.data[3].venue: "" }</p>
                            <p className="card-text">Match type : {data.data ? data.data[3].matchType: "" } </p>
                            <b><p className="card-text">{data.data ? data.data[3].status: "" }</p></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
