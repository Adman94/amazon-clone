import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provide, provider } from "./firebase";
import fbIcon from './img/fbIcon.png';

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const google = async (e) => {
    e.preventDefault();

    await auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.credentrial));
  };

  const microsoft = async (e) => {
    e.preventDefault();

    await auth
      .signInWithPopup(provide)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.credentrial));
  };

  return (
    <div className='Register'>
      <Link to='/'>
        <img
          className='Register__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      <div className='Register__container'>
        <h1>Create Amazon Account</h1>
        <form>
          <h5>Username</h5>
          <input
            type='text'
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button onClick={register} className='Register__register'>
          Create your Amazon Acount
        </button>
        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.
        </p>
        <div className='register_signin'>
          <p>Already Have An Account?</p>
          <Link className="login_link" to='/login'>
            <span>Log In</span>
          </Link>
        </div>
        <div className='social_login'>
          <button className='google continue' onClick={google} type='submit'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt=''
            />{" "}
            Continue with Google
          </button>
          <button
            className='fbBtn continue'
            onClick={microsoft}
            type='submit'
          >
            <img src={fbIcon} alt='' /> Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
