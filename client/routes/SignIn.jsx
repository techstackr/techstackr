import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/SignIn.scss';

const SignIn = () => {
  return (
    <div id='signin-container'>
      <h1>Techstackr</h1>
      <div id='signin-modal-container'>
        <form action='/login/password' method='post'>
          <section>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
              autoFocus
            />
          </section>
          <section>
            <input
              id='current-password'
              name='password'
              type='password'
              placeholder='Password'
              required></input>
          </section>
          <button type='submit'>Sign in</button>
        </form>
        <div className='sign-in-modal'>
          Don't have an account?
          <Link to='/signup' className='accent-link'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
