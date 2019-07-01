'use strict';
module.exports = function(app) {
  var book = require('../controllers/booksController');

  // todoList Routes
  app.route('/books')
    .get(book.list_all_books);
    
  app.route('/books/:bookId')
    .get(book.read_a_book);

  app.route('/books/add')
    .post(book.create_a_book);

  app.route('/books/update/:bookId')
    .put(book.update_a_book);

  app.route('/books/delete/:bookId')
    .delete(book.delete_a_book);
};
