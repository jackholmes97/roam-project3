import React from 'react';
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';

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
            <div class="header">
            <h3 class="rome">Rome</h3>
            </div>
            <Stack spacing={2} direction="row" sx={{display:"flex", justifyContent: 'center', fontFamily: "Bodoni Moda"}}>
            <NavLink className="nav-link" to="/" end>
                <button class="button-30" role="button">Dashboard</button>
            </NavLink >
            <NavLink className="nav-link"  to="/search" end>
                <button class="button-30" role="button">Search</button>
            </NavLink >
            <NavLink className="nav-link" to="/activity" end>
                <button class="button-30" role="button">Activity</button>
            </NavLink >
            <button class="button-30" role="button" onClick={handleLogoutClick}>Logout</button>
            </Stack>
        </div>
    );
}