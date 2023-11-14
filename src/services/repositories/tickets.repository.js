const TicketsDTO = require("../../dao/dtos/tickets.dto");

module.exports = class TicketRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getTicketById = async (tid) => {
    let result = await this.dao.getTicketById(tid);
    return result;
  };
  postTicket = async (tickets) => {
    let ticket = new TicketsDTO(tickets);
    let result = await this.dao.postTicket(
      ticket.code,
      ticket.date,
      ticket.amount
    );
    return result;
  };
  confirmationTicket = async (tid, cid) => {
    let result = await this.dao.confirmationTicket(tid, cid)
    return result
  }
};
