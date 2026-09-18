import { useState, useEffect } from "react";
import Post from "./Post";
import "./Post.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Не удалось загрузить посты");
        return res.json();
      })
      .then((response) => {
        if (!response.success) throw new Error("API вернул ошибку");
        setPosts(response.data.posts);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Загрузка...</p>;
  if (error) return <p className="status status-error">Ошибка: {error}</p>;
  if (posts.length === 0) return <p className="status">Постов пока нет</p>;

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
          avatarUrl={post.avatarUrl}
          likes={post.likes}
        />
      ))}
    </div>
  );
}