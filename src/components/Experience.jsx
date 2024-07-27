import React from 'react';

import '../css/Experience.css';

import Title from './Title';

const Experience = () => {
  return (
    <>
      <section className="experience-ctr" id="experience">
        <Title maintitle="Experience" />
        <div className="timeline-container">
          <div className="timeline">
            <ul className='exs'>
              <li className="ex">
                <div className="timeline-content">
                  <h3 className="timeline-date">July 2024 to August 2024</h3>
                  <h1 className="timeline-experience">Headstarter AI</h1>
                  <h6 className="timeline-title">Software Developer Fellowship</h6>
                  <p className="timeline-description">
                    Worked in a team effort to build 5 AI projects, compete 5
                    hackathons, and 1 final project with 1000+ users. Engaged 
                    in a passionate community to refine my skills, built connections, 
                    get practical experience coding, building, and generating revenue
                  </p>
                </div>
              </li>
              <li className="ex">
                <div className="timeline-content">
                  <h3 className="timeline-date">May 2024 to July 2024</h3>
                  <h1 className="timeline-experience">The Circle Lab</h1>
                  <h6 className="timeline-title">Frontend Developer Internship</h6>
                  <p className="timeline-description">
                    Developed a website for the organization in React JS. Joined 
                    conferences to network with individuals and brainstorm and 
                    implement ideas to use AI to improve education.
                  </p>
                </div>
              </li>
              <li className="ex">
                <div className="timeline-content">
                  <h3 className="timeline-date">September 2020 to June 2023</h3>
                  <h1 className="timeline-experience">Extendicare Student Council</h1>
                  <h6 className="timeline-title">Head Secretary</h6>
                  <p className="timeline-description">
                    Worked in a team effort to accomplish our main goal, responsible 
                    for note taking, handling documents, leading the secretary department, 
                    and handling monetary issues.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience;