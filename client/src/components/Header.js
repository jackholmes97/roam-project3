import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header( ){
   
    return(
        <div>
            <h3>Rome</h3>
            <NavLink to="/" end>
                Dashboard
            </NavLink > 
            <NavLink to="/search" end>
                Search
            </NavLink > 
            <NavLink to="/activity" end>
                Activity
            </NavLink >   
            <NavLink to="/topicForm" end>
                Create Topic
            </NavLink > 
              <NavLink to="/saved" end>
                Saved Topics
            </NavLink >       
            </div>
    );
}