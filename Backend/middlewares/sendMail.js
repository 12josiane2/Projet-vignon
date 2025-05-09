const nodemailer = require('nodemailer');

const sendMail = async (email, subject, data) => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });

  const htmlContent = `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 10px;">
      <h2 style="color: #2e6c80; text-align: center;">Bienvenue sur E-learning !</h2>
      <p>Bonjour <strong>${data.name}</strong>,</p>
      <p>Merci pour votre inscription. Veuillez utiliser le code ci-dessous pour vérifier votre adresse email :</p>
      <div style="text-align: center; margin: 30px 0;">
        <span style="display: inline-block; background-color: #f0f0f0; padding: 15px 30px; font-size: 24px; letter-spacing: 3px; border-radius: 5px; color: #333; font-weight: bold;">
          ${data.otp}
        </span>
      </div>
      <p style="text-align: center;">Ce code est valable pendant <strong>5 minutes</strong>.</p>
      <p style="margin-top: 30px;">Si vous n'avez pas initié cette inscription, vous pouvez ignorer cet email.</p>
      <p style="margin-top: 20px;">Bien cordialement,</p>
      <p><strong>L'équipe E-learning</strong></p>
      <hr style="margin: 40px 0;">
      <p style="font-size: 12px; color: #888; text-align: center;">© ${new Date().getFullYear()} E-learning. Tous droits réservés.</p>
    </div>
  `;

  await transport.sendMail({
    from: `"E-learning" <${process.env.Gmail}>`,
    to: email,
    subject: subject,
    text: `Bonjour ${data.name}, votre code OTP est ${data.otp}. Il est valable pendant 5 minutes.`,
    html: htmlContent,
  });
};

module.exports = sendMail;
