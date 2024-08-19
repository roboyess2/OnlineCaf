const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db');


class ProductController {

    async create(req, res) {
        const {product_name,product_price,quantity,} = req.body
        const product = await Product.create({product_name})
        return res.json(product)
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