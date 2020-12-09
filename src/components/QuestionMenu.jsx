import React from 'react';
import {motion} from 'framer-motion'

import './QuestionMenu.css'

const QuestionMenu = ({children}) => {
  return (
    <motion.div 
    initial={{scale: 0, opacity: 0, x: '-50%'}}
    animate={{scale: 1, opacity: 1, x: '-50%'}}
    exit={{opacity: 0, x: '-50%'}}
    className="question-menu">
      {children}
    </motion.div>
  );
};

export default QuestionMenu;
