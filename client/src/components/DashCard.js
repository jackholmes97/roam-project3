import React from "react";
import { NavLink } from "react-router-dom";
export default function DashCard({forum}) {
    return (
        <div className="Card">
            <NavLink to={`/${forum.id}`} >{forum.topic}</NavLink>
        </div>
    )
}