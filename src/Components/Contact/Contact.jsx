import './contact.css'
//Hooks
import { motion } from 'framer-motion';
//Components
import Title from '../Title/Title'
//EmailJS
import emailjs from '@emailjs/browser'

// import contact1 from '../../assets/Contact/contact1.jpg'

const Contact  = () => {
    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_bhvyc51', 'template_b28sojp', e.target, 'D3tXyW3ypk9Gx_xoa')
      .then((result) => {
        console.log(result.text);
        alert('Thank you!');
        e.target.reset(); 
    }, (error) => {
        console.log(error.text);
        alert('There was a problem. Please try again');
    });
    }
    return (
        <motion.div 
        className='contact__Main-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={ {opacity: 0, transition: {duration: 0.3}} }
        >
            {/* <div className='text__Container'>                
                <Title title="Contact" />
                <p className='contact__Text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi et odit beatae animi expedita, iure reprehenderit magnam neque? Blanditiis, fugit?</p>
                
            </div> */}
            <div className='form__Container'>
                <form onSubmit={sendEmail}>
                    <div className="mb-3">                        
                        <input type="text" className="form-control-sm contact__Input" id="validationDefault01" placeholder='Name' name='Name' required/>                        
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control-sm contact__Input" id="validationDefault02" placeholder='Email' name='Email' required/>                                                
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control-sm contact__Input" id="validationDefault03" placeholder='Phone' name='Phone' required/>                                                
                    </div>
                    <div className="mb-3">                        
                        <textarea className="form-control-sm contact__Input" id="validationDefault04" rows="5" placeholder='Message' name='Message' required></textarea>
                    </div>                    
                    <button type="submit" className="btn contact__Form-Btn">Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default Contact