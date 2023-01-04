
import '../App.css';
import React from 'react';
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from "./Dashboard";
import Search from "./Search";
import Activity from "./Activity";
import Login from './Login';
import ForumPage from './ForumPage';



function App() {

  const [user, setUser] = useState(null)

  const [forums, setForums] =useState([])

  useEffect(() => {
    fetch("/forums")
      .then((r) => r.json())
      .then(setForums);
  }, []);

  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[])

  if (!user) return <Login onLogin={setUser} />;

  const uniqueIds = [];

  const unique = (user.forums).filter(element => {
    const isDuplicate = uniqueIds.includes(element.id)
    if (!isDuplicate) {
      uniqueIds.push(element.id)
      return true
    }
    return false; 
  })
  console.log(unique)
  console.log(user)
  console.log(forums)
  return (
    <div className='App'>
      <Header setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Dashboard favs={unique} forums={forums}/>}/>
        <Route path='/search' element={<Search forums={forums} setForums={setForums}/>}/>
        <Route path='/activity' element={<Activity user= {user}/>}/>
        {forums.map((page) => {
          return <Route path={`/${page.id}`} element={<ForumPage key={page.id} user={user} page={page}/>} />
        })}
      </Routes>
    </div>
  );
}

export default App;
