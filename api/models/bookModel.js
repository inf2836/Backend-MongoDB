
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  book_isbn_number: {
    type: String,
    required: 'Kindly enter the ISBN number of the book'
  },
  book_name: {
    type: String,
    required: 'Kindly enter the name of the book'
  },
  book_author: {
    type: String,
    required: 'Kindly enter the author of the book'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['verfügbar', 'ausgeliehen']
    }],
    default: ['verfügbar']
  }
});

module.exports = mongoose.model('Books', BookSchema);
