
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

  function handleForumState(page) {
    const updatedForums = forums.map((forum) => {
      if(forum.id === page.id) {
        return page;
      }
      else {
        return forum;
      }
    })
    return setForums(updatedForums);
  }

  function handleUserState(post) {
    // const usah = {...user}
    // const updateUser = usah.posts.push(post);
    setUser(user)
  }

  const uniqueIds = [];
  const unique = user.forums.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);
    if (!isDuplicate) {
      uniqueIds.push(element.id);
      return true;
    }
    return false;
  });

  return (
    <div className='App'>
      <Header setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Dashboard user={unique} forums={forums}/>}/>
        <Route path='/search' element={<Search forums={forums} setForums={setForums}/>}/>
        <Route path='/activity' element={<Activity user= {user}/>}/>
        {forums.map((page) => {
          return <Route path={`/${page.id}`} element={<ForumPage key={page.id} user={user} page={page} handleForumState={handleForumState} handleUserState={handleUserState}/>} />
        })}
      </Routes>
    </div>
  );
}

export default App;
