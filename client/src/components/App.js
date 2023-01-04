
import '../App.css';
import React from 'react';
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from "./Dashboard";
import Search from "./Search";
import Activity from "./Activity";
import TopicForm from "./TopicForm";
import Saved from "./Saved";
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

  function handleAddPost(p) {
    const newF = forums.filter((forum) => {
      if (forum.posts.length !== p.posts.length) {
        return forum
      }
      else {
        return p
      }
    })
    setForums(newF);
  }

  console.log(user)
  console.log(forums)
  return (
    <div className='App'>
      <Header setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Dashboard forums={forums}/>}/>
        <Route path='/search' element={<Search browse={forums}/>}/>
        <Route path='/activity' element={<Activity user= {user}/>}/>
        <Route path='/topicForm' element={<TopicForm/>}/>
        <Route path="/saved" element={<Saved/>}/>
        {forums.map((page) => {
          return <Route path={`/${page.id}`} element={<ForumPage key={page.id} user={user} handleAddPost={handleAddPost} page={page}/>} />
        })}
      </Routes>
    </div>
  );
}

export default App;
