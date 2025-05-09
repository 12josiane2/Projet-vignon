const adminmiddlewares = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès refusé : rôle insuffisant' });
    }
    next();
  };
  
  module.exports = adminmiddlewares;
  