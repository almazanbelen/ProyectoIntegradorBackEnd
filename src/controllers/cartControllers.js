//imports
const { cartModel } = require("../models/cart.model");

//ver carritos
async function getCart(req, res) {
  try {
    let cart = await cartModel.find();
    res.send({ result: "success", payload: cart });
  } catch (error) {}
}

//crear carrito
async function postCart(req, res) {
  let { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  let result = await cartModel.create({
    first_name,
    last_name,
    email,
  });
  res.send({ result: "success", payload: result });
}

//modificar carrito
async function putCart(req, res) {
  let { cid } = req.params;
  let cartToReplace = req.body;
  let result = await cartModel.updateOne({ _id: cid }, cartToReplace);
  res.send({ result: "success", payload: result });
}

//agregar un producto
async function addProduct(req, res) {
  let { cid, pid } = req.params;
  let cart = await cartModel.findById(cid);
  cart.products.push({ product: pid });
  let result = await cartModel.updateOne({ _id: cid }, cart);
  res.send({ result: "success", payload: result, cart: cart });
}

//eliminar un carrito
async function deleteCart(req, res) {
  let { cid } = req.params;
  let result = await cartModel.deleteOne({ _id: cid });
  res.send({ result: "success", payload: result });
}

//eliminar un producto
async function deleteProduct(req, res) {
  let { cid, pid } = req.params;
  let cart = await cartModel.findById(cid);
  cart.products.splice({ _id: pid });
  let result = await cartModel.updateOne({ _id: cid }, cart);
  res.send({ result: "success", payload: result });
}

module.exports = {
  getCart,
  postCart,
  putCart,
  addProduct,
  deleteCart,
  deleteProduct,
};
