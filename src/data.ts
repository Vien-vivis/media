export interface Post {
  id: string;
  content: string;
  author: string;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: "1",
    content: "В любом процессе важна не скорость, а удовольствие",
    author: "J.Stathem",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    content:
      "У каждого из нас есть достоинства, за которые стоит простить недостатки",
    author: "J.Stathem",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    content:
      "Неважно, насколько красивы ваши слова, судить я буду по поступкам",
    author: "J.Stathem",
    createdAt: new Date().toISOString(),
  },
];
