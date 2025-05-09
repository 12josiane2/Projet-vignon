import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Brain, Notebook as Robot, PuzzleIcon, Code, Palette } from 'lucide-react';
import Home from '../assets/Home.jpg';

const Formations = () => {
  const categories = [
    { name: "Tous", icon: <BookOpen size={18} />, active: true },
    { name: "Bases de l'IA", icon: <Brain size={18} /> },
    { name: "Robotique", icon: <Robot size={18} /> },
    { name: "Jeux", icon: <PuzzleIcon size={18} /> },
    { name: "Programmation", icon: <Code size={18} /> },
    { name: "Créativité", icon: <Palette size={18} /> },
  ];

  const courses = [
    {
      title: "Introduction à l'IA pour Débutants",
      level: "Débutant",
      age: "8-12 ans",
      duration: "4 semaines",
      description: "Découverte des concepts fondamentaux de l'IA à travers des activités ludiques et interactives.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      popular: true
    },
    {
      title: "Programmer un Jeu avec l'IA",
      level: "Intermédiaire",
      age: "10-14 ans",
      duration: "6 semaines",
      description: "Apprendre à créer un jeu simple en utilisant des concepts d'intelligence artificielle.",
      image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Créer un Chatbot Intelligent",
      level: "Intermédiaire",
      age: "12-16 ans",
      duration: "5 semaines",
      description: "Construire un assistant virtuel qui peut répondre à des questions et avoir des conversations simples.",
      image: "https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      popular: true
    },
    {
      title: "Art et IA",
      level: "Débutant",
      age: "8-14 ans",
      duration: "3 semaines",
      description: "Explorer comment l'IA peut être utilisée pour créer des œuvres d'art numériques fascinantes.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "IA et Robotique",
      level: "Avancé",
      age: "12-18 ans",
      duration: "8 semaines",
      description: "Apprendre à programmer des robots intelligents qui peuvent interagir avec leur environnement.",
      image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "L'Éthique de l'IA pour les Jeunes",
      level: "Intermédiaire",
      age: "14-18 ans",
      duration: "4 semaines",
      description: "Comprendre les implications éthiques de l'IA et comment elle affecte notre société.",
      image: "https://images.pexels.com/photos/8438920/pexels-photo-8438920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
  className="relative text-white py-32 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${Home})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Contenu au-dessus de l'overlay */}
  <div className="relative z-10 container-custom">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-5xl font-display mb-4">Formations Interactives</h1>
      <p className="text-white/80 text-lg mb-8 text-3xl">
        Découvrez notre catalogue de formations en IA pour enfants et adolescents. 
        Apprendre n'a jamais été aussi amusant!
      </p>
      <div className="relative max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Rechercher une formation..."
          className="w-full px-5 py-3 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-300"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Category Filters */}
      <div className="bg-white shadow-sm py-4 sticky top-[72px] z-10">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-2">
            <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              <Filter size={18} />
            </button>
            <div className="flex overflow-x-auto gap-2 py-1 no-scrollbar">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap ${
                    category.active 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-secondary-600 text-white text-xs px-2 py-1 rounded-full">
                    Populaire
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                    {course.level}
                  </span>
                  <span className="bg-secondary-100 text-secondary-700 text-xs px-2 py-1 rounded-full">
                    {course.age}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {course.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-semibold">Gratuit</span>
                  <a href={`/formations/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-primary">
                    Commencer
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formations;
