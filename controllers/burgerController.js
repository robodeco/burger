var express = require("express");
var burger = require("../models/burger.js")
//how to have this interact with the handlebars file when a button is clicked?

module.exports = function(app) {
  app.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    burger.insertOne([
      //ask about whats going on here; try to explain what you think is
      "burger_name", false
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result){
      res.json({ id: result.insertId });
    })
  })

  app.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
      }, condition, function(result) {
        if (result.changedRows == 0) {

        return res.status(404).end();

      } else {
        res.status(200).end();
      }
    });
  });
};
