import React from "react";

export default function DashCard({forum}) {
    return (
        <div className="Card">
            <li>{forum.topic}</li>
        </div>
    )
}