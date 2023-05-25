import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ShowUser from './Components/ShowUser/ShowUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/show' element={<ShowUser></ShowUser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;