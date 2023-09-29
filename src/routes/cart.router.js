const { Router } = require("express");
const { cartModel } = require("../models/cart.model");


const router = Router();

router.get("/", async (req, res) => {
  try {
    let cart = await cartModel.find();
    res.send({ result: "success", payload: cart });
  } catch (error) {}
});

//crear un carrito
router.post("/", async (req, res) => {
  let { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  let result = await cartModel.create({ 
    first_name,
    last_name,
    email
   });
  res.send({ result: "success", payload: result });
});

//modificar un carrito
router.put("/:cid", async (req, res) => {
  let { cid } = req.params;
  let cartToReplace = req.body;
  let result = await cartModel.updateOne({ _id: cid }, cartToReplace);
  res.send({ result: "success", payload: result });
});

// agregar un producto
router.put("/:cid/products/:pid", async (req, res) => {
  let { cid , pid } = req.params;
  let cart = await cartModel.findById(cid)
  cart.products.push({product: pid})
  let result = await cartModel.updateOne({ _id: cid }, cart);
  res.send({ result: "success", payload: result, cart: cart});
});

//eliminar un carrito
router.delete("/:cid", async (req, res) => {
  let { cid } = req.params;
  let result = await cartModel.deleteOne({ _id: cid });
  res.send({ result: "success", payload: result });
});

//eliminar un producto
router.delete("/:cid/products/:pid", async (req, res) => {
  let { cid, pid } = req.params;
  let cart = await cartModel.findById(cid)
  cart.products.splice({_id: pid})
  let result = await cartModel.updateOne({ _id: cid }, cart);
  res.send({ result: "success", payload: result});
});

module.exports = router;