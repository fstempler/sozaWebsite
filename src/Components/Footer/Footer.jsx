import './footer.css'

import Logo from '../../../public/Logo.png';

const  Footer = () => {
    return (
        <footer className='footer__Container'>
            {/* <img src={Logo} className='footer__Logo'/> */}
            <div className='footer__Social-Container'>
                <i className="bi bi-instagram socialIcon"></i>
                <i className="bi bi-facebook socialIcon"></i>
                <i className="bi bi-linkedin socialIcon"></i>
            </div>
            <h6 className='footer__Copyright'>Made by Federico M. Stempler</h6>
        </footer>
    )
}

export default Footer;