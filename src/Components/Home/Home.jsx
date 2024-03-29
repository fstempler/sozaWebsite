import './home.css'

// Images
import Pic1 from '../../../public/Projects/Morningside/1.png';
import Pic2 from '../../../public/Projects/Yeronga/1.jpg';
// import Pic3 from '../../assets/HomePage/Pic3.png';

const  Home = () => {
    return (
        <div className=''>
            <main className='home__Content'>
                <div className='home__Pic-Container'>                    
                    {/* Carousel */}
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Pic1} className="d-block w-100 home__Pic" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Pic2} className="d-block w-100 home__Pic" alt="..." />
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