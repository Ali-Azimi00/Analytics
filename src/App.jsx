// import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Welcome from './pages/Welcome';
import GoogleAnalytics from './pages/GoogleAnalytics';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}> </Route>
        <Route path="/GA" element={<GoogleAnalytics />} ></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
