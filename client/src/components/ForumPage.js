import React, { useState, useEffect} from "react";
import PostCard from "./PostCard";
export default function ForumPage({ user, handleAddPost, page }) {
  console.log(page);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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
      .then(data => page.posts.push(data))
      .then(handleAddPost(page))
    setTitle("");
    setContent("");
  }
  return (
    <div className="forum">
      <h1>{page.topic}</h1>
      <p>{page.subject}</p>
      {page.posts.length > 0
        ? page.posts.map((p) => {
            return <PostCard key={p.id} post={p} />;
          })
        : "No Posts Yet!"}
      <h1>Add a Post</h1>
      <form className="add post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
