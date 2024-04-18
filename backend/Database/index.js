const { Product } = require('./Schemas/ProductSchema');
const { Category } = require('./Schemas/CategoryScheam');
const { User } = require('./Schemas/UserSchema');
const { Order } = require('./Schemas/OrderShcema');
const { OrderItem } = require('./Schemas/OrderItemsSchema');
module.exports = {
    Product,
    Category,
    User,
    Order,
    OrderItem,
}