const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true , allowNull: true},
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    phone_number: { type: DataTypes.STRING, allowNull: false }
});

const Role = sequelize.define('role', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    role_name: { type: DataTypes.STRING, unique: true }
});

const Table = sequelize.define('table', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    table_num: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    table_price: { type: DataTypes.FLOAT, allowNull: false },
    number_of_seats: { type: DataTypes.INTEGER, allowNull: false }, 
    time: { type: DataTypes.TIME, allowNull: false },
    booked: { type: DataTypes.BOOLEAN, allowNull: false }
});

const Order = sequelize.define('order', {
    order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order_number: { type: DataTypes.INTEGER, allowNull: false },
    table_id: { type: DataTypes.INTEGER, allowNull: false } ,
    order_info: { type: DataTypes.STRING, allowNull: false }
});

const ProductType = sequelize.define('product_type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    img: {type: DataTypes.STRING , allowNull: false},
});

const Product = sequelize.define('product', {
    product_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    product_name: { type: DataTypes.STRING, allowNull: false },
    product_price: { type: DataTypes.FLOAT, allowNull: false }, // Исправлен тип поля на FLOAT
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    product_type_id: { type: DataTypes.INTEGER, allowNull: false },
    img: {type: DataTypes.STRING , allowNull: false},
    product_info: { type: DataTypes.STRING, allowNull: false }
});

const OrderProduct = sequelize.define('OrderProduct', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    order_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false } // Можно добавить количество продукта в заказе
});

// Связи
User.hasMany(Table, { foreignKey: 'user_id' });
Table.belongsTo(User, { foreignKey: 'user_id' });

Table.hasMany(Order, { foreignKey: 'table_id' });
Order.belongsTo(Table, { foreignKey: 'table_id' });

Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'product_id' });
Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'order_id' });

Product.belongsTo(ProductType, { foreignKey: 'product_type_id' });
ProductType.hasMany(Product, { foreignKey: 'product_type_id' });

// Связь пользователя и роли (многие ко многим)
User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'UserRoles' });

module.exports = {
    User,
    Role,
    Table,
    Order,
    Product,
    ProductType
};
