import React, { useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import Photos from '../../components/Photos'
import Card from '../../components/Card'

export default function Home() {


  let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6030a5a1182041c584da8d7d925279f4&page=1&pageSize=4";
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

      {/* {console.log("scac")} */}
      {data.articles ?console.log(data.articles):"" }
      <div className=' bg-dark'>
        <Navbar></Navbar>
        <Photos data = {data.articles ? data.articles : null }></Photos>

      </div>
      <div className='container my-3'>
        <h1> IPL Season Clubs </h1>
        <div className='row'>

          <div className='col-md-3'>
            <Card title="Royal Challengers Banglore"></Card>
          </div>
          <div className='col-md-3'>
            <Card title="Chennai Super kings"></Card>
          </div>
          <div className='col-md-3'>
            <Card title="Mumbai Indians"></Card>
          </div>
          <div className='col-md-3'>
            <Card title="Gujrat Titans"></Card>
          </div>
          <div className='col-md-3'>
            < Card title="Rajasthan Royal "></Card>
          </div><div className='col-md-3'>
            <Card></Card>
          </div>
          <div className='col-md-3'>
            <Card></Card>
          </div><div className='col-md-3'>
            <Card></Card>
          </div><div className='col-md-6'>
            <Card></Card>
          </div><div className='col-md-6'>
            <Card></Card>
          </div>
        </div>
        {/* { console.log(data)} */}
      </div>
    </>
  )
}
