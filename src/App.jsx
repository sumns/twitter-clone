
import React from 'react'
import './App.css'

import Login from './pages/Login/Login'
import Signup from './pages/SignUp/Signup'

import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (

    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  );

}

export default App;



// Test Cases :-

// 1. Home page Protected
// 2. Sign up Validation 
// 3. Tweet
// 4. Logout
// 5. Right - not interested
// 6. Right - show more
// 7. Responsive
// 8. Personal profile data
