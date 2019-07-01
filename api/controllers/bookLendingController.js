'use strict';
var mongoose = require('mongoose'),
  lending = mongoose.model('lending');

exports.list_all_lendings = function(req, res) {
  lending.find({}, function(err, lending) {
    if (err)
      res.send(err);
    res.json(lending);
  });
};
exports.create_a_lend = function(req, res) {
  var new_lend = new lending(req.body);
  new_lend.save(function(err, lending) {
    if (err)
      res.send(err);
    res.json(lending);
  });
};
exports.read_a_lend = function(req, res) {
  lending.findById(req.params.lendId, function(err, lending) {
    if (err)
      res.send(err);
    res.json(lending);
  });
};
exports.update_a_lend = function(req, res) {
  lending.findOneAndUpdate({_id: req.params.lendId}, req.body, {new: true}, function(err, lending) {
    if (err)
      res.send(err);
    res.json(lending);
  });
};

exports.delete_a_lend = function(req, res) {
  lending.remove({
    _id: req.params.lendId
  }, function(err, lending) {
    if (err)
      res.send(err);
    res.json({ message: 'Lend successfully deleted' });
  });
};
