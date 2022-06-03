import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Individual from './components/Individual';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/individual/:id" element={<Individual/>}/>
      </Routes>
    </div>
  )
}

export default App