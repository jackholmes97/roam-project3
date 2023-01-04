import React from "react";

export default function PostCard({post}) {
    return (
        <div className="forumPost">
            <h2>{post.title}</h2>
            <p>From: {post.user.username}</p>
            <h4>{post.content}</h4>
        </div>
    )
}