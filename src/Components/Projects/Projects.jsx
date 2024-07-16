import './projects.css'
//Components
import Title from '../Title/Title';
import ProjectCard from './projectCard/ProjectCard';
//Projects DB
import projectsDb from '../../lib/projects.json';
//Hooks
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const ProjectCardWithProjectData = ({ project }) => {    
    return (
        <Link to={`/project/${project.id}`} className='project__Link'>
            <ProjectCard key={ project.id } 
            title={ project.name } 
            backgroundImage={ project.images[0] }
            construction={ project.construction }
            />                                        
        </Link>
    )
}

const Projects = () => {

    
    return (
        <motion.div 
        className="container projects__Container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }
        >
            <div className='about__Title-Container'>
                    <Title title={'Projects'}  />
            </div>            
            <div className='project__card-container'>
                {projectsDb.map ( project => {                    
                    return (                        
                        <ProjectCardWithProjectData key={project.id} project={project} />
                    )
                })}             
            </div>             
            
        </motion.div>
        
    )
}

export default Projects