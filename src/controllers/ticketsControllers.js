//imports
const { ticketModel } = require("../dao/models/tickets.model");
//const { ticketService } = require("../services/repositories/index");
const { v4: uuidv4 }= require("uuid")
const {cartModel} = require("../dao/models/cart.model")
const {productModel} = require("../dao/models/product.model")

async function getTicket(req, res) {
  const result = await ticketModel.find()
  res.send(result)
}

// async function getTicketById(req, res) {
//   const { tid } = req.params;
//   const result = await ticketService.getTicketById(tid);
//   res.send({ result: "success", payload: result });
// }

async function postTicket(req, res) {
  const {cid}= req.params
  const codigoUnico = uuidv4();
  const date = new Date();
  const cartFound = await cartModel.findById(cid)
  console.log(cartFound)
  let stock
  cartFound.products.forEach((p)=>{
    stock = p.product.stock - p.quantity
  })
  const newStock = await productModel.updateMany({stock: stock})
  const result = await ticketModel.create({
    code: codigoUnico,
    date: date,
    purchase: {cart: cartFound}, 
    amount: cartFound.totalPrice
  })
  
   res.send({ result: "success" , payload: result});
}

module.exports = {
  getTicket,
  //getTicketById,
  postTicket,
  
};
