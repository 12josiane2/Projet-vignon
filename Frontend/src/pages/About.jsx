import React from 'react';

const teamMembers = [
  {
    name: 'Mahoudjro DADAKPETE',
    role: 'Co-fondactrice & Formatrice',
    email: 'dadakpetejosiane@gmail.com',
    image: '/images/team/jean.jpg',
  },
  {
    name: 'Tagnon ZANNOU',
    role: 'Co-fondateur & Formateur',
    email: 'geoffroyzannou@gmail.com',
    image: '/images/team/esther.jpg',
  },
  {
    name: 'Sèna MADOKPON',
    role: 'Responsable Communication',
    email: 'madokponsena@gmail.com',
    image: '/images/team/david.jpg',
  },
];

const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-600 mb-6">Qui sommes-nous ?</h1>

        <p className="text-lg text-gray-700 mb-4">
          VIGNON est une initiative éducative dédiée à l’apprentissage de l’intelligence artificielle, pensée spécialement pour les enfants et les adolescents. Nous croyons fermement que les plus jeunes ont un potentiel immense, et que les préparer dès maintenant aux enjeux technologiques de demain est une nécessité.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Notre équipe conçoit des programmes adaptés, accessibles et pratiques afin de permettre aux jeunes d’acquérir les bases de l’IA, de développer leur esprit critique, leur créativité et leurs compétences numériques.
        </p>

        <h2 className="text-2xl font-semibold text-primary-600 mt-10 mb-4">Nos objectifs</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Initier les enfants et adolescents aux concepts fondamentaux de l’intelligence artificielle.</li>
          <li>Développer des compétences pratiques à travers des ateliers interactifs et des projets concrets.</li>
          <li>Encourager la pensée logique, la résolution de problèmes et la créativité technologique.</li>
          <li>Réduire la fracture numérique en rendant la tech accessible à tous les jeunes, quels que soient leurs milieux.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-600 mt-10 mb-4">Nos valeurs</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Accessibilité :</strong> des formations ouvertes à tous, dès le plus jeune âge.</li>
          <li><strong>Innovation :</strong> apprendre en expérimentant, créer en comprenant.</li>
          <li><strong>Responsabilité :</strong> former des jeunes conscients des impacts éthiques des technologies.</li>
          <li><strong>Excellence :</strong> viser des contenus pédagogiques de qualité, adaptés aux apprenants.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-primary-600 mt-10 mb-4">Ce que nous proposons</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Des <strong>ateliers ludiques</strong> et pédagogiques d’introduction à l’IA, la robotique et la programmation.</li>
          <li>Des <strong>ressources éducatives gratuites</strong> pour continuer à apprendre à la maison.</li>
          <li>Des <strong>formations certifiantes</strong> pour accompagner les jeunes dans leur progression.</li>
        </ul>

        <p className="text-lg text-gray-700 mt-8">
          Chez VIGNON, nous formons les bâtisseurs de demain. Rejoignez notre communauté et offrez à vos enfants une longueur d’avance dans un monde en pleine évolution technologique.
        </p>

        <p className="mt-10 text-gray-500 italic">– L’équipe VIGNON</p>

        {/* ÉQUIPE */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-primary-600 mb-8">Notre Équipe</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-blue-500 hover:underline"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
