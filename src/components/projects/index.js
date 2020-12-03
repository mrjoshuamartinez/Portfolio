import React from 'react';
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-3.svg';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP
} from './projects';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
      <ProjectsCard>
          <ProjectsIcon src={ Icon1 } />
          <ProjectsH2>HTML/CSS</ProjectsH2>
          <ProjectsP>Here are a few projects I've done using only HTML/CSS.</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={ Icon2 } />
          <ProjectsH2>React</ProjectsH2>
          <ProjectsP>Here are a few projects I've done using React & Styled Components.</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={ Icon3 } />
          <ProjectsH2>APIs</ProjectsH2>
          <ProjectsP>Here are a few of my favorite APIs that I have created.</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
