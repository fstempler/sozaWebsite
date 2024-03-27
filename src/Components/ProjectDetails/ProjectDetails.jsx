import './projectDetails.css';
import { useProject } from '../State/ProjectContext';


const ProjectDetails = () => {
    const { project } = useProject();
    console.log(project)

    if(!project) {
        return <div>Loading in ProjectDetails...</div>
    }

    return (
        <div>
             <h2>{project.name}</h2>
             <p>{project.description}</p>                        
             {project.images.map((image, index) => (
                 <img key={index} src={image} alt={`Image ${index + 1}`} className="projectCard__Img"/>
             ))}          
         </div>
    )
}

export default ProjectDetails;