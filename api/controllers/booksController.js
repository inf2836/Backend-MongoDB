'use strict';
var mongoose = require('mongoose'),
  Books = mongoose.model('Books');

exports.list_all_books = function(req, res) {
  Books.find({}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.create_a_book = function(req, res) {
  var new_book = new Books(req.body);
  new_book.save(function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.read_a_book = function(req, res) {
  Books.findById(req.params.bookId, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.update_a_book = function(req, res) {
  Books.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, function(err, book) {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.delete_a_book = function(req, res) {
  Books.remove({
    _id: req.params.bookId
  }, function(err, book) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};
