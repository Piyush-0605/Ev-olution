import React, { useState } from 'react'
import './App.css';
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  const heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"what is you Aim"},
  ]
  
  const[heroCount,setHeroCount]=useState(0);
  const[playStatus,setPlayStatus]=useState(false);

  return (
    <div className='app'>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar/>
      <Hero 
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
      />
    </div>
  )
}

export default App
