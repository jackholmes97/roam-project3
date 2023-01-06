import { useState } from 'react';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
        <div className='login'>
            <div className='title'>
                <h1>Rome</h1>
            </div>
            {showLogin ? (
            <div className='loginn'>
                <LoginForm onLogin={onLogin} />
                <br/>
                <p id='register'>
                Don't have an account? &nbsp;
                <button id='signUpbtn' onClick={() => setShowLogin(false)}>
                    Sign Up
                </button>
                </p>
            </div>
            ) : (
            <div className='signupp'>
                <SignUpForm onLogin={onLogin} />
                
                <p>
                Already have an account? &nbsp;
                <button onClick={() => setShowLogin(true)}>
                    Log In
                </button>
                </p>
            </div>
            )}
        </div>
    );

}

export default Login;










