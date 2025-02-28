import React, { useState } from "react";

const categories = [
  "All",
  "Politics",
  "Economy",
  "Science",
  "Sports",
  "Technology",
];

const CurrentAffairsPost = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex flex-col relative  p-4">
      <div className="border p-4 rounded-lg shadow-lg bg-gray-100 ">
        <div className="mb-4 relative">
          <div className="group inline-block relative">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              DAILY CURRENT AFFAIRS
            </button>
            <div className="absolute left-0 mt-1 w-40 bg-white shadow-md rounded-md hidden group-hover:block z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <span className="text-gray-600 ml-2">-- February 16, 2025</span>
        </div>

        <div className="mb-4">
          <a href="https://www.kolom.in/2025/02/16th-february-2025-current-affairs-in-bengali.html">
            <img
              className="w-full rounded-lg"
              alt="16th February 2025 Current Affairs in Bengali"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo6PZu4K3dW0hvueDxOJ-JT0x9P74SDlAkCdixj54wK-5x6Udj_rGTrDCOsW00bPZ7Fr15MMLZGev8d5AFaG16UkxLhEPQHk5WQLkw9HmJhI9nQPEYuXvqwgvLh8EP6driPiehPvaysgDOaF6AdNSCsdwfwOoz-EGBaU3EzCyTzi5SV9GI4DivLWo6hrY/w991/photo_2025-02-16_10-28-26.jpg"
            />
          </a>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span>By</span>
          <a
            href="https://www.blogger.com/profile/03619205161391160336"
            className="text-blue-600 font-medium"
          >
            Kolom
          </a>
          <span>|</span>
          <span>February 16, 2025</span>
        </div>
        <h2 className="text-xl font-semibold mt-2">
          <a href="https://www.kolom.in/2025/02/16th-february-2025-current-affairs-in-bengali.html">
            16th February 2025 Current Affairs in Bengali
          </a>
        </h2>
        <p className="mt-2 text-gray-700">
          16th February 2025 Current Affairs in Bengali | ১৬ই ফেব্রুয়ারি ২০২৫
          কারেন্ট অ্যাফেয়ার্স...
        </p>
        <div className="mt-4 flex justify-between text-blue-500">
          <a href="#">No comments</a>
          <div className="flex gap-2">
            <a href="#" className="hover:text-blue-700">
              Share to X
            </a>
            <a href="#" className="hover:text-blue-700">
              Share to Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairsPost;
