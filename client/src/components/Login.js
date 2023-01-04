<<<<<<< HEAD
import { useState } from 'react';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
        <div className='login'>
            <h1>Rome</h1>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <br/>
                <p>
                Don't have an account? &nbsp;
                <button onClick={() => setShowLogin(false)}>
                    Sign Up
                </button>
                </p>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <br></br>
                <p>
                Already have an account? &nbsp;
                <button onClick={() => setShowLogin(true)}>
                    Log In
                </button>
                </p>
            </>
            )}
        </div>
    );

}

export default Login;










=======
import { useState } from 'react'
function Login({user, setUser}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    .then( res => res.json() )
    .then( data => {
      if (data.id) {
        // setError('')
        setUser( data )
      } else if (data.errors) {
        setError(data.errors)
      }
    })
  }
  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)
  if (user && user.id) {
    return (
      <div>
      Already logged in!
      </div>
    )
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <p style={{color: 'red'}}>{error ? error : null}</p>
        <p>Login:</p>
        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />
        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />
        <input
          type="submit" value="Login"
        />
      </form>
      <button  />
    </div>
  )
}
export default Login
>>>>>>> emily1
