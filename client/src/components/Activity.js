import React from "react";
import PostHistory from "./PostHistory";
export default function Activity({user}) {
    console.log(user)

    return(
        <div className="postHistory">
            <h1>Recent Activity</h1>
            {user.posts.length > 0 ? user.posts.map((p) => {
                return <PostHistory key={p.id} post={p}/>
            }) : "No Posts Yet!"
            }
        </div>
    )
}

