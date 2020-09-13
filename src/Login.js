import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provide, provider } from "./firebase";
import fbIcon from './img/fbIcon.png';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
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
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
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
                    <button type='submit' onClick={signIn} className='login__signin'>
                        Sign In
          </button>
                    <div className='social_login'>
                        <p>Or</p>
                        <button className='google continue' onClick={google} type='submit'>
                            <img
                                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                                alt=''
                            />{" "}
              Sign in with Google
            </button>
                        <button
                            className='fbBtn continue'
                            onClick={microsoft}
                            type='submit'
                        >
                            <img src={fbIcon} alt='' /> Sign in with Facebook
            </button>
                    </div>
                </form>
                <p>
                    By continuing, you agree to Amazon's Clone Conditions of Use and
                    Privacy Notice.
        </p>
                <Link to='/register'>
                    <button className='login__register'>Create your amazon Acount</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
