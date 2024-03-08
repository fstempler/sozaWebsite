import './navbar.css'
import Logo from '../../../public/Logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-trasnsparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} className='navbar_Logo'/></a>
                <button className="navbar-toggler ms-auto hidden-lg-up pull-right toggler__Toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-flex ms-auto align-items-end navbar-nav ml-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link active navbar__Link" aria-current="page" href="#">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active navbar__Link" aria-current="page" href="#">ABOUT</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link active navbar__Link" aria-current="page" href="#">CONTACT</a>
                        </li>                
                    </ul>     
                </div>
            </div>
        </nav>
    )
}

export default Navbar