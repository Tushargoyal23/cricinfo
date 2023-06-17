import React, { useEffect, useState } from 'react'
import './Scorecard.css'
export default function Scorecard(props) {
  let url = "https://api.cricapi.com/v1/currentMatches?apikey=586a3d71-2711-41a3-a100-14ea6f0eeaf3&offset=0";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  if (!data || !data.data) {
    return <div>Loading...</div>;
  }
  return (
    <div id='scorecard'>
      {data.data.map((item) => (
        <div key={item.unique_id} className="card" style={{ width: "30rem" }} id='scores'>
          <div className="card-body">
            <h5 className="card-title">
              <img src={item.teamInfo[0].img} className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }} />
              {"  "}
              <i>{item.teamInfo[0].shortname || "Team 1"}</i>
              {"  "}vs{"  "}
              <img src={item.teamInfo[1].img} className="card-img-top" alt="..." style={{ maxWidth: "30px", objectFit: "fill" }} />
              {"  "}
              <i>{item.teamInfo[1].shortname || "Team 2"}</i>
            </h5>
            {/* {console.log(item.score.length)} */}

            {(item.score.length >= 1) ? <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.score[0].inning} : {item.score[0].r}/{item.score[0].w} ({item.score[0].o} overs)
            </h6>
              : "Not yet started"}
            {(item.score.length >= 2) ? <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.score[1].inning} : {item.score[1].r}/{item.score[1].w} ({item.score[1].o} overs)
            </h6> : " "}
            {(item.score.length >= 3) ? <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.score[2].inning} : {item.score[2].r}/{item.score[2].w} ({item.score[2].o} overs)
            </h6> : " "}
            {(item.score.length >= 4) ? <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.score[3].inning} : {item.score[3].r}/{item.score[3].w} ({item.score[3].o} overs)
            </h6> : " "}
            <p className="card-text">{item.venue}</p>
            <p className="card-text">Match type: {item.matchType}</p>
            <b><p className="card-text">{item.status}</p></b>
          </div>
        </div>
      ))}
    </div>
  )
}
