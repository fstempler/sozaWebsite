import './projectCard.css'
import Loading from '../../Loading/Loading'
import { useState, useEffect } from 'react';

const  ProjectCard = ({ backgroundImage, title}) => {
    const backgroundImg = {
        backgroundImage: `url(${backgroundImage})`,    
    }
    const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    // Simulate asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate 2 seconds of loading
  }, []);

    return (
        <>
        {isLoading ? (
            <div className='loading__Images-Container'>
              <Loading  />
            </div>
            
          ) : (
        <div className='projectCard__Container' style={backgroundImg}>
            <h2 className='projectCard__Title'>{title}</h2>
        </div>
          )}
        </>
    )
}

export  default ProjectCard;