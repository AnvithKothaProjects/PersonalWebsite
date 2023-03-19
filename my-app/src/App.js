import './App.css';
import RotatingTxt from './Components/RotatingTxt';
import Box from './Components/Box';
import Scene from './Components/Scene';
import Image from './Components/Image';
import Card from './Components/Card';

import * as THREE from "three";
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const myAnimation = {
    visible: { x: 0 },
    hidden: { x: 500 },
    transition: {delay: 1000}
  }
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [seen, changeSeen] = useState(false);
  const [mode, changeMode] = useState(0);

  const experiences = [["USACO Silver", 
  "Reached the silver division in a competitive programming competition that required problem solving skills and basic algorithms"],
  ["AIME Qualifier", "Qualified for the American Invitational Math Exam, which required a deep understanding and creative usage of precalculus math topics"],
  ["MWMC Instructor", "I create a lesson and teach it to grade schoolers every week, focusing on the creative side of math"]]

  const projects = [["Military Strategy", 
  "Place your troops on the battlefied and move them around through teleporters with djistras algorithm. Build and break barriers to take cover"],
  ["Medeival Battle", "Collect the 4 keys in a turn based battle game. Upgrade your character with a binary tree"],
  ["Rube Goldberg Machine", "A chain reaction that involves zero gravity, pulleys, user drawings, and pendulums, with the purpose of destroying Earth. Made in Matter.js with Shreyas Talluri and Siya Choudhary"]]

  useEffect(() => {
    if (inView || seen) {
      control.start("visible");
      changeSeen(true);
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, [])

  const detectKeyDown = (e) => {
    let a1 = App.ballCoords.current[0]-(-5);
    let a2 = App.ballCoords.current[1]-(.1);
    let a3 = App.ballCoords.current[2];

    let b1 = App.ballCoords.current[0]-(5);
    let b2 = App.ballCoords.current[1]-(.1);
    let b3 = App.ballCoords.current[2];

    changeMode(0);
    if (e.key == "Enter" && Math.sqrt(Math.pow(a1,2) + Math.pow(a2,2) + Math.pow(a3,2)) < 1) {
      changeMode(1);
    }
    else if (e.key == "Enter" && Math.sqrt(Math.pow(b1,2) + Math.pow(b2,2) + Math.pow(b3,2)) < 1) {
      changeMode(2);
    }
  }

  const passedToBall = (coords) => {
    App.ballCoords = coords;
        // console.log(ballCoords);
  }

  return (
    <div className='overflow'>
    <div className="App bg-middle container">

      <div className='grow'>
        {/* nameHere */}
        <h1 className='text-8xl 
        font-serif text-white marginText my-font'>Hi, I'm Anvith</h1>
        <RotatingTxt></RotatingTxt>
      </div>
    </div>

    <div className='bg-second-darkest container'>
      <div>
        <img src={require("./Assets/me.jpg")} className="myImg"></img>
      </div>

      <div className='grow'>

        <h1 className='center my-font mt-10 mb-8 text-5xl marginTop'>About Me</h1>
        <motion.h1 ref={ref} variants={myAnimation} initial={"hidden"} animate={control}
        className='center mb-5 text-3xl text-white font-sans abtText' transition={{ type: "spring", stiffness: 100, duration: 0.5}}>Hi! I'm a student at Conant High School who's interested in math and algorithms.
        I've always loved the process of turning impossible problems into hard but doable ones. It's what led me to persue math and computer science.
        You might find me shooting some hoops, going on a run, practicing the violin, or enjoying a good video game.</motion.h1>
      
      </div>
    </div>

    <div className='relative'>
      <div className='canvasDiv'>
        <Scene paused={mode!=0} passed={passedToBall}/>
      </div>
      <h1 className='my-font pText'>Projects</h1>
      <h1 className='my-font eText'>Experience</h1>
      <h1 className='my-font wText'>Use WASD To Move</h1>
      <div className='floatContainer experience'>
        {experiences.map((experiences, index) => (
          <Card title={experiences[0]} description={experiences[1]} shouldShow={mode==1}></Card>
        ))}
      </div>

      <div className='floatContainer experience'>
        {projects.map((experiences, index) => (
          <Card title={experiences[0]} description={experiences[1]} shouldShow={mode==2}></Card>
        ))}
      </div>
    </div>

    </div>
  );
} 

App.ballCoords = [0,0,0];

export default App;
