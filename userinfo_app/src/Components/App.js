import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Adduser from './Adduser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Adduser' element={<Adduser />}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
