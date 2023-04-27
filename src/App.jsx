import React from 'react'
import './App.css'
import SideNavbar from './components/Sidebar/sideNavbar'
import Feed from './components/Sidebar/Feed'

function App() {

  return (
    <div className='app'>

        <SideNavbar />

        <Feed />
    </div>
  )
}

export default App
