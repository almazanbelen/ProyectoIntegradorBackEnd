//imports
const Cart = require("../dao/class/cart.dao");

//instancia de carrito
const cartService = new Cart

//ver carritos
async function getCart(req, res) {  
    let result = await cartService.getCart()
    res.send({ result: "success", payload: result }); 
}

//crear carrito
async function postCart(req, res) {
  let { first_name, last_name, email } = req.body
  console.log(first_name, last_name, email)
  if (!first_name || !last_name || !email) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }else{
    let result = await cartService.postCart(first_name, last_name, email)
    res.send({ result: "success", payload: result });
}
  }

//modificar carrito
async function putCart(req, res) {
  let { cid } = req.params;
  let cartToReplace = req.body;
  let result = await cartService.putCart(cid, cartToReplace)
  res.send({ result: "success", payload: result });
}

//agregar un producto
async function addProduct(req, res) {
  let { cid, pid } = req.params;
  let result = await cartService.addProduct(cid, pid)
  res.send({ result: "success", payload: result});
}

//eliminar un carrito
async function deleteCart(req, res) {
  let { cid } = req.params;
  let result = await cartService.deleteCart(cid)
  res.send({ result: "success", payload: result });
}

//eliminar un producto
async function deleteProduct(req, res) {
  let { cid, pid } = req.params;
  let result = await cartService.deleteProduct(cid, pid)
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
