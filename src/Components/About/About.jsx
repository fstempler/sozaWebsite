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
                <h3 className='about__Title'>Title 1</h3>
               <p className='about__Text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem ut atque esse saepe cupiditate porro magnam, eius odit rerum molestiae quae, deserunt assumenda facere inventore nobis quis iusto nisi vel blanditiis. Harum labore dolore quis quaerat molestiae eius illo praesentium ratione iste nemo cumque ab distinctio, neque totam dolorem!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit inventore nobis? Illo animi debitis, rerum minima necessitatibus at! Ducimus, vel repellendus. Voluptatem odio sint architecto non veritatis beatae, quaerat qui rerum eligendi exercitationem ea deserunt, veniam esse voluptatibus voluptas in tempore provident molestias consequuntur et doloribus aspernatur. Laboriosam, iste.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas reiciendis cum nisi quo, repellendus vel id omnis. Laudantium quasi sit ducimus deserunt ullam doloribus, est impedit quo. Officia esse nemo sint porro molestias dicta, neque inventore adipisci magni delectus voluptatum quod nulla eveniet obcaecati ad natus quia. Ea accusamus aperiam officiis consequuntur quos doloremque eius voluptatum deleniti architecto temporibus, commodi laborum recusandae, accusantium sapiente tempora, iure quidem eligendi? Accusantium nulla ut perspiciatis labore! Nisi autem cupiditate atque fugiat placeat eligendi perferendis quisquam repudiandae nostrum ipsam. Molestias voluptas architecto obcaecati nisi odit ut ratione molestiae dicta, sequi, reprehenderit repudiandae. Repudiandae, ab!
                </p> 
                <h3 className='about__Title'>Title 1</h3>
                <p className='about__Text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus perspiciatis error pariatur modi molestiae! Corporis cumque iusto aut earum quo, soluta at, autem, laborum reprehenderit in culpa quasi vel commodi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit inventore nobis? Illo animi debitis, rerum minima necessitatibus at! Ducimus, vel repellendus. Voluptatem odio sint architecto non veritatis beatae, quaerat qui rerum eligendi exercitationem ea deserunt, veniam esse voluptatibus voluptas in tempore provident molestias consequuntur et doloribus aspernatur. Laboriosam, iste.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas reiciendis cum nisi quo, repellendus vel id omnis. Laudantium quasi sit ducimus deserunt ullam doloribus, est impedit quo. Officia esse nemo sint porro molestias dicta, neque inventore adipisci magni delectus voluptatum quod nulla eveniet obcaecati ad natus quia. Ea accusamus aperiam officiis consequuntur quos doloremque eius voluptatum deleniti architecto temporibus, commodi laborum recusandae, accusantium sapiente tempora, iure quidem eligendi? Accusantium nulla ut perspiciatis labore! Nisi autem cupiditate atque fugiat placeat eligendi perferendis quisquam repudiandae nostrum ipsam. Molestias voluptas architecto obcaecati nisi odit ut ratione molestiae dicta, sequi, reprehenderit repudiandae. Repudiandae, ab!
                </p> 
                <h3 className='about__Title'>Title 1</h3>
                <p className='about__Text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus perspiciatis error pariatur modi molestiae! Corporis cumque iusto aut earum quo, soluta at, autem, laborum reprehenderit in culpa quasi vel commodi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit inventore nobis? Illo animi debitis, rerum minima necessitatibus at! Ducimus, vel repellendus. Voluptatem odio sint architecto non veritatis beatae, quaerat qui rerum eligendi exercitationem ea deserunt, veniam esse voluptatibus voluptas in tempore provident molestias consequuntur et doloribus aspernatur. Laboriosam, iste.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas reiciendis cum nisi quo, repellendus vel id omnis. Laudantium quasi sit ducimus deserunt ullam doloribus, est impedit quo. Officia esse nemo sint porro molestias dicta, neque inventore adipisci magni delectus voluptatum quod nulla eveniet obcaecati ad natus quia. Ea accusamus aperiam officiis consequuntur quos doloremque eius voluptatum deleniti architecto temporibus, commodi laborum recusandae, accusantium sapiente tempora, iure quidem eligendi? Accusantium nulla ut perspiciatis labore! Nisi autem cupiditate atque fugiat placeat eligendi perferendis quisquam repudiandae nostrum ipsam. Molestias voluptas architecto obcaecati nisi odit ut ratione molestiae dicta, sequi, reprehenderit repudiandae. Repudiandae, ab!
                </p> 
                <h3 className='about__Title'>Title 1</h3>
                <p className='about__Text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus perspiciatis error pariatur modi molestiae! Corporis cumque iusto aut earum quo, soluta at, autem, laborum reprehenderit in culpa quasi vel commodi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit inventore nobis? Illo animi debitis, rerum minima necessitatibus at! Ducimus, vel repellendus. Voluptatem odio sint architecto non veritatis beatae, quaerat qui rerum eligendi exercitationem ea deserunt, veniam esse voluptatibus voluptas in tempore provident molestias consequuntur et doloribus aspernatur. Laboriosam, iste.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas reiciendis cum nisi quo, repellendus vel id omnis. Laudantium quasi sit ducimus deserunt ullam doloribus, est impedit quo. Officia esse nemo sint porro molestias dicta, neque inventore adipisci magni delectus voluptatum quod nulla eveniet obcaecati ad natus quia. Ea accusamus aperiam officiis consequuntur quos doloremque eius voluptatum deleniti architecto temporibus, commodi laborum recusandae, accusantium sapiente tempora, iure quidem eligendi? Accusantium nulla ut perspiciatis labore! Nisi autem cupiditate atque fugiat placeat eligendi perferendis quisquam repudiandae nostrum ipsam. Molestias voluptas architecto obcaecati nisi odit ut ratione molestiae dicta, sequi, reprehenderit repudiandae. Repudiandae, ab!
                </p> 
            </div>
            <div className='about__Img-Container'>                
                <img className='about__Img' src={ArqPic1} />                
                <img className='about__Img' src={ArqPic2} />
            </div>
        </motion.div>
    )
}

export default About;