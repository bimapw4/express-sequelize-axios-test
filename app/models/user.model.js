module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      userId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      }
    });
    return User;
};