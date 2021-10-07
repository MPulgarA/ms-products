const Product = require('./../models/product');

const existProductById = async(id) =>{
    const existProduct = await Product.findByPk(id);

    if(!existProduct){
        throw new Error(`El id ${id} ingresado no existe`);
    };
};

module.exports = {
    existProductById
}