import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  GraduationCap,
  Lightbulb,
  PuzzleIcon,
  Trophy
} from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 hover:border-l-4 hover:border-l-primary-500"
    >
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-display mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Formations Interactives",
      description: "Des cours ludiques inspirés par Duolingo qui rendent l'apprentissage de l'IA amusant et engageant."
    },
    {
      icon: <Users size={24} />,
      title: "Pour Tous",
      description: "Programmes adaptés aux enfants, parents, éducateurs avec différents niveaux de complexité."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Ressources Éducatives",
      description: "Bibliothèque complète de ressources gratuites pour apprendre l'IA à son rythme."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Blog Informatif",
      description: "Articles, tutoriels et actualités sur l'IA adaptés pour un jeune public."
    },
    {
      icon: <PuzzleIcon size={24} />,
      title: "Clubs VIGNON",
      description: "Création de clubs dans les écoles et mairies pour un apprentissage collaboratif."
    },
    {
      icon: <Trophy size={24} />,
      title: "Compétitions",
      description: "Mini-compétitions en ligne et en présentiel pour mettre en pratique les connaissances."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 text-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-8xl md:text-5xl font-display mb-4"
          >
            Nos Programmes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez toutes les manières innovantes par lesquelles VIGNON peut aider les enfants et les adolescents à explorer et comprendre l'intelligence artificielle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>

        
        <div className="mt-12 flex justify-center">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition">
            Voir Plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
