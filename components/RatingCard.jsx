"use client";

import { motion } from "framer-motion";
import { logos } from "../data/data";
import { Star, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function RatingCard({ rating, index = 0 }) {
  const logoData = logos[rating.logo];

  const TrendIcon =
    rating.trend === "up"
      ? TrendingUp
      : rating.trend === "down"
        ? TrendingDown
        : Minus;
  const trendColor =
    rating.trend === "up"
      ? "text-green-500"
      : rating.trend === "down"
        ? "text-red-500"
        : "text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            {/* Rank Badge */}
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                rating.rank === 1
                  ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                  : rating.rank === 2
                    ? "bg-gradient-to-br from-gray-300 to-gray-500"
                    : rating.rank === 3
                      ? "bg-gradient-to-br from-amber-500 to-amber-700"
                      : "bg-gradient-to-br from-primary-500 to-primary-700"
              }`}
            >
              {rating.rank}
            </div>

            {/* Logo */}
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${rating.color} flex items-center justify-center shadow-lg`}
            >
              <div
                className="w-8 h-8"
                dangerouslySetInnerHTML={{ __html: logoData?.svg || "" }}
              />
            </div>

            {/* Name */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">{rating.name}</h3>
              <span className="text-sm text-gray-500">{rating.category}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-xl">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 text-xl font-bold text-gray-800">
                {rating.rating}
              </span>
            </div>
            <TrendIcon className={`w-5 h-5 ${trendColor}`} />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">
                {rating.eventsCount}
              </span>
              <span>събития</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-700">
                {rating.totalVotes.toLocaleString()}
              </span>
              <span>гласа</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
