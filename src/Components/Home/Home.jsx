import './home.css'

// Images
import Pic1 from '../../../public/Projects/Morningside/1.png';
import Pic2 from '../../../public/Projects/Yeronga/1.jpg';
//Hooks
import { Link } from 'react-router-dom';


const  Home = () => {
    return (
        <div className=''>
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
        </div>
    )
}

export default Home