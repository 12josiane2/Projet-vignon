import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-display text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-display mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary flex items-center justify-center">
            <Home size={18} className="mr-2" />
            Retour à l'accueil
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline flex items-center justify-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
