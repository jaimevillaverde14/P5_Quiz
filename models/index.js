var Quiz = require("./quiz");
exports.Quiz = Quiz;

const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:quizzes.sqlite');

sequelize.import(path.join(__dirname, 'quiz'));

sequelize.sync()
    .then(() => {console.log('Se ha creado la base de datos satisfactoriamente')})
    .catch(error => {
    console.log("Error al crear la base de datos:", error);
    process.exit(1)
});

module.exports = sequelize;