import React from 'react';
import { motion } from 'framer-motion';

const PartnerSection = () => {
  // Mock partner logos (in a real project, you would use actual partner logos)
  const partners = [
    { name: "L'Envol" },
    { name: 'TITE GROUP' },
    { name: 'D-CLIC' },
    { name: 'Institut du Futur' },
    { name: 'Techno Kids' },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-display mb-4"
          >
            Nos partenaires
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-2xl"
          >
            Travaillons ensemble pour préparer nos enfants au monde de demain.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-24"
            >
              <div className="bg-gray-100 py-4 px-6 rounded-lg w-full h-full flex items-center justify-center">
                <span className="text-center font-medium text-gray-700">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/devenir-partenaire" className="btn btn-outline">
            Devenir partenaire
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
