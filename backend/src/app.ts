import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  getAllPosts,
  getPost,
  createNewPost,
  removePost,
  notFound,
} from "./controllers.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// CORS — разрешаем фронтенду (Vite: 5173) обращаться к бэкенду
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.get("/api/posts", getAllPosts);
app.get("/api/posts/:id", getPost);
app.post("/api/posts", createNewPost);
app.delete("/api/posts/:id", removePost);

app.use(notFound);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});