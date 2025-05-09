const Club = require('../models/Club');

// Créer un club
const createClub = async (req, res) => {
  const { name, location, description } = req.body;
  try {
    const club = new Club({ name, location, description });
    await club.save();
    res.status(201).json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir tous les clubs
const getClubs = async (req, res) => {
  try {
    const clubs = await Club.find().sort({ createdAt: -1 });
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir un club par ID
const getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: 'Club non trouvé' });
    res.json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un club
const updateClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!club) return res.status(404).json({ message: 'Club non trouvé' });
    res.json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer un club
const deleteClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) return res.status(404).json({ message: 'Club non trouvé' });
    res.json({ message: 'Club supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createClub,
  getClubs,
  getClubById,
  updateClub,
  deleteClub,
};
