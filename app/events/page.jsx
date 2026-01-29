"use client";

import { useState } from "react";
import EventCard from "../../components/EventCard";
import { events, categories } from "../../data/data";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">IT Събития</h1>
          <p className="text-xl opacity-90">
            Разгледайте всички предстоящи и минали IT събития в България
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === "all"
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-700 hover:bg-primary-50"
            }`}
          >
            Всички ({events.length})
          </button>
          {categories.map((category) => {
            const count = events.filter(
              (e) => e.category === category.name,
            ).length;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-primary-50"
                }`}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">
              Няма намерени събития в тази категория
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
