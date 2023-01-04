import React from "react";
import PostHistory from "./PostHistory";
export default function Activity({user}) {
    console.log(user)

    return(
        <div className="postHistory">
            {user.posts.length > 0 ? user.posts.map((p) => {
                return <PostHistory key={p.id} post={p}/>
            }) : "No Posts Yet!"
            }
        </div>
    )
}

// get  useEffect request to the posts, filtering our the newest posts and mapping over the filtered posts to create a single column
// get request in App, pass down the data 
