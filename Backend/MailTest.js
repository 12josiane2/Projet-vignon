require('dotenv').config(); // charge les variables d'environnement
const sendMail = require('./middlewares/sendMail'); // adapte le chemin si nécessaire

const test = async () => {
  try {
    const email = 'tonemaildestest@gmail.com'; // mets ici un email valide que tu peux consulter
    const subject = 'Test OTP E-learning';
    const data = {
      name: 'Jean Dupont',
      otp: Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    };

    await sendMail(email, subject, data);
    console.log('✅ Email envoyé avec succès');
  } catch (error) {
    console.error('❌ Échec de l\'envoi de l\'email :', error.message);
  }
};

test();
