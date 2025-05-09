import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from '../assets/logo';

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <h2 className="text-2xl font-display text-primary-600"></h2>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Projet éducatif pour faire découvrir le monde de l'intelligence artificielle 
              aux enfants et adolescents à travers des activités ludiques et pédagogiques.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation principale */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display text-primary-600">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-primary-600 transition">Accueil</a></li>
              <li><a href="/formations" className="hover:text-primary-600 transition">Formations</a></li>
              <li><a href="/ressources" className="hover:text-primary-600 transition">Ressources</a></li>
              <li><a href="/blog" className="hover:text-primary-600 transition">Blog</a></li>
              <li><a href="/clubs" className="hover:text-primary-600 transition">Clubs VIGNON</a></li>
              <li><a href="/competitions" className="hover:text-primary-600 transition">Compétitions</a></li>
            </ul>
          </div>

          {/* Pour qui ? */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display text-primary-600">Pour qui ?</h3>
            <ul className="space-y-3">
              <li><a href="/enfants" className="hover:text-primary-600 transition">Pour les Enfants</a></li>
              <li><a href="/parents" className="hover:text-primary-600 transition">Pour les Parents</a></li>
              <li><a href="/enseignants" className="hover:text-primary-600 transition">Pour les Enseignants</a></li>
              <li><a href="/ecoles" className="hover:text-primary-600 transition">Pour les Écoles</a></li>
              <li><a href="/communautes" className="hover:text-primary-600 transition">Pour les Communautés</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-display text-primary-600">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-primary-600" />
                <a href="mailto:contact@vignon.org" className="hover:text-primary-600 transition">associationvignon@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-primary-600" />
                <span>+229 0191048373</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary-600" />
                <span>Répubique du BENIN</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="btn btn-primary">Nous contacter</a>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-gray-300 mt-10 pt-8 text-center text-sm text-white">
          <p>© 2025 VIGNON. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="/confidentialite" className="hover:text-primary-600 transition">Politique de confidentialité</a>
            <span>|</span>
            <a href="/conditions" className="hover:text-primary-600 transition">Conditions d'utilisation</a>
            <span>|</span>
            <a href="/cookies" className="hover:text-primary-600 transition">Politique de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
