
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var books = require('../models/bookModel');


var BookLendingSchema = new Schema({
  lender_firstname: {
    type: String,
    required: 'Kindly enter the firstname of the lender'
  },
  lender_lastname: {
    type: String,
    required: 'Kindly enter the lastname of the lender'
  },
  lender_email: {
    type: String,
    required: 'Kindly enter the E-mail of the lender'
  },
  book_name: {
    type: String,
    required: 'Kindly enter the name of the book'
  },
  return_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('lending', BookLendingSchema);
