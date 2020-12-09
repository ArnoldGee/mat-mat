import React from 'react';
import {connect} from 'react-redux';
import {AnimatePresence} from 'framer-motion';

import './App.css';

import Background from './components/Background';
import UserCard from './components/UserCard';
import Title from './components/Title';
import Menu from './components/Menu';
import GameSelector from './components/GameSelector';
import GameControls from './components/GameControls';
import QuestionMenu from './components/QuestionMenu';
import Question from './components/Question'

const App = ({game}) => {
  let questionPanel;
  if (game !== null) {
    const currentQuestion = [game.questions[game.currentQuestion]]
    questionPanel = currentQuestion.map((question)=><QuestionMenu key={question._id}><Question>{question._id}</Question></QuestionMenu>);
  }
  return (
    <div style={{padding: '10px'}}>
      <Background />
      <UserCard />
      <AnimatePresence>
        {game === null ? <Title /> : questionPanel}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {game === null ? (
          <Menu key="game-selector">
            <GameSelector />
          </Menu>
        ) : (
          <Menu key="controls">
            <GameControls />
          </Menu>
        )}
      </AnimatePresence>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

export default connect(mapStateToProps)(App);
