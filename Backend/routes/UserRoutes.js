const express = require('express');
const router = express.Router();
const { getUsers, registerUser, verifyUser } = require('../controllers/Usercontroller');
const requireAuth = require('../middlewares/authmiddlewares');
const adminmiddlewares = require('../middlewares/adminmiddlewares');
const User = require('../models/User'); // Nécessaire pour la suppression

router.post('/register', registerUser);

// Vérification d'utilisateur (par OTP, par exemple)
router.post('/verify', verifyUser);

// Route protégée pour récupérer tous les utilisateurs
router.get('/', requireAuth, getUsers);

// Route pour supprimer un utilisateur (admin uniquement)
router.delete('/:id', requireAuth, adminmiddlewares, async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    await user.remove();
    res.json({ message: 'Utilisateur supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
