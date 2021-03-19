const db = require("../database/models/todo-model");

// Defining methods for the todoController
module.exports = {
  findAll: function(req, res) {
    db.TodoSchema
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
 },

  findById: function(req, res) {
    db.TodoSchema
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.TodoSchema
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.TodoSchema
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  
}

};