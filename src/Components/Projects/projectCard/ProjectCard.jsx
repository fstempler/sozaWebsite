import './projectCard.css'

const  ProjectCard = ({ backgroundImage, title}) => {
    const backgroundImg = {
        backgroundImage: `url(${backgroundImage})`,    
    }
    return (
        <div className='projectCard__Container' style={backgroundImg}>
            <h2 className='projectCard__Title'>{title}</h2>
        </div>
    )
}

export  default ProjectCard;