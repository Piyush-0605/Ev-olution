import React from 'react'
import './Hero.css';
import arrow from "../../assets/arrow_btn.png";
import pause_icon from '../../assets/pause_icon.png';
import play_icon from '../../assets/play_icon.png';


const Hero = ({heroData,playStatus,setPlayStatus,heroCount,setHeroCount}) => {
  return (
    <div className='hero container'>
      <div className="hero-title">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explote the feature</p>
        <img src={arrow} alt="" />
      </div>
      <div className="hero-dot">
        <div className='dots'>
        <ul>
            <li onClick={()=>setHeroCount(0)} className={heroCount==0? "hero-dots orange":"hero-dots"}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount==1? "hero-dots orange":"hero-dots"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount==2? "hero-dots orange":"hero-dots"}></li>
        </ul>
        </div>
        <div className="hero-play">
            <img onClick={()=>setPlayStatus(!playStatus)}  src={playStatus?pause_icon:play_icon} alt=""  />
            <p>see the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
