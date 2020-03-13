const express = require('express');

const {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/book');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getBooks)
  .post(protect, authorize('admin'), createBook);

router
  .route('/:id')
  .get(getBook)
  .put(protect, authorize('admin'), updateBook)
  .delete(protect, authorize('admin'), deleteBook);

module.exports = router;
