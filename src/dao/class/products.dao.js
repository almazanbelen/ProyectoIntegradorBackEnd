const { productModel } = require("../models/product.model");

module.exports = class Products {
  getProducts = async (filter, options) => {
    try {
      let Product = await productModel.paginate(filter, options);
      return Product;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  productById = async (pid) => {
    try {
      const result = await productModel.find({ _id: pid });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  postProduct = async (
    title,
    description,
    code,
    price,
    stock,
    category,
    owner
  ) => {
    try {
      let product = productModel.create({
        title,
        description,
        code,
        price,
        stock,
        category, 
        owner
      });
      return product;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  putProduct = async ( pid , productToReplace) => {
    try {
      let result = await productModel.updateOne({ _id: pid }, productToReplace);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  deleteProduct = async (pid) => {
    try {
      let result = await productModel.deleteOne({ _id: pid });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
};
