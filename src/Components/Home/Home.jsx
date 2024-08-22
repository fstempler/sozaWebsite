import './home.css'

// Images
import Pic1 from '../../assets/Morningside.png';
import Pic2 from '../../../public/Projects/Yeronga/1.jpg';
import Pic3 from '../../../public/Projects/Morningside2/1.png';
//Hooks
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const  Home = () => {
    return (
        <motion.div className=''
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }
        >
            <main className='home__Content'>
                <div className='home__Pic-Container'>                    
                    {/* Carousel */}
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Link to={`/project/2`} className='project__Link'>
                                    <img src={Pic1} className="d-block w-100 home__Pic" alt="..." />
                                </Link>                                
                            </div>
                            <div className="carousel-item">
                                <Link to={`/project/1`} className='project__Link'>
                                    <img src={Pic2} className="d-block w-100 home__Pic" alt="..." />
                                </Link>
                            </div>     
                            <div className="carousel-item">
                                <Link to={`/project/3`} className='project__Link'>
                                    <img src={Pic3} className="d-block w-100 home__Pic" alt="..." />
                                </Link>
                            </div>                         
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>                
            </main>
        </motion.div>
    )
}

export default Home