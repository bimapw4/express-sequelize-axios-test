module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new record 
    router.post("/", users.create);
  
    // get all value from api
    router.get("/", users.GetPost);

    // get value from api by id
    router.get("/id/:id", users.GetPostById);

    // 
    router.get("/:coloum/:value", users.GetPostByColoum);

    // get comment value
    router.get("/comments/:id", users.GetComments);

    //save post by id
    router.post("/save/:id", users.SavePosts);

    router.put("/save/:id", users.UpdatePosts);

    router.delete("/save/:id", users.DeletePosts);

    app.use('/api/post', router);
  };