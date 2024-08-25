const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db');
const uuid = require('uuid')
const path = require('path')


class ProductController {
    async create(req, res) {
    console.log('POST /api/product called'); // Отладочный вывод
    console.log('Request body:', req.body); // Вывод тела запроса

    try {
        const { product_name, product_price, quantity , product_type_id , product_info} = req.body;
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg" 
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        if (!product_name) {
            return res.status(400).json({ message: 'productn is required' });
        }
        const product = await Product.create({ product_name, product_price, quantity, product_type_id , img: fileName , product_info});
        console.log('New product created:', product); // Отладочный вывод после создания записи
        return res.json(product);
    } catch (error) {
        console.error('Error during product creation:', error); // Вывод ошибок
        return res.status(500).json({ message: 'Server error' });
    }
}

   

    async delete(req, res) {

    }

    async update(req, res) {

    }
    
    async getAll(req,res) {
        const {product_type_id} = req.query
        let products;
        if (!product_type_id){
            products = await Product.findAll()
        }
        if (product_type_id) {
            products = await Product.findAll({where: {product_type_id}})
        }
        return res.json(products)

    }
    
    async getOne(req,res) {

    }
}


module.exports = new ProductController()