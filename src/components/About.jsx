import React from 'react';

import Title from './Title';

import '../css/About.css';

import pfp from '../assets/IMG_7113-modified.png';
import resume from '../assets/RESUME_VINEETP.pdf';

const About = () => {
  return (
    <>
      <section className="about-ctr" id="about">
        <Title maintitle="About Me" />
        <div className="about-left-ctr">
          <h1 className="about-title">Hello World!</h1>
          <p className="about-paragraph">
            My name is Vineet Panchal, a second year computer science student at Toronto 
            Metropolitan University with a passion for building innovative solutions. 
            I'm a lifelong learner, always seeking for opportunities to improve my skills 
            and knowledge in the field of sofware development.
          </p>
          <p className="about-paragraph">
            I'm a team player with excellent communication skills, and I thrive in
            collaborative environments. I'm excited to contribute to projects that
            have a positive impact on society.
          </p>
          <p className="about-paragraph">
            I'm currently seeking for Summer 2025 Software Developer/Engineer & Frontend
            Developer Internships.
          </p>
          <p className="about-paragraph">
            Fun Facts About Me: I wrote a song once, I've never been to a concert, and I
            can fluently speak in three languages
          </p>
          <p className="about-paragraph">
            Feel free to get in touch or simply just to say Hi!
          </p>
        </div>
        <div className="about-right-ctr">
          <img className="about-pfp" src={pfp} alt="profile-pic" />
          <a className="about-resume" href={resume} target="_blank">
            <img className="about-resume-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2av69MQRzFT4hGInQ6QaGT0EkUapVI6BENyUsUGpVGIv4CUSgUdsYtELX/gIqCZt93lvdaiQSvkFh5orFZe/f+2HvOzH4/ybZ3Pznnztw7cwdwHMdxnIFJEVP/4b8ZDN2HFxIX35BeSNQasV5I5JcgVQjWnMTOgy4gBj0PuoAY9DzoAmLQ86ALiEHPgy4gBj0PuoAY9DzoAmLQ8+hD4O0j7LOIOxbw3gJ+WMBWithAhhRRiEVU81a5FvHGRriIjMi+kE8VTi7aerCIb+MKB5EJ2Rdiz3Ctbj/IIs4gE7IvJEVcry1khNNt/SzgQYrYqfuPWoeATQs4v+o8OtNVYLPCubowxiMcbuNmFU51LWKmlK1V59GZrgKTpzheM11tt3XzQto8QwJu1I6QgBNtS0kR9y3gu09ZywY2wqWaaeLnuMIRZEL2U9b0LvakiOcLpqxbyIjsC/l7jbMW8GtOGV/sBQ4hI4oo5M91Am7PXGtn9w0MmVFMIRZwdOZahgwpppBU4dg/1wqYIEOK2e1NAY/nPEOudvXzlXoDPrzEAYu4mQI+LnjLer0ZcGFaYW/jMnylvtwI2X6F/SniXor42nAv6YoX0vOUtfsaawHv2q6cLeBJk1J8pV4XUMDDrtsYk4jLECW7h7pFfO5aiDUcJUOSXSGlk9h50AXEoOdBFxCDngddQAx6HnQBMeh50AXEoOdBFxCDngddQAx6HnQBMeh50AXEoOdBFxCDngddQAx6HnQBMeh50AXEoOfRVKCvb9yp59PrdV5Fnn7v+xt36un0+rJexZ1+90IGoOkd0dc37tTzlFXnVeSUtQ4kdh50ATHoedAFxKDnQRcQg54HXUAMeh50ATHoedAFxKDnQRcQg56H2l6WLbmAa+pV5MJwqK0TW2LPqY2X72VFL2SlI2SIvSxrOWX5XlahpJyeIetAYudBFxCDngddQAx6HnQBMeh50AXEoOdBFxCDngddQAx6Hk0F/FyWUCF+DGgAvJDMpyw/l7Vi6HeEGPQ86AJi0POgC4hBz4MuIAY9D7qAGPQ86AJi0POgC4hBz4MuIAY9D7qAGPQ86AJi0POgC4hBz4MuIAY9D7qAGPQ86AJi0POYFfAfvJAkfCP4CIn8EryQyA9ephDHcRwH685vkGiJ3ymV55UAAAAASUVORK5CYII="></img>
          </a>
        </div>
      </section>
    </>
  )
}

export default About;