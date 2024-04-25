import './contact.css'
//Hooks
import { motion } from 'framer-motion';
//Components
import Title from '../Title/Title'

import contact1 from '../../assets/Contact/contact1.jpg'

const Contact  = () => {
    return (
        <motion.div 
        className='contact__Main-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }
        >
            <div className='text__Container'>                
                <Title title="Contact" />
                <p className='contact__Text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi et odit beatae animi expedita, iure reprehenderit magnam neque? Blanditiis, fugit?</p>
                <img src={contact1} alt='Contact Image' className='contact__Img' />
            </div>
            <div className='form__Container'>
                <form>
                    <div className="mb-3">                        
                        <input type="text" className="form-control-sm contact__Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' required/>                        
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control-sm contact__Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required/>                                                
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control-sm contact__Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone' required/>                                                
                    </div>
                    <div className="mb-3">                        
                        <textarea className="form-control-sm contact__Input" id="exampleFormControlTextarea1" rows="5" placeholder='Message' required></textarea>
                    </div>                    
                    <button type="submit" className="btn contact__Form-Btn">Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact