import React from 'react';

import '../css/Projects.css';

import Title from './Title';
import ProjectCard from './ProjectCard';

import timewiseImg from '../assets/timewise.png';
import moviesnetImg from '../assets/moviesnet.png';
import astarImg from '../assets/astar.png';
import minesweeperImg from '../assets/minesweeper.png';
import sudokuImg from '../assets/sudoku.png';
import pokedexImg from '../assets/pokedex.png';

const Projects = () => {
  return (
    <>
      <div className="projects-ctr" id="projects">
        <Title maintitle="Projects" />
        <div className="projects-ctr-1">
          <ProjectCard 
            bgImg={timewiseImg} 
            title="Time Wise" 
            url="https://github.com/vineet-panchal/time-wise-calendar" 
          />
          <ProjectCard 
          bgImg={moviesnetImg} 
          title="MoviesNet" 
          url="https://github.com/vineet-panchal/moviesnet" 
          />
          <ProjectCard 
          bgImg={astarImg} 
          title="A-Star Pathfinder Visualizer" 
          url="https://github.com/vineet-panchal/astar-visualizer" 
          />
        </div>
        <div className="projects-ctr-2">
          <ProjectCard 
            bgImg={minesweeperImg} 
            title="Minesweeper" 
            url="https://github.com/vineet-panchal/minesweeper"
          />
          <ProjectCard 
            bgImg={sudokuImg} 
            title="Sudoku Solver" 
            url="https://github.com/vineet-panchal/sudoku-solver"
          />
          <ProjectCard 
            bgImg={pokedexImg} 
            title="Pokedex" 
            url="https://github.com/vineet-panchal/pokedex"
          />
        </div>
      </div>
    </>
  )
}

export default Projects;