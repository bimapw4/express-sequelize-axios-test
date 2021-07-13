const axios = require("axios");
const db = require("../models");
const User = db.users;
const Comments = db.comments;
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

exports.GetPostById = async (req, res) => {
    const id = req.params.id

    try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/posts/" + id,
			method: "get",
		});
         res.send(response.data);
    } catch (err) {
		res.status(500).json({ message: err });
	}
}

exports.GetComments = async (req, res) => {
    try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/posts/"+ req.params.id +"/comments",
			method: "get",
		});
        Comments.bulkCreate(response.data).then(data => {
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

exports.SavePosts = async (req, res) => {
    const id = req.params.id
    try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/posts/" + id,
			method: "get",
		});
        User.create({
            userId : response.data.userId,
            title: response.data.title,
            body: response.data.body
        }).then(data => {
                    res.send(data);
                })
            .catch(err => {
                  res.status(500).send({
                    message:
                      err.message || "Some error occurred while creating the Post."
                  });
                });

    } catch (err) {
		res.status(500).json({ message: err });
	}
}

exports.UpdatePosts = async (req, res) => {
    const id = req.params.id
    try {
		const response = await axios.put("https://jsonplaceholder.typicode.com/posts/" + id, {
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
		});
        User.update(response.data, {
            where: {id : response.data.id}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "User was updated successfully."
              });
            }
        }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Post."
            });
        });
    } catch (err) {
		res.status(500).json({ message: err });
	}
}

exports.DeletePosts = async (req, res) => {
    const id = req.params.id
    try {
		const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
        User.destroy({
            where: {id : id}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "User was Deleted successfully."
              });
            }
        }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Post."
            });
        });
    } catch (err) {
		res.status(500).json({ message: err });
	}
}