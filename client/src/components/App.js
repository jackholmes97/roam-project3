<<<<<<< HEAD

import '../App.css';
import React from 'react';
=======
import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Login from './Login';
>>>>>>> emily1
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from "./Dashboard";
import Search from "./Search";
<<<<<<< HEAD
import Activity from "./Activity";
import TopicForm from "./TopicForm";
import Saved from "./Saved";
import Login from './Login';


=======
import Activity from "./Activity.js";
import TopicForm from "./TopicForm";
import Saved from "./Saved";
>>>>>>> emily1

function App() {

  const [user, setUser] = useState(null)
<<<<<<< HEAD
=======
  
>>>>>>> emily1

  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  },[])
<<<<<<< HEAD

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
=======
  if (!user) return <Login onLogin={setUser} />;

  useEffect(() => {
    fetch("/forums")
      .then((r) => r.json())
      .then(setForums);
  }, []);

  return (
    <div className='App'>
      <Header setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
>>>>>>> emily1
        <Route path='/search' element={<Search/>}/>
        <Route path='/activity' element={<Activity/>}/>
        <Route path='/topicForm' element={<TopicForm/>}/>
        <Route path="/saved" element={<Saved/>}/>
      </Routes>
    </div>
  );
<<<<<<< HEAD
=======

>>>>>>> emily1
}

export default App;
