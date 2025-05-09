const express = require('express');
const router = express.Router();
const {
  createClub,
  getClubs,
  getClubById,
  updateClub,
  deleteClub
} = require('../controllers/clubController');
const requireAuth = require('../middlewares/authmiddlewares');
const adminmiddlewares = require('../middlewares/adminmiddlewares');

router.get('/', getClubs);
router.get('/:id', getClubById);

router.post('/', requireAuth, createClub);
router.put('/:id', requireAuth, adminmiddlewares, updateClub);
router.delete('/:id', requireAuth, adminmiddlewares, deleteClub);

module.exports = router;
