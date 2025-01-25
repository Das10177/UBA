import { useState, useEffect } from "react";
import { CalendarIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios"; // Import axios for API requests

export default function Recent() {
  // State to store posts
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title: "Placeholder Post 1",
      body: "This is placeholder content.",
      date: "2022-01-01",
      thumbnail: "https://via.placeholder.com/150",
      author: "Placeholder Author",
    },
    {
      id: 2,
      title: "Placeholder Post 2",
      body: "This is placeholder content.",
      date: "2022-01-02",
      thumbnail: "https://via.placeholder.com/150",
      author: "Placeholder Author",
    },
  ]);

  // Function to fetch posts from backend (when available)
  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://your-api.com/posts");
      setRecentPosts(response.data); // Replace mock data with API data
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    // Simulate an API call (replace with real API when ready)
    setTimeout(fetchPosts, 2000); // Mock delay of 2 seconds
  }, []);

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
                  alt={post.title}
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
