import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/SignIn.scss';

const SignUp = () => {
  return (
    <div id='signin-container'>
      <h1>Techstackr</h1>
      <div id='signin-modal-container'>
        <div id='signup-intro'>
          Sign up to share your thoughts<br></br> on your favorite dev
          languages, frameworks, and libraries
        </div>
        <form action='/signup' method='post'>
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
              id='new-password'
              name='password'
              type='password'
              placeholder='Password'
              required></input>
          </section>
          <button type='submit'>Sign up</button>
        </form>
        <div className='sign-in-modal'>
          Have an account?
          <Link to='/signup' className='accent-link'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
