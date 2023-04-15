// import { React } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import { Welcome } from './pages';



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}> </Route>
        {/* <Route path="/GA" element={<Analytics />} ></Route> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
