var connection = require("./connection.js");

//helper functions from line 4 to 24
function printString(num) {
  var arr = [];

  for (var i = 0; i < num; i++){
    arr.push("?")
  }
  return arr.toString();
}

function objToSql() {
  for (var key in ob) {
    var value = ob[key];

//going to need more explanation over the hasownproperty and inherited bit.
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
}
// ==========================

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;

      //+= means it is adding onto the existing variable
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      })
    }
};

module.exports = orm;
