import './contact.css'

//Components
import Title from '../Title/Title'

import contact1 from '../../assets/Contact/contact1.jpg'

const Contact  = () => {
    return (
        <section className='contact__Main-container'>
            <div className='text__Container'>                
                <Title title="Contact" />
                <p className='contact__Text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi et odit beatae animi expedita, iure reprehenderit magnam neque? Blanditiis, fugit?</p>
                <img src={contact1} alt='Contact Image' className='contact__Img' />
            </div>
            <div className='form__Container'>
                <form>
                    <div className="mb-3">                        
                        <input type="email" className="form-control-sm contact__Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>                        
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control-sm contact__Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>                                                
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control-sm contact__Input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone'/>                                                
                    </div>
                    <div className="mb-3">                        
                        <textarea className="form-control-sm contact__Input" id="exampleFormControlTextarea1" rows="5" placeholder='Message'></textarea>
                    </div>                    
                    <button type="submit" className="btn contact__Form-Btn">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact