import React, { useState,} from "react";
import PostHistory from "./PostHistory";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function ForumPage({ user, page, handleForumState, handleUserState }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(page.posts);

  function handleSubmit(e) {
    e.preventDefault();
    let newPost = {
      title: title,
      content: content,
      forum_id: page.id,
      user_id: user.id,
    };
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((r) => r.json())
      .then((data) => {
        setPosts([...posts, data])
        handleUserState(data)
        page.posts.push(data)
        handleForumState(page);
      });
    setTitle("");
    setContent("");
  }
  return (
    <div className="forum">
      <br></br>
      <Typography
        variant="body2"
        sx={{ fontSize: "2rem" }}
        color="text.secondary"
      >
        {page.subject.toUpperCase()}
      </Typography>
      <h1>{page.topic}</h1>
      {posts.length > 0 ? (
        posts.map((p) => {
          return <PostHistory key={p.id} post={p} />;
        })
      ) : (
        <h1>No Posts Yet!</h1>
      )}
      <h1>Add a Post</h1>
      <form className="add post" onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "19ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            sx={{ minWidth: "46%", r: "8px", background: "white" }}
            variant="filled"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br></br>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            rows={4}
            variant="filled"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ minWidth: "46%", r: "8px", background: "white" }}
            label="Content"
            required
          />
        </Box>
        <Button class="button-30" variant="outlined" type="submit" sx={{ mb: 20 }} value="Submit">
          Submit Forum
        </Button>
      </form>
    </div>
  );
}
