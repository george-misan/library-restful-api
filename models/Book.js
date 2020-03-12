const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    maxlength: [200, 'Title can not be more than 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [2000, 'Title can not be more than 2000 characters']
  },
  ISBN: {
    type: Number,
    required: [true, 'Please add an ISBN number'],
    maxlength: [12, 'ISBN can not be more than 12 characters']
  },
  isBorrowed: {
    type: Boolean,
    default: false
  },
  publishedDate: {
    type: Date
  },
  borrowedDate: {
    type: Date
  },
  returnedDate: {
    type: Date
  },
  category: {
    type: String
  },
  authors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      index: true
    }
  ]
});

export default mongoose.model('Book', bookSchema);
