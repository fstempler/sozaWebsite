import './projects.css'
//Components
import Title from '../Title/Title';
import ProjectCard from './projectCard/ProjectCard';
//Projects DB
import projectsDb from '../../lib/projects.json';
//Hooks
import { Link } from 'react-router-dom';
import { ProjectProvider, useProject } from '../State/ProjectContext';


const ProjectCardWithProjectData = ({ project }) => {    
    return (
        <Link to={`/project/${project.id}`} className='project__Link'>
            <ProjectCard key={ project.id } title={ project.name } backgroundImage={ project.images[0] }/>                                        
        </Link>
    )
}

const Projects = () => {

    
    return (
        <section className="container">
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
        </section>
        
    )
}

export default Projects