import { motion, easeOut } from "framer-motion";

const SectionMotionContainer = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: 1,
                ease: easeOut,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default SectionMotionContainer;