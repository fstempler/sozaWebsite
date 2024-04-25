import './projectDetails.css';
import { useProject } from '../State/ProjectContext';
import { motion } from 'framer-motion';


const ProjectDetails = () => {
    const { project } = useProject();
    console.log(project)

    if(!project) {
        return <div>Loading in ProjectDetails...</div>
    }

    return (
        <motion.div 
        className='project__MainContainer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }
        >
            <div className='project__PicturesContainer'>
                {project.images.map((image, index) => (
                     <img key={index} src={image} alt={`Image ${index + 1}`} className="projectCard__Img"/>
                ))}          
            </div>
            <div className='project__TextContainer'>
                <h2 className='project__Title'>{project.name}</h2>
                <div className='description__Container'>
                    <p className='project__Description'>{project.description}</p>                        
                </div>
                
            </div>
             
             

        </motion.div>
    )
}

export default ProjectDetails;