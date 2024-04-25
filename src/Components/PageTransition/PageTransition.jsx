import './pageTransition.css';
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    return (
        <motion.div
            className='page-transition'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition;