const Product = require('./../models/product');

const existProduct = async (name) =>{
    const existProduct = await Product.findOne({ where : name });

    if(existProduct){
        throw new Error(`El producto ${ name } ya se encuentra en la base de datos`);
    };
};

// const isAvailable = async (status) =>{
    
// };

module.exports ={
    existProduct
};
