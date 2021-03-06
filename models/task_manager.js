let orm = require("../config/orm.js");

let tasks = {
    selectAll: function(cb) {
      orm.selectAll("tasks", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("tasks", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("tasks", objColVals, condition, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = tasks;
  