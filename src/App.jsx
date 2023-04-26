

import './App.css'
import Landing, { LandingFooter } from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import SideNavbar from "./components/Sidebar/Components/sideNavbar";
import SignUp from './pages/SignUp/SignUp'
function App() {




  return (
    <>
      <div className='main_background' >
        <Landing />

      </div>
      <Login />
      <SideNavbar />
      <SignUp />
      <LandingFooter />


    </>
  );
}

export default App;
