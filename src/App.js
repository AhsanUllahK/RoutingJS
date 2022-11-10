import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Navbar } from './components/Navbar';
import { User } from './components/User';
import Filter from './components/Filter';
// import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/About' element={<h1>About Page</h1>} /> */}
      <Route path='/about' element={<About  />} />
      <Route path='/user/:name' element={<User />} />
      {/* <Route path='/*' element ={ <Page404 />} /> */}
      <Route path='/*' element ={ <Navigate to="/" />} />
      <Route path='/filter' element={<Filter />}/>

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



// git checkout -b dynamic_routing      =>creating new branch
// git branch   ==>   displaying the current branch....
// git log ==> checking the status ofthe branch if we we have any commits in the current branch..