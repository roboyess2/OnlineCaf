const {ProductType} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db');


class TypeController {

    async create(req, res) {
        console.log('POST /api/type called'); // Отладочный вывод
        console.log('Request body:', req.body); // Вывод тела запроса

        try {
            const { type_name } = req.body;
            if (!type_name) {
                return res.status(400).json({ message: 'Type name is required' });
            }
            const type = await ProductType.create({ type_name });
            console.log('New type created:', type); // Отладочный вывод после создания записи
            return res.json(type);
        } catch (error) {
            console.error('Error during type creation:', error); // Вывод ошибок
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

module.exports = new TypeController()