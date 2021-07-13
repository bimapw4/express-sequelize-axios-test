const axios = require("axios");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
      // Create a Tutorial
      const user = {
        userId: req.body.userId,
        title: req.body.title,
        body: req.body.body
      };
    
      // Save Tutorial in the database
      User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};

exports.GetPost = async (req, res) => {
    try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/posts",
			method: "get",
		});

        User.bulkCreate(response.data).then(data => {
              res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the Tutorial."
                });
              });
	} catch (err) {
		res.status(500).json({ message: err });
	}
}