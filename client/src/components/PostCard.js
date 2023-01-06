import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function PostCard({post}) {
    const postTime = post.forum.updated_at.split("T")
    return (
        <div className="forumPost">
            <Card sx={{ maxWidth: "45%", m: "10px", textAlign: "left", ml: "27%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.forum.topic}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Title: {post.title}
                
            </Typography>
            <Typography variant="body2" color="text.secondary">{post.content}</Typography>
            <Typography variant="body2" color="text.secondary">Posted: {postTime[0]}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </div>
    )
}