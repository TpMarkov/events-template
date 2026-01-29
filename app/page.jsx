'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import EventCard from '../components/EventCard';
import NewsCard from '../components/NewsCard';
import RatingCard from '../components/RatingCard';
import { events, ratings, news, categories, speakers, externalEvents } from '../data/data';
import { Calendar, Star, Users, TrendingUp, ArrowRight, ExternalLink, Zap, Award, Globe } from 'lucide-react';

export default function Home() {
  const featuredEvents = events.slice(0, 4);
  const topRatings = ratings.slice(0, 5);
  const recentNews = news.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { value: events.length, label: 'Събития', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { value: categories.length, label: 'Категории', icon: Zap, color: 'from-purple-500 to-purple-600' },
    { value: ratings.reduce((acc, r) => acc + r.totalVotes, 0), label: 'Отзива', icon: Star, color: 'from-yellow-500 to-yellow-600' },
    { value: events.reduce((acc, e) => acc + e.participants, 0).toLocaleString(), label: 'Участници', icon: Users, color: 'from-green-500 to-green-600' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
            alt="Technology Conference"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Най-добрият портал за IT събития в България</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Открийте най-добрите
              <span className="block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                IT събития
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Рейтингова система за технологични конференции, meetup-ове и workshop-ове. 
              Споделете вашия опит и помогнете на общността да расте.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/events"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
              >
                <Calendar className="w-5 h-5" />
                Разгледай събития
              </Link>
              <Link 
                href="/ratings"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Star className="w-5 h-5" />
                Виж рейтинги
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Категории</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Разгледайте събития по категории и намерете най-подходящите за вас
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Link 
                  href={`/events?category=${category.name}`}
                  className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 block"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.label}</h3>
                  <p className="text-sm text-gray-500">{category.count} събития</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Препоръчани събития</h2>
              <p className="text-gray-600">Най-високо оценените събития от общността</p>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-4 md:mt-0">
              Виж всички
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredEvents.map((event, index) => (
              <motion.div key={event.id} variants={itemVariants}>
                <EventCard event={event} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Ratings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Топ рейтинги</h2>
              <p className="text-gray-600">Класация на най-добрите IT организатори</p>
            </div>
            <Link href="/ratings" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-4 md:mt-0">
              Виж пълната класация
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {topRatings.map((rating, index) => (
              <motion.div key={rating.id} variants={itemVariants}>
                <RatingCard rating={rating} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Лектори</h2>
            <p className="text-gray-600">Водещи експерти от технологичната индустрия</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{speaker.name}</h3>
                <p className="text-sm text-primary-600 mb-1">{speaker.role}</p>
                <p className="text-xs text-gray-500">{speaker.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* External Events Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-6 h-6" />
                <span className="text-white/80 text-sm font-medium">От цял свят</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Предстоящи глобални събития</h2>
              <p className="text-white/80">Интегрирани от Eventbrite и Meetup</p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {externalEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                    {event.source}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{event.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                  <a 
                    href={event.url}
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    Виж повече
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Последни новини</h2>
              <p className="text-gray-600">Актуална информация от технологичната общност</p>
            </div>
            <Link href="/news" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-4 md:mt-0">
              Виж всички
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {recentNews.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants}>
                <NewsCard news={item} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Искате да добавите вашето събитие?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90 mb-8"
              >
                Свържете се с нас и станете част от най-голямата IT общност в България
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <TrendingUp className="w-5 h-5" />
                  Свържете се с нас
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
