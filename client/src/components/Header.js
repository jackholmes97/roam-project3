import React from 'react';
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <Stack spacing={2} direction="row" sx={{display:"flex", justifyContent: 'center'}}>
            <NavLink to="/" end>
            <Button  className= "nav-btn"variant="outlined" href="#outlined-buttons"  sx={{backgroundColor: "#FFE57F", color: "#00766C" }}>
                Dashboard
                </Button>
            </NavLink >
            <NavLink to="/search" end>
            <Button  className= "nav-btn"variant="outlined" href="#outlined-buttons" sx={{backgroundColor: "#FFE57F", color: "#00766C"}}>
                Search
                </Button>
            </NavLink >
            <NavLink to="/activity" end>
            <Button  className= "nav-btn"variant="outlined" href="#outlined-buttons" sx={{backgroundColor: "#FFE57F", color: "#00766C"}} >
                Activity
                </Button>
            </NavLink >
            <Button className= "nav-btn"variant="outlined" href="#outlined-buttons" sx={{backgroundColor: "#FFE57F", color: "#00766C"}}  onClick={handleLogoutClick}>
            Logout
            </Button>
            </Stack>
        </div>
    );
}