import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header({setUser}){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
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
            <button onClick={handleLogoutClick}>Logout</button>   
        </div>
    );
}