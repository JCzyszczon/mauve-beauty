import {Routes, Route} from 'react-router-dom';
import Home from './pages/index.jsx';
import Navbar from './pages/navbar.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/mauve-beauty' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;