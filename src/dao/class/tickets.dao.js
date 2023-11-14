const { ticketModel } = require("../models/tickets.model");

module.exports = class Tickets {
  getTicketById = async (tid) => {
    try {
      let ticket = await ticketModel.findById(tid);
      return ticket;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  postTicket = async (codigoUnico, date) => {
    try {
      const ticket = await ticketModel.create({
        code: codigoUnico,
        date: date,
      });
      return ticket;
    } catch (error) {
      console.log(error);
      return null;
    }
  };


  confirmationTicket = async (tid, cid) => {
    try {
      const ticket = await ticketModel.findById(tid);
      ticket.purchase.push({ cart: cid });
      const result = await ticketModel.updateOne({ _id: tid }, ticket);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
};
