import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Photos from '../../components/Photos'
import './Home.css'
import Scores from '../../components/Scores'
import Clubs from '../../components/Clubs'
export default function Home() {


  let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6030a5a1182041c584da8d7d925279f4&page=1&pageSize=5";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);



  return (
    <>
      <div id='home'>
        {/* {data.articles ? console.log(data.articles) : ""} */}
        <div className='margin-bottom: 100px'>
          <Navbar title='CricInfo'></Navbar>
        </div>
        <Photos data={data.articles ? data.articles : null}></Photos>
        <Scores></Scores>
        <div>
          <Clubs></Clubs>
        </div>
        <div class="">
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}
