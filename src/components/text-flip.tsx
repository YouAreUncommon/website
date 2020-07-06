// Gatsby supports TypeScript natively!
import React, { useState, useEffect } from "react"
import { PageProps, Link } from "gatsby"

import { FlapDisplay, Presets } from "react-split-flap-effect"


import useWindowSize from '../utils/useWindowSize'


// import "react-split-flap-effect/extras/themes.css"
import "./text-flip.scss"



const TextFlip = () => {
  
  const WORDS = [
    'Uncommon',
    'Scaling',
    'Building',
    'Uncommon',
    'Growing',
    'Hiring',
  ];


  const [ inc, setInc ] = useState(0);
  const [ text, setText ] = useState(WORDS[0]);

  const word = WORDS[inc]

  useEffect(() => {
    const interval = setInterval(() => {
      setInc(inc => inc < WORDS.length - 1 ? inc + 1 : 0);
    }, 4050);
    return () => clearInterval(interval);
  });



  const windowSize = useWindowSize()
  const [ size, setSize ] = useState();


  useEffect(() => {
    let newSize;
    if (windowSize.width >= 1025) newSize = 'XXXL'
    if (windowSize.width <= 1024) newSize = 'XXL'
    if (windowSize.width <= 425) newSize = 'L'
    setSize(newSize)
  }, [windowSize.width]);



  return (
    <FlapDisplay
      chars={Presets.ALPHANUM + ',!+-_@$£%&*'}
      length={8}
      value={word}
      className={`text-flip ${size}`}
      timing={50}
    />
  )
};



export default TextFlip;
