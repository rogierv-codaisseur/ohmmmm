import React from 'react';
import { Link } from 'react-router-dom';
import './preGameScreen.css'

const PreGameScreen = (props) => {
  return (
    <div className="Splash">
      <div className="Logo">
        <Link to={{ pathname: '/game', state: { timeInSec: props.setTime } }}>
          <img src="../assets/Logo.png" alt="logo"/>
        </Link>
      </div>
      <div className="Footer">
        <p>Made with ❤ at <Link to="https://codaisseur.com/">Codaisseur</Link></p>
      </div>
    </div>
  );
};

export default PreGameScreen;
