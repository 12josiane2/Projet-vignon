const User = require('../models/User.js'); 
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendMail = require('../middlewares/sendMail.js');
require('dotenv').config();


// GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/users/register (Inscription avec OTP)
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Nom, email et mot de passe sont requis." });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000); // Génère un OTP à 6 chiffres

    if (!process.env.Activation_Secret) {
      throw new Error("Activation_Secret manquant dans les variables d'environnement");
    }

    const activationToken = jwt.sign(
      {
        user: {
          name,
          email,
          password: hashedPassword,
        },
        otp,
      },
      process.env.Activation_Secret,
      {
        expiresIn: "5m",
      }
    );

    const data = { name, otp };

    await sendMail(email, "Vignon- Vérifie ton compte", data);

    res.status(201).json({
      message: "Un OTP a été envoyé à votre adresse email.",
      activationToken,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/users/verify (Vérification de l'OTP et activation du compte)
const verifyUser = async (req, res) => {
  const { otp, token } = req.body;

  if (!otp || !token) {
    return res.status(400).json({ message: "OTP et token sont requis." });
  }

  try {
    const decoded = jwt.verify(token, process.env.Activation_Secret);

    if (decoded.otp != otp) {
      return res.status(400).json({ message: "OTP invalide" });
    }

    // Vérifie si l'utilisateur est déjà en base (par sécurité)
    const existingUser = await User.findOne({ email: decoded.user.email });
    if (existingUser) {
      return res.status(400).json({ message: "Utilisateur déjà vérifié" });
    }

    const newUser = new User(decoded.user);
    await newUser.save();

    res.status(201).json({ message: "Utilisateur vérifié et enregistré avec succès." });

  } catch (err) {
    res.status(400).json({ message: "Le token est invalide ou expiré." });
  }
};

module.exports = {
  getUsers,
  registerUser,  // Assurez-vous que cette ligne est présente
  verifyUser,
};
