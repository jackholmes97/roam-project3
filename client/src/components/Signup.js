import { useState } from 'react'

function Signup({user, setUser}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault()
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  return (
    <div>
      <form onSubmit={handleLogin}>

        <p>Signup:</p>

        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />

        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />

        <input
          type="submit" value="Signup"
        />

      </form>
    </div>
  )
}

export default Signup