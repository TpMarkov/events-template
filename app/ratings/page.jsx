"use client";

import { useState } from "react";
import RatingCard from "../../components/RatingCard";
import { ratings, categories } from "../../data/data";

export default function RatingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredRatings =
    selectedCategory === "all"
      ? ratings
      : ratings.filter((r) => r.category === selectedCategory);

  const sortedRatings = [...filteredRatings].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "votes") return b.totalVotes - a.totalVotes;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Рейтинги</h1>
          <p className="text-xl opacity-90">
            Топ класация на IT събития според оценките на общността
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 hover:bg-primary-50"
              }`}
            >
              Всички
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-primary-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <label className="text-gray-600 mr-2">Сортирай по:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="rating">Рейтинг</option>
              <option value="votes">Брой гласове</option>
            </select>
          </div>
        </div>

        {/* Ratings List */}
        <div className="space-y-4">
          {sortedRatings.map((rating) => (
            <div
              key={rating.id}
              className="flex items-center bg-white rounded-lg shadow-md p-6"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl mr-6 ${
                  rating.rank === 1
                    ? "bg-yellow-500"
                    : rating.rank === 2
                      ? "bg-gray-400"
                      : rating.rank === 3
                        ? "bg-amber-600"
                        : "bg-primary-600"
                }`}
              >
                {rating.rank}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">
                  {rating.name}
                </h3>
                <p className="text-gray-500">{rating.category}</p>
              </div>
              <div className="flex items-center mr-8">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-2 text-3xl font-bold text-gray-800">
                  {rating.rating}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">
                  {rating.totalVotes}
                </div>
                <div className="text-sm text-gray-500">гласа</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
