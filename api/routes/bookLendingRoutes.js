'use strict';
module.exports = function(app) {
  var lending = require('../controllers/bookLendingController');

  // todoList Routes
  app.route('/lendings')
    .get(lending.list_all_lendings)


  app.route('/books/:bookId/lend')
    .post(lending.create_a_lend);

  app.route('/lendings/:lendId')
    .get(lending.read_a_lend)
    .put(lending.update_a_lend)
    .delete(lending.delete_a_lend);
};
