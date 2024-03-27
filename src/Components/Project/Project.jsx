
//Style
import './project.css'
//Hooks
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useProject } from '../State/ProjectContext';
//DB
import projectsDb from '../../lib/projects.json';
//Components
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Loader from '../Loading/Loading';

const Project = () => {
  
  const { id } = useParams();
  const { project, setProject } = useProject();

  useEffect(() => {     
    const foundProject = projectsDb.find(project => project.id);    
    setProject(foundProject);
    
  }, [id, setProject]);

  if (!project) {
    return  <Loader />
  }

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
};

export default Project;
