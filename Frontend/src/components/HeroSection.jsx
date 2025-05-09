import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Herocarousel from '../components/Herocarousel';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carrousel d’arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Herocarousel />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay sombre */}
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <div className="max-w-5xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Découvrez l'IA <span className="text-orange-400">avec plaisir!</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              VIGNON aide les enfants et les adolescents à explorer le monde fascinant 
              de l'intelligence artificielle à travers des cours interactifs, des activités 
              ludiques et des ressources éducatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/formations" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold inline-flex items-center justify-center">
                Commencer à apprendre <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="/en-savoir-plus" className="border border-white text-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Contactez-nous
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
