import './App.css'

import Landing, { LandingFooter } from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import SideNavbar from "./components/Sidebar/Components/sideNavbar";
import SignUp from './pages/SignUp/SignUp'
import RigthSide from './components/RightSidebar/RigthSide';
import Home from './pages/Home/Home'

function App() {

  return (
    <>

      <div className='main_background' >
        {/* <Landing />
        <Login />
        <SideNavbar />
        <SignUp /> */}
      </div>
      {/* <LandingFooter /> */}
      <RigthSide/>
        <Home/>

    </>
  );
}

export default App;
