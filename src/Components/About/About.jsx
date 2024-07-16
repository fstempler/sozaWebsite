// Images
import ArqPic1 from '../../assets/About/ArqPic1.jpg';
import ArqPic2 from '../../assets/About/ArqPic2.jpg';
//Hooks
import { motion } from 'framer-motion';
//Style
import './about.css';
//Components
import Title from '../Title/Title'


const About = () => {
    return (
        
        <motion.div 
        className='about__Main-Container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }
        >
            
            <div className='about__Text-Container'>                
                <div className='about__Title-Container'>
                    <Title title={'About'}  />
                </div>
                    <h3 className='about__Title'>History</h3>
                        <p className='about__Text'>
                            With more than 20 years experience in the Brisbane construction industry, SOZA director Scott Armour has established strong, trust-based relationships and a track record of high-end residential, multi-residential and large commercial projects completed on time and within budget.
                            The SOZA team is guided by Scott’s collaborative approach to delivering high-quality construction projects in line with the client’s vision and financial requirements.
                            SOZA has a number of active inner suburban sites that demonstrate Scott’s energy and commitment to safe, productive workplaces.
                </p> 
                <h3 className='about__Title'>VALUES AND VISION</h3>
                <p className='about__Text'>
                Scott wants the best advertisement for SOZA’s next project to be the last one it completed. He plans to do this by:
                </p>
                <p className='about__Text'>
                Being honest    
                </p>
                <p className='about__Text'>
                Listening to his clients
                </p>
                <p className='about__Text'>
                Managing his team collaboratively
                </p>
                <p className='about__Text'>
                Dealing with SOZA’s sub-contractors and suppliers fairly
                </p>
                <p className='about__Text'>
                Delivering exceptional outcomes
                </p>                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className='about__Text'>
                References available upon request. 
                </p>                
            </div>
            <div className='about__Img-Container'>                
                <img className='about__Img' src={ArqPic1} />                                
            </div>
        </motion.div>
    )
}

export default About;