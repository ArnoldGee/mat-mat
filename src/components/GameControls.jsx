import React from 'react';
import {connect} from 'react-redux';
import './GameControls.css';

import Button from './Button';
import {updateUserAnswer} from '../actions';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const GameControls = ({userAnswer, updateUserAnswer}) => {
  const handleNumberClick = (number) => {
    updateUserAnswer(parseInt(`${userAnswer}${number}`));
  };
  return (
    <div className="game-controls">
      {numbers.map((number) => (
        <Button
          key={number}
          onClick={() => handleNumberClick(number)}
          direction={'rounded'}
        >
          <span className="game-controls__numbers">{number}</span>
        </Button>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {currentQuestion} = state.game;
  return {
    userAnswer: state.game.questions[currentQuestion].answer,
  };
};

export default connect(mapStateToProps, {updateUserAnswer})(GameControls);
