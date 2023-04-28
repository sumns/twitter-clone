

import './App.css'
import Landing, {LandingFooter} from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import SideNavbar from "./components/Sidebar/Components/sideNavbar";
// import SignUp from './pages/RegistrationPage/SignUp'
function App() {




  return (
    <>
      <div className='main_background' >
      {/* <SignUp /> */}
        <Landing />
        <Login/>
        <SideNavbar />
       
      </div>
      <LandingFooter/>


    </>
  );
}

export default App;
