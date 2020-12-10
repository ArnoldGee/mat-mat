import React from 'react';
import {motion} from 'framer-motion'
import {connect} from 'react-redux'

import './QuestionMenu.css'

const QuestionMenu = ({children, isCorrect}) => {
  const isCorrectClassName = isCorrect === true ? 'question-menu--is-correct' : isCorrect === false ? 'question-menu--is-not-correct' : ''
  return (
    <motion.div 
    initial={{scale: 0, opacity: 0, x: '-50%'}}
    animate={{scale: 1, opacity: 1, x: '-50%'}}
    exit={{opacity: 0, x: '-50%'}}
    className={`question-menu ${isCorrectClassName}`}>
      {children}
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  isCorrect: state.game.questions[state.game.currentQuestion].isCorrect
})

export default connect(mapStateToProps)(QuestionMenu);
