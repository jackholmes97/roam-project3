import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {
const [user, setUser] = useState("")
  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[]);

  return (
   <p>{user}</p>
  );
}

export default App;
