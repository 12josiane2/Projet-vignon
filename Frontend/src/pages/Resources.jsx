import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText, Film, Book, Search, Filter } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tous', count: 24 },
    { id: 'guides', name: 'Guides', count: 8 },
    { id: 'worksheets', name: 'Fiches d\'activités', count: 6 },
    { id: 'videos', name: 'Vidéos', count: 5 },
    { id: 'books', name: 'Livres', count: 5 }
  ];

  const resources = [
    {
      title: "Guide d'introduction à l'IA pour les parents",
      type: "guide",
      format: "PDF",
      size: "2.4 MB",
      icon: <FileText size={24} className="text-primary-600" />,
      description: "Un guide complet pour aider les parents à introduire l'IA à leurs enfants de manière éducative et amusante."
    },
    {
      title: "10 activités d'IA sans ordinateur",
      type: "worksheets",
      format: "PDF",
      size: "1.8 MB",
      icon: <FileDown size={24} className="text-secondary-600" />,
      description: "Des activités pratiques pour comprendre les concepts d'IA sans avoir besoin d'un ordinateur."
    },
    {
      title: "Comment fonctionne un algorithme?",
      type: "videos",
      format: "MP4",
      duration: "5:24",
      icon: <Film size={24} className="text-green-600" />,
      description: "Une vidéo éducative expliquant les algorithmes de manière simple et ludique pour les enfants."
    },
    {
      title: "L'IA pour les curieux - Manuel illustré",
      type: "books",
      format: "PDF",
      size: "8.7 MB",
      icon: <Book size={24} className="text-purple-600" />,
      description: "Un livre illustré qui présente les concepts d'IA aux enfants de 8 à 12 ans avec des exemples concrets."
    },
    {
      title: "Cahier d'exercices sur l'apprentissage machine",
      type: "worksheets",
      format: "PDF",
      size: "3.2 MB",
      icon: <FileDown size={24} className="text-secondary-600" />,
      description: "Un cahier d'exercices interactif pour découvrir l'apprentissage machine à travers des activités ludiques."
    },
    {
      title: "Guide de l'enseignant: L'IA en classe",
      type: "guide",
      format: "PDF",
      size: "4.1 MB",
      icon: <FileText size={24} className="text-primary-600" />,
      description: "Un guide pratique pour les enseignants qui souhaitent intégrer l'IA dans leurs programmes scolaires."
    }
  ];

  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
    <div
      className="absolute inset-0 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('../assets/Home3.jpg')" }} // Remplace par ton chemin
    ></div>
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
      <h1 className="text-5xl font-display mb-4 text-white">Ressources Éducatives</h1>
      <p className="text-white/90 text-lg max-w-2xl">
        Accédez à notre bibliothèque de ressources gratuites pour approfondir vos connaissances sur l'IA.
      </p>
      <div className="relative max-w-lg w-full mt-6">
        <input 
          type="text" 
          placeholder="Rechercher une ressource..."
          className="w-full px-5 py-3 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-300"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </button>
      </div>
    </div>
  </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-display mb-4">Catégories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex justify-between items-center ${
                      activeTab === category.id 
                        ? 'bg-primary-50 text-primary-700' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <h2 className="text-xl font-display mt-8 mb-4">Filtres</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Format</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Tous les formats</option>
                    <option>PDF</option>
                    <option>Vidéo</option>
                    <option>Audio</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Âge</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option>Tous les âges</option>
                    <option>5-8 ans</option>
                    <option>8-12 ans</option>
                    <option>12-16 ans</option>
                    <option>16+ ans</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display">Ressources ({filteredResources.length})</h2>
              <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                <Filter size={18} />
                <span>Trier par</span>
              </button>
            </div>

            <div className="space-y-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 md:w-16 bg-gray-50 flex items-center justify-center">
                      {resource.icon}
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {resource.format}
                        </span>
                        {resource.size && (
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {resource.size}
                          </span>
                        )}
                        {resource.duration && (
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {resource.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-6 flex items-center">
                      <a href="#" className="btn btn-outline">
                        Télécharger
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
