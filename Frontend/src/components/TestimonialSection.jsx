import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = ({ content, name, role, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-secondary-500 fill-secondary-500" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "Ma fille adore les cours interactifs de VIGNON. Elle a appris tellement sur l'IA et c'est devenu sa matière préférée!",
      name: "Sophie AMOUSSOU",
      role: "Parent",
      rating: 5
    },
    {
      content: "En tant qu'enseignant, j'ai trouvé que les ressources de VIGNON sont parfaites pour introduire l'IA dans ma classe. Mes élèves sont fascinés!",
      name: "Thomas DANSOU",
      role: "Enseignant de primaire",
      rating: 5
    },
    {
      content: "Les clubs VIGNON dans notre école ont créé une véritable passion pour l'IA. C'est incroyable de voir les enfants aussi enthousiastes pour les technologies.",
      name: "Marie AKOUEVI",
      role: "Directrice d'école",
      rating: 4
    },
    {
      content: "Grâce à VIGNON, j'ai pu créer mon premier modèle d'IA! C'était super amusant et maintenant je veux devenir chercheur en IA.",
      name: "Lucas, 12 ans",
      role: "Élève",
      rating: 5
    },
    {
      content: "L'approche de VIGNON rend l'apprentissage de l'IA accessible même pour les plus jeunes. Mon fils de 8 ans comprend déjà les concepts de base!",
      name: "Ézéckiel ASSOGBA",
      role: "Parent",
      rating: 5
    }
  ];

  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-display mb-4"
          >
            Ils témoignent;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
           Chez VIGNON, chaque parcours compte. Parents, enfants et enseignants partagent leurs émotions après leurs expériences. Découvrez à travers leurs témoignages comment l’intelligence artificielle devient accessible, ludique et inspirante pour les plus jeunes. 
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Testimonial {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
