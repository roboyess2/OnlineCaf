const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db');


class ProductController {
    async create(req, res) {
    console.log('POST /api/product called'); // Отладочный вывод
    console.log('Request body:', req.body); // Вывод тела запроса

    try {
        const { product_name, product_price, quantity , product_type_id } = req.body;
        if (!product_name) {
            return res.status(400).json({ message: 'productn is required' });
        }
        const product = await Product.create({ product_name, product_price, quantity, product_type_id });
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

    }
    
    async getOne(req,res) {

    }
}


module.exports = new ProductController()