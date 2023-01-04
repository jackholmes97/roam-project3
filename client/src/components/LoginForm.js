import {useState} from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
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