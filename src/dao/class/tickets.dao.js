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

  postTicket = async (number_phone) => {
    try {
      const ticket = await ticketModel.create({ number_phone });
      return ticket;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  putTicket = async (tid, uid) => {
    try {
      let ticket = await ticketModel.findById(tid);
      ticket.users.push({ user: uid });
      const result = await ticketModel.updateOne({ _id: tid }, ticket);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
};
