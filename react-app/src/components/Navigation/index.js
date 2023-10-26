import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../Images/logo.png';
import github from '../Images/github.svg';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='nav-container'>
      <div className='left-container'>
        <div className='logo-container'>
          <NavLink to="/" id='landing-logo'>
            Robinclone <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className='github-links'>
          <div className='github-developer'>
          <a href="https://github.com/moogchoi">
            <div className='github'>
              <img
                id="github-logo"
                src={github}
                alt=""
              ></img>
            <div className='github-text'>Mugil Choi</div>
            </div>
            </a>
            <a href="https://github.com/jondiezv">
            <div className='github'>
              <img
                id="github-logo"
                src={github}
                alt=""
              ></img>
            <div className='github-text'>Jon Diez</div>
            </div>
            </a>
            <a href="https://github.com/atifrit">
            <div className='github'>
              <img
                id="github-logo"
                src={github}
                alt=""
              ></img>
            <div className='github-text'>Adam Tifrit</div>
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className="right-nav-container">
        {sessionUser ? (
          <><button onClick={handleLogout} className="login">
            Logout
          </button>
            <NavLink className="signup" to="/portfolio">
              Portfolio
            </NavLink></>
        ) : (
          <>
            <NavLink className="login" to="/login">
              Log in
            </NavLink>
            <NavLink className="signup" to="/signup">
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;
