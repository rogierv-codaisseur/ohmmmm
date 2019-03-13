import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './gameResultScreen.css';

const GameResultScreen = ({ top5, lastScore }) => {
  return (
    <div className="GameResultSplash">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {top5.map(score => (
            <tr key={score.id}>
              <td>{moment(score.createdAt).format('DD MMM YYYY')}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="LilySpeak">
        <p className="LilyText">Awesome job, you managed to collect <br></br>{lastScore} Ohmmmms.</p>
        <img src="../assets/lilyspeak.png" alt="lily speak" />
      </div>
      <div className="Home">
        <Link to="/game-selection">
          <img src="../assets/home.png" alt="home"/>
        </Link>
      </div>
    </div>
  );
};

GameResultScreen.propTypes = {
  lastScore: PropTypes.string,
  top5: PropTypes.array
};

GameResultScreen.defaultProps = {
  lastScore: null,
  top5: null
};

export default GameResultScreen;
