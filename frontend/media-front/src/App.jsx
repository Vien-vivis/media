import PostList from "./PostList";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="avatar-me">Я</div>
        <h1>WhatsApp</h1>
      </header>
      <main className="app-main">
        <PostList />
      </main>
    </div>
  );
}