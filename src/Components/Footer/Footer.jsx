import './footer.css'



const  Footer = () => {
    return (
        <footer className='footer__Container'>
            {/* <img src={Logo} className='footer__Logo'/> */}
            <div className='footer__Social-Container'>
                <i className="bi bi-instagram socialIcon"></i>
                <i className="bi bi-facebook socialIcon"></i>
                <i className="bi bi-linkedin socialIcon"></i>
            </div>
            <div className='footer__Mail-Container'>
                <a href='mailto:scott@sozaprojects.com.au'>
                    <h6 className='footer__Copyright'>scott@sozaprojects.com.au</h6>
                </a>
            </div>
            
            
            <h6 className='footer__Copyright'>Made by Federico M. Stempler</h6>
        </footer>
    )
}

export default Footer;