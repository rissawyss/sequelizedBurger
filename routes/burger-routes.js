var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });


  app.get("/burgers", function(req, res) {
    db.burger.findAll({}).then(function(burgers) {
      res.render('index', { burgers });
    });
  });

  // POST route to create or add burgers
  app.post("/burgers/create", function(req, res) {
    db.burger.create({
      burger_name: req.body.burger_name
    }).then(function() {
      res.redirect("/burgers");
    });
  });


  app.put("/burgers/update", function(req, res) {
    db.burger.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function() {
        res.redirect("/burgers");
      });
    });
}


