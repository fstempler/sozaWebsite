import './projects.css'
//Components
import Title from '../Title/Title'
import ProjectCard from './projectCard/ProjectCard'
//Images
import yeronga from '../../assets/Projects/Yeronga/1.jpg'
import morningside from  '../../assets/Projects/Morningside/ToEDIT/1.jpg'

const Projects = () => {
    return (
        <section className="container">
            <div className='about__Title-Container'>
                    <Title title={'Projects'}  />
            </div>            
            <div className='project__card-container'>
                <ProjectCard title={'Yeronga 1.0'} backgroundImage={yeronga}/>
                <ProjectCard title={'Morningside 1.0'} backgroundImage={morningside}/>
                <ProjectCard title={'Yeronga 1.0'} backgroundImage={yeronga}/>
                <ProjectCard title={'Morningside 1.0'} backgroundImage={morningside}/>
            </div>            
        </section>
    )
}

export default Projects