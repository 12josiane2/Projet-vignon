import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "Comment l'IA transforme l'éducation des enfants",
    excerpt: "Découvrez comment l'intelligence artificielle révolutionne l'apprentissage et ouvre de nouvelles perspectives pour les jeunes apprenants.",
    date: "15 Mai 2025",
    author: "Dr. Sophie Durand",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Éducation"
  };

  const posts = [
    {
      title: "5 activités ludiques pour initier les enfants à l'IA",
      excerpt: "Des idées simples et amusantes pour introduire les concepts d'IA aux enfants de tous âges.",
      date: "10 Mai 2025",
      author: "Marie Leclerc",
      image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Activités"
    },
    {
      title: "Les meilleurs livres sur l'IA pour enfants",
      excerpt: "Notre sélection de livres adaptés qui expliquent l'intelligence artificielle de manière accessible.",
      date: "5 Mai 2025",
      author: "Thomas Martin",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Ressources"
    },
    {
      title: "Intelligence artificielle vs. intelligence humaine",
      excerpt: "Comment expliquer aux enfants la différence entre l'IA et l'intelligence humaine ?",
      date: "28 Avril 2025",
      author: "Prof. Jean Dupont",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Éducation"
    },
    {
      title: "Les clubs VIGNON : un succès grandissant",
      excerpt: "Découvrez comment les clubs VIGNON transforment l'apprentissage de l'IA dans les écoles.",
      date: "22 Avril 2025",
      author: "Camille Dubois",
      image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Clubs"
    },
    {
      title: "L'éthique de l'IA expliquée aux enfants",
      excerpt: "Comment aborder les questions éthiques liées à l'IA avec les jeunes de manière adaptée ?",
      date: "15 Avril 2025",
      author: "Dr. Émilie Rousseau",
      image: "https://images.pexels.com/photos/8438920/pexels-photo-8438920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Éthique"
    },
    {
      title: "Retour sur notre dernière compétition d'IA junior",
      excerpt: "Les moments forts et les projets impressionnants de notre dernière compétition pour les jeunes.",
      date: "10 Avril 2025",
      author: "Julien Leroy",
      image: "https://images.pexels.com/photos/8363775/pexels-photo-8363775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Événements"
    }
  ];

  const categories = [
    "Tous", "Éducation", "Activités", "Ressources", "Événements", "Clubs", "Éthique", "Technologies"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-display mb-4">Blog Éducatif</h1>
            <p className="text-white/80 text-lg mb-8">
              Découvrez nos articles, conseils et actualités sur l'IA pour les enfants et adolescents.
            </p>
            <div className="relative max-w-lg">
              <input 
                type="text" 
                placeholder="Rechercher un article..."
                className="w-full px-5 py-3 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-300"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white shadow-sm py-4 sticky top-[72px] z-10">
        <div className="container-custom">
          <div className="flex overflow-x-auto gap-3 py-1 no-scrollbar">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container-custom py-12">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <a href="#" className="btn btn-primary inline-flex items-center justify-center">
                  Lire l'article
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-display mb-6">Articles récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <a href="#" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                    Lire la suite
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="btn btn-outline">
              Voir plus d'articles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
