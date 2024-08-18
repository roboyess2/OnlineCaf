
const db = require('../db');


class UserController {

    async registration(req, res) {
        const users = await db.query('SELECT telegram_id, user_name, coins FROM "user"');
        console.log(users)
        res.json(users.rows)
    }

    async login(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT user_name, coins FROM "user" WHERE telegram_id = $1', [id]);
        res.json(user.rows[0])
    }

    async check(req, res) {
        // const {telegram_id, coins } = req.params.id
        const  {telegram_id, coins }  = req.body;
        const user = await db.query('update "user" set coins = $1 where telegram_id = $2 returning *', [coins, telegram_id]);
        res.json(user.rows[0])
    }
}

module.exports = new UserController()