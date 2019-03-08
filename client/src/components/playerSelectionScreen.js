import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './playerSelectionScreen.css'
// import {login} from '../actions/auth'
import ShapePickerGroup from './shapePicker';

const PlayerSelectionScreen = ({ onSubmit, onChange, values }) => {
  const { name } = values;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={onChange} />
        <ShapePickerGroup />
        <input type="submit" value="Login" />
      </form>
    </div>
   )
}
    

// const PlayerSelectionScreen = () => {
//   return (
//     <div className="Splash">
//       <div className="LogoLogin">
//         <Link to="/game-selection">
//           <img src="../assets/Logo.png" alt="logo"/>
//         </Link>
//       </div>
//       <div className="FormLogin">
//         <div className="ExistingUser" onClick={login}>
//           <p>Current User Name</p>
//           <ShapePickerGroup />
//         </div>
//         <div className="Logout">
//           <p>Log out</p>
//         </div>
//         <Link className="Login" to="/player-creation">Sign up</Link>
//       </div>
//     </div>
//   );
// };

PlayerSelectionScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PlayerSelectionScreen;
