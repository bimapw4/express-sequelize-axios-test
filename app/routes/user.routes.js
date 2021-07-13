module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new record 
    router.post("/", users.create);
  
    // get all value from api
    router.get("/posts", users.GetPost);

    // get value from api by id
    router.get("/posts/:id", users.GetPostById);

  
    app.use('/api/users', router);
  };