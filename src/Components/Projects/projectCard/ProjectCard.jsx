import './projectCard.css'
import Loading from '../../Loading/Loading'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const  ProjectCard = ({ backgroundImage, title, construction}) => {
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
        <motion.div 
        className='projectCard__Container project__Link' 
        style={backgroundImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }        
        >
            <h2 className='projectCard__Title'>{title}</h2>
            <div className='constructionContainer'>
              <h3 className='constructionTitle'>{construction}</h3>
            </div>
        </motion.div>
          )}
        </>
    )
}

export  default ProjectCard;