//imports

const Cart = require("../dao/class/cart.dao");


//instancia de carrito
const cartService = new Cart();

//ver carritos
async function getCart(req, res) {
  let result = await cartService.getCart();
  res.send({ result: "success", payload: result });
}

//crear carrito
async function postCart(req, res) {
  let { first_name } = req.body;
  if (!first_name) {
    res.send({ status: "error", error: "Faltan parámetros" });
  } else {
    let result = await cartService.postCart(first_name);
    res.send({ result: "success", payload: result });
  }
}

//modificar carrito
async function putCart(req, res) {
  let { cid } = req.params;
  let cartToReplace = req.body;
  let result = await cartService.putCart(cid, cartToReplace);
  res.send({ result: "success", payload: result });
}

//agregar un producto
async function addProduct(req, res) {
  let { cid, pid } = req.params;
  const {quantity} = req.body
  let result = await cartService.addProduct(cid, pid, quantity)
  res.send({ result: "success", payload: result});
  //funcion para calcular el total price
  // async function calculatePrice(cart) {
  //   try {
  //     let cart = await cartModel.findById(cid)

  //     const total = cart.products.reduce(
  //       (acc, product) => acc + product.price,
  //       0
  //     );
  //     return total
  //   } catch (error) {
  //     console.error('Error al calcular el total del carrito:', error);
  //     throw error;
  // }
  // }

  // const totalPrice = calculatePrice(cid)
  // .then(total => {
  //   console.log('Total del carrito:', total);
  // }).catch(error => {
  //   console.error(error);
  // });

  // const price = await cartModel.updateOne({_id: cid}, totalPrice)

  
  //res.send({ result: "success", payload: price });

  }



//eliminar un carrito
async function deleteCart(req, res) {
  let { cid } = req.params;
  let result = await cartService.deleteCart(cid);
  res.send({ result: "success", payload: result });
}

//eliminar un producto
async function deleteProduct(req, res) {
  let { cid, pid } = req.params;
  let result = await cartService.deleteProduct(cid, pid);
  res.send({ result: "success", payload: result });
}

//generar ticket de compra

module.exports = {
  getCart,
  postCart,
  putCart,
  addProduct,
  deleteCart,
  deleteProduct,
};
