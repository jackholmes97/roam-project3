import React from "react";
import PostHistory from "./PostHistory";
export default function Activity({user}) {
    console.log(user)
    let display = (user.posts).reverse()
    return(
        <div className="postHistory">
            <h1>Recent Activity</h1>
            {display.length > 0 ? display.map((p) => {
                return <PostHistory key={p.id} post={p}/>
            }) : "No Posts Yet!"
            }
        </div>
    )
}

