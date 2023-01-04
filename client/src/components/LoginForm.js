import {useState} from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
            (console.log(errors))
        }
      });
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default LoginForm;