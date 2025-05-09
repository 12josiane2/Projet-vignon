const Course = require('../models/Course');

// Créer un cours
const createCourse = async (req, res) => {
  const { title, description, level, category } = req.body;
  try {
    const course = new Course({ title, description, level, category });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lire tous les cours
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lire un cours
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Cours non trouvé' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un cours
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ message: 'Cours non trouvé' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Supprimer un cours
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Cours non trouvé' });
    res.json({ message: 'Cours supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
