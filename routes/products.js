const { Router } = require('express');
const { check } = require('express-validator');


const { listAllProducts,
        listProductById,
        createProduct,
        updateProductById,
        deleteProductById } = require('./../controllers/products');

const { existProductById } = require('./../helpers/db-validator');
const { existProduct } = require('./../helpers/product-validator');
const {validateFields} = require('./../middlewares/validateFields');



const router = Router();

// TODO Incorporación de helpers y express-validator



router.get('/', listAllProducts);

router.get('/:id',[
    check('id').custom(existProductById),
    validateFields
], listProductById);

// router.get('/hello', (req, res) =>{
//     res.send('Hola');
// });

router.post('/',[
    check('name').custom(existProduct),
    check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('description', 'La descripción del producto es obligatorio').not().isEmpty(),
    check('price', 'El precio del producto es obligatorio').not().isEmpty(),
    validateFields
], createProduct);

router.put('/:id',[
    check('id').custom(existProductById),
    check('name').custom(existProduct),
    check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('description', 'La descripción del producto es obligatorio').not().isEmpty(),
    check('price', 'El precio del producto es obligatorio').not().isEmpty(),
    validateFields
], updateProductById);

router.delete('/:id',[
    check('id').custom(existProductById),
    validateFields
], deleteProductById);



module.exports = router;