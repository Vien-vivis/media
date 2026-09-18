export default function Post({ content, author, createdAt, avatarUrl, likes }) {
  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <article className="post">
      <header className="post-header">
        {avatarUrl ? (
          <img src={avatarUrl} alt={author} className="post-avatar" />
        ) : (
          <div className="post-avatar post-avatar-placeholder">
            {author?.[0]?.toUpperCase() || "?"}
          </div>
        )}
        <div className="post-author-info">
          <div className="post-author-name">{author || "Аноним"}</div>
          <div className="post-author-handle">в сети</div>
        </div>
      </header>

      <div className="post-bubble">
        <p className="post-content">{content}</p>
        <div className="post-meta">
          <span>{formattedTime}</span>
          <span className="post-likes">❤ {likes || 0}</span>
        </div>
      </div>
    </article>
  );
}