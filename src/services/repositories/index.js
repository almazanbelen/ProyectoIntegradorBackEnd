
const Products = require("../../dao/class/products.dao");
const ProductRepository = require("../repositories/products.repository");

const product = new Products();
const productService = new ProductRepository(product);



module.exports = {
  productService
};
