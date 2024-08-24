const {ProductType} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db');


class TypeController {

    async create(req, res) {
        const {type_name} = req.body
        const type = await ProductType.create({type_name})
        return res.json(type)
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

module.exports = new TypeController()