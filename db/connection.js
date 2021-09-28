const { Sequelize } = require('sequelize');

const db = new Sequelize('ms-products', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    // logging: true
});


module.exports = db;