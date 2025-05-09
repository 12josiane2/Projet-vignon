import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-600 mb-6">Contactez-nous</h1>
        
        <p className="text-lg text-gray-700 mb-6">
          Une question ? Un partenariat ? Une suggestion ou juste envie d’en savoir plus sur nos programmes de formation en intelligence artificielle pour les enfants et les adolescents ? L’équipe VIGNON est à votre écoute !
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary-600 mb-4">Nos coordonnées</h2>
            <p className="text-gray-700 mb-2"><strong>Email :</strong> associationvignon@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Téléphone :</strong> +229 0191048373</p>
            <p className="text-gray-700 mb-2"><strong>Adresse :</strong> Abomey-Calavi, Bénin</p>
            <p className="text-gray-700"><strong>Heures d’ouverture :</strong> Lundi à Vendredi – 9h à 17h</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Nom complet</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="exemple@domaine.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Écrivez-nous votre message ici..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
