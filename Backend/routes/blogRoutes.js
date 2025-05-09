const express = require('express');
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const requireAuth = require('../middlewares/authmiddlewares');
const adminmiddlewares = require('../middlewares/adminmiddlewares');

// Tout le monde peut lire
router.get('/', getBlogs);
router.get('/:id', getBlogById);

// Authentifié = peut créer
router.post('/', requireAuth, createBlog);

// Seul admin peut modifier ou supprimer
router.put('/:id', requireAuth, adminmiddlewares, updateBlog);
router.delete('/:id', requireAuth, adminmiddlewares, deleteBlog);

module.exports = router;
