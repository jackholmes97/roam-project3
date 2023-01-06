import React, { useState } from "react";
import PostHistory from "./PostHistory";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function ForumPage({ user, page }) {
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
      .then(data => setPosts([...posts, data]))
    // console.log(page)
    setTitle("");
    setContent("");
  }
  return (
    <div className="forum">
      <h1>{page.topic}</h1>
      <p>{page.subject}</p>
      {posts.length > 0
        ? posts.map((p) => {
            return <PostHistory key={p.id} post={p} />;
          })
        : "No Posts Yet!"}
      <h1>Add a Post</h1>
    <form className="add post" onSubmit={handleSubmit}>
<Box
component="form"
sx={{
  '& > :not(style)': { m: 1, width: '19ch', },
}}
noValidate
autoComplete="off"
>
<TextField id="filled-basic" sx={{minWidth:"46%", r:"8px"}}  variant="filled" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
<br></br>
<TextField
          id="outlined-multiline-flexible"
          multiline
          rows={4}
          variant="filled"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{minWidth:"46%", r:"8px"}}
        />
</Box>
<Button variant="outlined" type="submit" sx={{mb: 10}} value="Submit" >Submit Forum</Button>
</form>
    </div>
  );
}
