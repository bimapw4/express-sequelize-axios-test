module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        postId: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.TEXT
        }
    });
    return Comment;
};