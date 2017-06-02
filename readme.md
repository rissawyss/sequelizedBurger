# HW 15 {sequelized burger}
## Node Express Handlebars application

  - Restaurant app that lets users input the names of burgers they'd like to eat.
  - Whenever a user submits a burger's name, the app will display the burger waiting to be devoured.
  - Each burger in the waiting area has a Devour button. When the user clicks it, the burger will be removed.
  - The app will store every burger in a database, whether devoured or not.
 
## Sequelized Models
Burger model defined with sequelize.define('name', {attributes}, {options})

```
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return burger;
};

```


## Handlebar route connected to burger model renders data to view 

```
  app.get("/burgers", function(req, res) {
    db.burger.findAll({}).then(function(burgers) {
      res.render('index', { burgers });
    });
  });

```