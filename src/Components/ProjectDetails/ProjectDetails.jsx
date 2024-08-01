import './projectDetails.css';
import { useProject } from '../State/ProjectContext';
import { motion } from 'framer-motion';


const ProjectDetails = () => {
    const { project } = useProject();
    console.log(project)

    if(!project) {
        return <div>Loading...</div>
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
                     <motion.img 
                     key={index} 
                     src={image} 
                     alt={`Image ${index + 1}`} 
                     className="projectCard__Img"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1, transition: {duration: 1}}}
                     />
                ))}          
            </div>
            <div className='project__TextContainer'>
                <motion.h2 
                className='project__Title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 2}}}
                >
                    {project.name}
                </motion.h2>
                {/* <div className='description__Container'>
                    <motion.p 
                    className='project__Description'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {duration: 2}}}
                    >
                        {project.description}
                    </motion.p>                        
                </div> */}
                
            </div>
             
             

        </motion.div>
    )
}

export default ProjectDetails;