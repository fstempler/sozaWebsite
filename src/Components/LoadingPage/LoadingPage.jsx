import './loadingPage.css';
import logo from  '../../../public/Logo.png';

const LoadingPage = () => {
    return (
        <div className="container__Loading">
            <img className='loadingImg' src={logo} alt='Soza Logo' />
        </div>
    )
}

export default LoadingPage