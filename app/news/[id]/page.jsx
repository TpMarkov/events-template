"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { news } from "../../../data/data";

export default function NewsDetailsPage() {
  const params = useParams();
  const newsId = parseInt(params.id);
  const item = news.find((n) => n.id === newsId);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Новината не е намерена
          </h1>
          <Link
            href="/news"
            className="text-primary-600 hover:text-primary-700"
          >
            ← Обратно към новини
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="text-white hover:text-gray-200 mb-4 inline-block"
          >
            ← Обратно към новини
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
              {item.category}
            </span>
            <span className="text-white/80">{item.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{item.title}</h1>
          <p className="mt-4 text-white/80">от {item.author}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {item.content}
          </p>

          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Сподели тази новина:
            </h3>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Facebook
              </button>
              <button className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                Twitter
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
