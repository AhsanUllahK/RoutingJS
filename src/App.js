import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/About' element={<h1>About Page</h1>} /> */}
      <Route path='/about' element={<About />} />

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;




// <BrowserRouter>
// <Routes>
//   <Route path='' element={} />
// </Routes>
// </BrowserRouter>