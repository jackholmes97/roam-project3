import React from "react";

export default function PostHistory({post}) {
    
    return (
        <div className="postHistory">
            <h2>{post.title}</h2>
            <h5>{post.created_at}</h5>
        </div>
    )
}