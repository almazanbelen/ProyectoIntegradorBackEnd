//imports

const Tickets = require("../dao/class/tickets.dao");

//instancia tickets
const ticketService = new Tickets();

async function getTicket(req, res) {
  res.render("tickets");
}

async function getTicketById(req, res) {
  const { tid } = req.params;
  const result = await ticketService.getTicketById(tid);
  res.send({ result: "success", payload: result });
}

async function postTicket(req, res) {
  const { number_phone } = req.body;
  if (!number_phone) {
    res.send({ status: "error", error: "Faltan parámetros" });
  } else {
    const result = ticketService.postTicket(number_phone);
    res.send({ result: "success", payload: result });
  }
}

async function putTicket(req, res) {
  const { tid, uid } = req.params;
  const result = ticketService.putTicket(tid, uid)
  res.send({ result: "success", payload: result});
}

module.exports = {
  getTicket,
  getTicketById,
  postTicket,
  putTicket,
};
