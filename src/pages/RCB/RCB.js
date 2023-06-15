import React from 'react'
import './rbc.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
export default function rcb() {
  return (
    <div id='rcb'>
      <div id='rcb' >
        <Navbar title='Royal Challengers Banglore'></Navbar>
        <div id='tag'>
          <h1> #PLAYBOLD</h1>
        </div>
        <div className='row'>
        <div className='col-md-4'>
          <Card title='Virat Kohli' pageurl ='/' Imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYu7eaY7tMzVKGbIsf8ZB8dNAbtHUQa3vw&usqp=CAU'></Card>
        </div>
        <div className='col-md-4'>
          <Card title='Virat Kohli' pageurl ='/' Imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYu7eaY7tMzVKGbIsf8ZB8dNAbtHUQa3vw&usqp=CAU'></Card>
        </div>
        <div className='col-md-4'>
          <Card title='Virat Kohli' pageurl ='/' Imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYu7eaY7tMzVKGbIsf8ZB8dNAbtHUQa3vw&usqp=CAU'></Card>
        </div>
        <div className='col-md-4'>
          <Card title='Virat Kohli' pageurl ='/' Imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYu7eaY7tMzVKGbIsf8ZB8dNAbtHUQa3vw&usqp=CAU'></Card>
        </div>
        <div className='col-md-4'>
          <Card title='Virat Kohli' pageurl ='/' Imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYu7eaY7tMzVKGbIsf8ZB8dNAbtHUQa3vw&usqp=CAU'></Card>
        </div>
        <div className='col-md-4'>
          <Card title='Virat Kohli' pageurl ='/' Imgurl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFYu7eaY7tMzVKGbIsf8ZB8dNAbtHUQa3vw&usqp=CAU'></Card>
        </div>
        </div>
        <div className='footer'>
          {/* <Footer></Footer> */}
        </div>
      </div>
    </div>
  )
}
