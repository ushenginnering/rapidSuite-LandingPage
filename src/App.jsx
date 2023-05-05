import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
