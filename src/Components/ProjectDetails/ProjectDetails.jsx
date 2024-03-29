import './projectDetails.css';
import { useProject } from '../State/ProjectContext';


const ProjectDetails = () => {
    const { project } = useProject();
    console.log(project)

    if(!project) {
        return <div>Loading in ProjectDetails...</div>
    }

    return (
        <div className='project__MainContainer'>
            <div className='project__PicturesContainer'>
                {project.images.map((image, index) => (
                     <img key={index} src={image} alt={`Image ${index + 1}`} className="projectCard__Img"/>
                ))}          
            </div>
            <div className='project__TextContainer'>
                <h2 className='project__Title'>{project.name}</h2>
                <p className='project__Description'>{project.description}</p>                        
            </div>
             
             
         </div>
    )
}

export default ProjectDetails;