const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Book = require('../models/Book');

//@desc         Get all Books
//@routes       GET /api/v1/Books
//@access       Public
exports.getBooks = asyncHandler(async (req, res, next) => {
  const books = await Book.find();

  res.status(200).json({ success: true, count: books.length, data: books });
});
//@desc         Get a single Books
//@routes       GET /api/v1/Books/:id
//@access       Public
exports.getBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(
      next(new ErrorResponse(`Book not found with id of ${req.params.id}`, 404))
    );
  }

  res.status(200).json({ success: true, data: book });
});
//@desc         Create new Book
//@routes       POST /api/v1/Books/:id
//@access       Private
exports.createBook = asyncHandler(async (req, res, next) => {
  const book = await Book.create(req.body);

  res.status(201).json({
    success: true,
    data: book
  });
});
//@desc         Update Book
//@routes       PUT /api/v1/Books/:id
//@access       Private
exports.updateBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!book) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: book });
});
//@desc         Delete new Book
//@routes       DELETE /api/v1/Books/:id
//@access       Private
exports.deleteBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findByIdAndDelete(req.params.id);

  if (!book) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
