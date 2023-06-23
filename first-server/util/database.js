
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_course','root','Nektarios@132', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;