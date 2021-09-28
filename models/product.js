const { DataTypes } = require('sequelize');
const db = require('./../db/connection');

const Product = db.define('Product', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        notNull: true,
    },
    name:{
        type: DataTypes.STRING(100),
        notNull: true,
    },
    description:{
        type: DataTypes.STRING,
        notNull: true,
    },
    price: {
        type: DataTypes.INTEGER,
        notNull: true,
    },
    img: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
    

    /* Nombre, categoria, precio, descripción, imagen, estado */

});

// Aca deberia ir el belongs del modelo de categoria / conexion con el modelo de categoria


module.exports = Product;