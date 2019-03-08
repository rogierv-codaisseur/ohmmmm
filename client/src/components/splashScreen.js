import React from 'react';
import { Link } from 'react-router-dom';
import './splashScreen.css'

const SplashScreen = () => {
  return (
    <div className="Splash">
      <div className="Logo">
        <Link to="/player-selection">
          <img src="../assets/Logo.png" alt="logo"/>
        </Link>
      </div>
      <div className="Footer">
        <p>Made with ❤ at <Link to="https://codaisseur.com/">Codaisseur</Link></p>
      </div>
    </div>
  );
};

export default SplashScreen;
