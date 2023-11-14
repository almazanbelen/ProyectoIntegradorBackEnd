//imports
const { ticketService } = require("../services/repositories/index");

async function getTicket(req, res) {
  res.render("tickets");
}

async function getTicketById(req, res) {
  const { tid } = req.params;
  const result = await ticketService.getTicketById(tid);
  res.send({ result: "success", payload: result });
}

async function postTicket(req, res) {
  const codigoUnico = uuidv4();
  const date = new Date();
  const result = await ticketService.postTicket(codigoUnico, date);
  res.send({ result: "success", payload: result });
}

async function confirmationTicket(req, res) {
  const { tid, cid } = req.params;
  if (!tid || !cid) {
    res.send({ status: error, error: "Parametros inexistentes" });
  }
  const result = ticketService.confirmationTicket(tid, cid);
  res.send({ result: "success", result: result });
}

module.exports = {
  getTicket,
  getTicketById,
  postTicket,
  confirmationTicket,
};
