import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import './Styles/main.css'
import { IWDLogoPurple } from './components/Icons';
import Hero from "./components/Hero"
import HowTo from './components/HowTo';
import Footer from './components/Footer';
import Poster from './components/Poster';
import { Toaster } from 'sonner';


function App() {



  return (
    <div className="App">
      <Hero />
      <hr className='h-4 bg-brown' />
      <HowTo />
      <Poster />
      <Toaster richColors/>
    </div>
  );
}

export default App;
