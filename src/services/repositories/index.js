const Products = require("../../dao/class/products.dao")
const ProductRepository = require("../repositories/products.repository")

const product = new Products
const productService = new ProductRepository(product)

const Users = require("../../dao/class/user.dao")
const UserRepository = require("../repositories/users.repository")

const user = new Users
const userService = new UserRepository(user)

module.exports = {
    productService, userService
}