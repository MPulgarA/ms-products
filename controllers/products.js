const { request, response } = require('express');
const Product = require('./../models/product');

/*  TODO Muchas cosas por hacer
    - Utilización de JWT para la validación de usuario
    - Incorporación de la relación de producto y categorias
    - multiples ingresos masivos de categorias a productos

*/

const listAllProducts =  async (req = request, res = response) =>{
    // Paginador
    const {limit = 5, from = 0} = req.query;
    const products = await Product.findAndCountAll({
        where: { 
            status: true
        },
        offset: Number(from),
        limit: Number(limit)
    });

    res.json({ products });
};


// Validar que el estado sea true
const listProductById = async (req = request, res = response) =>{
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if(!product.status){
        return res.json({msg: "El producto no se encuentra disponible"});
    }
    res.json({ product});
};

const createProduct = async (req = request, res = response) =>{
    // El id es autoincremetable, la imagen se coloca 'despues', y el estado lo da por defecto
    const { name, description, price } = req.body;

    try {
        const product = Product.build({name, description, price});
        await product.save();
        res.json({product});
    } catch (error) {
        console.log(error);
        return res.status(400).json({ 
            msg: 'Hable con el administrador'
        });
    }

};

const updateProductById = async (req = request, res = response) =>{
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const product = await Product.findByPk(id);
        await product.update({name, description, price});
        res.json({ product });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}


// Validar que el proceso de eliminación, devolver que el producto ya se encuentra eliminado
const deleteProductById = async (req = request, res = response) =>{
    const {id} = req.params;

    try {
        const product = await Product.findByPk(id);
        product.update({status: false});
        res.json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
};


module.exports = {
    listAllProducts,
    listProductById,
    createProduct,
    updateProductById,
    deleteProductById
}