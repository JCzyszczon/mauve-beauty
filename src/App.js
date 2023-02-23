import {Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/index.jsx';
import Navbar from './pages/navbar.jsx';
import { PulseLoader } from 'react-spinners';
import Logo from './img/logo.png';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      { loading ? (
        <section className='w-[100vw] h-[100vh] bg-navbarBg flex justify-center items-center relative'>
          <img src={Logo} alt="Logo" className='w-[350px] h-auto px-5'/>
          <PulseLoader 
          color="#fff"
          speedMultiplier={0.8} 
          className='absolute bottom-20 left-1/2 transform -translate-x-1/2'
          ></PulseLoader>
        </section>
      ) : (
        <>
          <Navbar/>
          <Routes>
            <Route path='/mauve-beauty' element={<Home/>}/>
          </Routes>
        </>
      )}
  </>
  );
}

export default App;