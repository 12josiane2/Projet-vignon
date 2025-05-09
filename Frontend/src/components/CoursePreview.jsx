import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const CoursePreview = () => {
  const courseModules = [
    {
      title: "Introduction à l'IA",
      lessons: ["Qu'est-ce que l'IA?", "Histoire de l'IA", "L'IA dans notre quotidien"],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Apprentissage Machine",
      lessons: ["Les bases de l'apprentissage machine", "Entraîner un modèle simple", "Reconnaître des images"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-secondary-500 to-orange-500"
    },
    {
      title: "Création avec l'IA",
      lessons: ["Dessiner avec l'IA", "Créer des histoires", "Composer de la musique"],
      image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-display mb-4"
          >
            Nos formations 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Apprenez l'IA à votre rythme avec nos modules interactifs inspirés des méthodes d'apprentissage ludiques de Duolingo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseModules.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden flex flex-col h-full"
            >
              <div className={`h-40 overflow-hidden relative bg-gradient-to-r ${course.color}`}>
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-display text-white text-center px-4">{course.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {course.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 size={18} className="text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <a 
                  href={`/formations/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="btn btn-outline w-full flex items-center justify-between"
                >
                  <span>Commencer</span>
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/formations" className="btn btn-primary">
            Voir toutes les formations
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
