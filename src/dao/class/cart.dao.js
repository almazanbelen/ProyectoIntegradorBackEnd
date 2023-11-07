const { cartModel } = require("../models/cart.model");

module.exports = class Cart {
  getCart = async () => {
    try {
      let cart = await cartModel.find();
      return cart;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  postCart = async (first_name, last_name, email) => {
    try {
      let carts = await cartModel.create({
        first_name
      });
      return carts;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  putCart = async (cid, cartToReplace) => {
    try {
      let cart = await cartModel.updateOne({ _id: cid }, cartToReplace);
      return cart;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  addProduct = async (cid, pid) => {
    try {
      let cart = await cartModel.findById(cid);
      cart.products.push({ product: pid });
      let result = await cartModel.updateOne({ _id: cid }, cart);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  deleteCart = async (cid) => {
    try {
      let cart = await cartModel.deleteOne({ _id: cid });
      return cart;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  deleteProduct = async (cid, pid) => {
    try {
      let cart = await cartModel.findById(cid);
      cart.products.splice({ _id: pid });
      let result = await cartModel.updateOne({ _id: cid }, cart);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
};
