import './home.css'

// Images
import Pic1 from '../../assets/HomePage/Pic1.jpg';

const  Home = () => {
    return (
        <div className='container'>
            <main className='home__Content'>
                <div className='home__Pic-Container'>
                    <img className='home__Pic' src={Pic1} />
                </div>                
            </main>
        </div>
    )
}

export default Home