
import { CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the recentPosts array directly in JavaScript
const recentPosts = [
  {
    id: 1,
    title: "Post 1",
    body: "This is the body of post 1",
    date: "2022-01-01",
    thumbnail: "https://via.placeholder.com/150",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Post 2",
    body: "This is the body of post 2",
    date: "2022-01-02",
    thumbnail: "https://via.placeholder.com/150",
    author: "Author 2",
  },
  {
    id: 3,
    title: "Post 3",
    body: "This is the body of post 3",
    date: "2022-01-03",
    thumbnail: "https://via.placeholder.com/150",
    author: "Author 3",
  },
  {
    id: 4,
    title: "Post 4",
    body: "This is the body of post 4",
    date: "2022-01-04",
    thumbnail: "https://via.placeholder.com/150",
    author: "Author 4",
  },
  {
    id: 5,
    title: "Post 5",
    body: "This is the body of post 5",
    date: "2022-01-05",
    thumbnail: "https://via.placeholder.com/150",
    author: "Author 5",
  },
  {
    id: 6,
    title: "Post 6",
    body: "This is the body of post 6",
    date: "2022-01-06",
    thumbnail:
      "https://images.unsplash.com/photo-1737251043885-1fa62cb12933?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Author 6",
  },
  {
    id: 7,
    title: "Post 7",
    body: "This is the body of post 7",
    date: "2022-01-07",
    thumbnail:
      "https://images.unsplash.com/photo-1737251043885-1fa62cb12933?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Author 7",
  },
];

export default function Recent() {
  return (
    <div className="bg-white shadow-sm">
      <h2 className="bg-blue-600 text-white px-4 py-2 text-lg font-semibold">
        RECENT
      </h2>
      <div className="divide-y divide-gray-100">
        {recentPosts.map((post) => (
          <article
            key={post.id}
            className="p-4 hover:bg-gray-50 transition-colors"
          >
            <Link href="#" className="flex gap-4 group">
              <div className="flex-shrink-0">
                <Image
                  src={post.thumbnail || "/placeholder.svg"}
                  alt=""
                  width={80}
                  height={60}
                  className="rounded object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-500">{post.body}</p>
                <div className="flex items-center text-gray-400 text-sm mt-2">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <time>{post.date}</time>
                  <UserIcon className="w-4 h-4 ml-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
