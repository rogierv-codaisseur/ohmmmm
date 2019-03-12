import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './gameResultScreen.css';

const GameResultScreen = ({ top5 }) => {
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
      <p className="LilyText">Awesome job, you managed to collect /score/ Ohmmmms.</p>
      <Link className="GameLink" to="/game-selection">
        back to Game Selection
      </Link>
    </div>
  );
};

GameResultScreen.propTypes = {
  top5: PropTypes.array
};

GameResultScreen.defaultProps = {
  top5: null
};

export default GameResultScreen;
