"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { logos } from "../data/data";
import { Calendar, MapPin, Star, Users } from "lucide-react";

export default function EventCard({ event, index = 0 }) {
  const logoData = logos[event.logo];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt || event.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
            {event.categoryLabel}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-lg">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-bold text-gray-800">
            {event.rating}
          </span>
        </div>

        {/* Event Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
            {event.name}
          </h3>
          <p className="text-white/80 text-sm line-clamp-1">
            {event.shortName}
          </p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2 text-primary-500" />
            <span>
              {new Date(event.date).toLocaleDateString("bg-BG", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-primary-500" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2 text-primary-500" />
            <span>{event.participants.toLocaleString()} участници</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-lg font-bold text-primary-600">
            {event.price}
          </div>
          <Link
            href={`/events/${event.id}`}
            className="bg-primary-600 text-white px-5 py-2 rounded-xl hover:bg-primary-700 transition-colors font-medium text-sm shadow-lg shadow-primary-500/25"
          >
            Виж повече
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
