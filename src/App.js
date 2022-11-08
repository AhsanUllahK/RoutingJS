import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Navbar } from './components/Navbar';
// import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/About' element={<h1>About Page</h1>} /> */}
      <Route path='/about' element={<About />} />
      {/* <Route path='/*' element ={ <Page404 />} /> */}
      <Route path='/*' element ={ <Navigate to="/" />} />

     </Routes>
     {/* <Navbar /> */}
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