const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Débutant', 'Intermédiaire', 'Avancé'],
      default: 'Débutant'
    },
    category: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
