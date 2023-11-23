
const Products = require("../../dao/class/products.dao");
const ProductRepository = require("../repositories/products.repository");

const product = new Products();
const productService = new ProductRepository(product);


const Tickets = require("../../dao/class/tickets.dao");
const TicketRepository = require("../repositories/tickets.repository");


const ticket = new Tickets();
const ticketService = new TicketRepository(ticket);

module.exports = {
  productService,
  ticketService
};
