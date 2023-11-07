
const ProductsDTO = require("../../dao/dtos/products.dto");

module.exports = class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getProduct = async (filter, options) => {
    let result = await this.dao.getProducts(filter, options);
    return result;
  };
  getProductById = async (pid) => {
    let result = await this.dao.productById(pid);
    return result;
  };
  createProduct = async (product) => {
    let products = new ProductsDTO(product);
    let result = await this.dao.postProduct(
      products.title,
      products.description,
      products.code,
      products.price,
      products.stock,
      products.category
    );
    return result;
  };
  putProduct = async (pid, productToReplace) => {
    let result = await this.dao.putProduct(pid, productToReplace);
    return result;
  };
  deleteProducts = async (pid) => {
    let result = await this.dao.deleteProduct(pid);
    return result;
  };
};
