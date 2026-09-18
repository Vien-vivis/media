export interface Post {
  id: string;
  content: string;
  author: string;
  avatarUrl?: string;
  likes: number;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: "1",
    content: "В любом процессе важна не скорость, а удовольствие",
    author: "J.Stathem",
    avatarUrl: "https://i.pravatar.cc/100?img=12",
    likes: 3,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    content:
      "У каждого из нас есть достоинства, за которые стоит простить недостатки",
    author: "J.Stathem",
    avatarUrl: "https://i.pravatar.cc/100?img=12",
    likes: 7,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    content:
      "Неважно, насколько красивы ваши слова, судить я буду по поступкам",
    author: "J.Stathem",
    avatarUrl: "https://i.pravatar.cc/100?img=12",
    likes: 12,
    createdAt: new Date().toISOString(),
  },
];