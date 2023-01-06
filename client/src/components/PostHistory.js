import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PostHistory({ post }) {
    const postTime = post.forum.updated_at
  return (
    <div className="postHistory">
      <Card sx={{ maxWidth: "45%", m: "10px", textAlign: "left", ml: "27%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                User: {post.user.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Forum: {post.forum.topic}
            </Typography>
            <br></br>
            <Typography variant="body2" color="text.secondary">{post.content}</Typography>
            <br></br>
            <Typography variant="body2" color="text.secondary">{postTime}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
