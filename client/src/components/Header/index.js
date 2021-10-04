import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to='/'>
        <img src="https://fontmeme.com/permalink/211004/92c49000ccb03e03c69ab3d91133ebb3.png" alt="deep-thoughts" border="0"></img>        </Link>
        <nav className='text-center'>
          {Auth.loggedIn() ? (
            <>
              <Link to='/profile'>Me</Link>
              <a href="/" onClick={logout}>Logout</a>
            </>
          ) : (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
              </>
            )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
