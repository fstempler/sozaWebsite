
//Style
import './project.css'
//Hooks
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProject } from '../State/ProjectContext';
import { motion } from 'framer-motion';
//DB
import projectsDb from '../../lib/projects.json';
//Components
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Loader from '../Loading/Loading';

const Project = () => {
  
  const { id } = useParams();
  const { project, setProject } = useProject();

  useEffect(() => {     
    const foundProject = projectsDb.find(project => project.id === parseInt(id));    
    setProject(foundProject);
    
  }, [id, setProject]);

  if (!project) {
    return  <Loader />
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={ {opacity: 0, transition: {duration: 0.3}} }
    >
      <ProjectDetails project={project} />
    </motion.div>
  );
};

export default Project;
