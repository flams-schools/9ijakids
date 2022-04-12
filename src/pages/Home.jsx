import React from 'react'
import Footer from '../components/footer/Footer'
import Games from '../components/Games'
import Intro from '../components/intro/Intro'
import Navbar from '../components/navbar/Navbar'
import NewsLetter from '../components/newletter/NewsLetter'
import Topbar from '../components/topbar/Topbar'

import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Topbar />
      <Navbar />
      <Intro />
      <Games />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
