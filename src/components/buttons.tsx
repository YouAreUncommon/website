// Gatsby supports TypeScript natively!
import React, { useState, useEffect } from "react"
import { PageProps, Link } from "gatsby"

import { FlapDisplay, Presets } from "react-split-flap-effect"

import "./buttons.scss"



const Button = () => {

  return (
    <div>
      <button className="btn btn-green btn-border-rev-o">Test</button>
    </div>
  )
};



export default Button;
