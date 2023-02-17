import {Routes, Route} from 'react-router-dom';
import Home from './pages/index.js';
import Navbar from './pages/navbar.js';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;