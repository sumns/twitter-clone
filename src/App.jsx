
import React from 'react'
import './App.css'
import Landing, {LandingFooter} from './pages/Landing/Landing'
import Login from './pages/Login/Login'

import SideNavbar from './components/Sidebar/sideNavbar'


// import Feed from './components/Sidebar/Feed'

import Signup from './pages/SignUp/Signup'
import RigthSide from './components/RightSidebar/RigthSide';
import Home from './pages/Home/Home'

function App() {

  return (

    <>

      <div className='main_background' >
        {/* <Signup /> */}

        {/* <SideNavbar /> */}
        <Home />
        {/* <RigthSide /> */}


        {/* <Login /> */}

      </div>



    </>
  );

}

export default App;
