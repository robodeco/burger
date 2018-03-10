var orm = require("../config/orm.js")

//this is going to interact with the html page i believe
//or not. inquire as to what is actually happening here.
//are we setting up for the next file? the placeholders for condition, objColVals, etc. are for the arguements that we will eventually pass into from handlebars --> to here --> to api?
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    })
  }
}

module.exports = burger;
