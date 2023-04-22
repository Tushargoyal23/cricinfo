import React from 'react'
import Navbar from '../../components/Navbar'
import Photos from '../../components/Photos'

export default function Home() {
  return (
    <div className='home bg-dark'>
      <Navbar></Navbar>
      <Photos title = "Today's sports news"></Photos>
    </div>
  )
}
