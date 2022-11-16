import React from 'react'
import ProjectContend from './ProjectsComponents/ProjectsContend';
import { ProjectsContainer, ProjectsWrapper } from './Projects.styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Projects = () => {
  const getData = async () => {
    await axios.get(`https://api.github.com/users/Gustavotp443/repos`)
      .then(({ data }) => {
        setRepos(data)
      }).catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  const [repos, setRepos] = useState([]);

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectContend repos={repos} />
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects;