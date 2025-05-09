import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-display mb-4 font-bold text-white"
          >
            Notre Newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/90 mb-8 text-2xl"
          >
            Inscrivez-vous à notre newsletter pour recevoir des conseils, des 
            ressources gratuites et les dernières actualités sur l'IA pour enfants.
          </motion.p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center"
            >
              <CheckCircle className="text-secondary-500 mb-4" size={48} />
              <h3 className="text-xl font-display mb-2 text-secondary-600">Merci pour votre inscription!</h3>
              <p className="text-white text-2xl">
                Vous recevrez bientôt nos dernières actualités et ressources éducatives.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
                required
                className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-secondary-300 focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="btn bg-secondary-600 hover:bg-secondary-700 text-white flex items-center justify-center"
              >
                S'abonner
                <Send size={18} className="ml-2" />
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
