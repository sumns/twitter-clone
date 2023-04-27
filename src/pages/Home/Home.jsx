import React from 'react'
import './Home.css'
import Feeds from '../../components/Feeds/Feeds'

export default function Home() {
  return (

    <div className='home_main_container'>

      {/* TOPBAR of Home page */}
      <section className='home_topbar_section'>
        <h3>Home</h3>
        <div className='home_topbar_innerDiv' >
          <div><span>For you</span></div>
          <div><span>Following</span></div>
        </div>
      </section>

      <Feeds/>

    </div>
  )
}
