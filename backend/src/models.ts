import { posts, Post } from "./data.js";

export function getPosts(): Post[] {
  return posts;
}

export function getPostById(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}

export function createPost(content: string, author: string): Post {
  const newPost: Post = {
    id: Date.now().toString(),
    content,
    author: author || "Аноним",
    avatarUrl: `https://i.pravatar.cc/100?u=${Date.now()}`,
    likes: 0,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  return newPost;
}

export function deletePost(id: string): boolean {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
}