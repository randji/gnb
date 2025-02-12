import { validateEmail, validatePhone } from '../../utils/validation';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { nom, prenom, telephone, email, message } = req.body;

  // Validation
  if (!nom || !prenom || !telephone || !email || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Email invalide' });
  }

  if (!validatePhone(telephone)) {
    return res.status(400).json({ message: 'Numéro de téléphone invalide' });
  }

  try {
    // Ici, vous pouvez ajouter la logique pour envoyer l'email
    // Par exemple, utiliser nodemailer ou un service d'email

    return res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Erreur lors de l\'envoi du message' });
  }
} 