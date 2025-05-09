const express = require('express');
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');
const requireAuth = require('../middlewares/authmiddlewares');
const adminmiddlewares = require('../middlewares/adminmiddlewares');

router.get('/', getCourses);
router.get('/:id', getCourseById);

router.post('/', requireAuth, createCourse);
router.put('/:id', requireAuth, adminmiddlewares, updateCourse);
router.delete('/:id', requireAuth, adminmiddlewares, deleteCourse);

module.exports = router;
