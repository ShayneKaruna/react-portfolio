import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import Fullstack1 from "../assets/Banner.png"

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>Jr. Full Stack Web Developer with professional experience in corporate and creative spaces which have fostered a uniquely creative mindset, an open approach to collaboration, and refined communication skills. I love design. Some of my hobbies include playing sports and playing video games.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack bottom">
                <img src={Fullstack1} className="img" alt="true" />
            </div>

        </div>
    </div>
 </div>
  )
}

export default AboutContent