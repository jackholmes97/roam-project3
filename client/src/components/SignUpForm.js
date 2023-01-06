import { useState } from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from '@mui/material/Button';

function SignUpForm({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        password_confirmation: passwordConfirmation,
      }),
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
    <div className="signUpScreen">
        <h1>Sign Up</h1>
        <div className="signUpForm">
      <form onSubmit={handleSubmit}>
      <TextField
            sx={{ m: 1, width: "300px", background: "transparent" }}
            className="signup-input"
            id="margin-normal"
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        <TextField
            sx={{ m: 1, width: "300px", background: "transparent" }}
            className="signup-input"
            id="margin-normal"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        <OutlinedInput
                sx={{ m: 1, width: "300px", background: "transparent" }}
            id="outlined-adornment-password-signup"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            }
            label="Password"
            placeholder="Password"
            />
        <OutlinedInput
                sx={{ m: 1, width: "300px", background: "transparent" }}
            id="outlined-adornment-password-confirm-signup"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            }
            label="Confirm Password"
            placeholder="Confirm Password"
            />
        <Button type="submit" variant="outlined" sx={{ml: 14, mb: 1}}>Login</Button>
      </form>
      </div>
    </div>
  );
}
export default SignUpForm;
