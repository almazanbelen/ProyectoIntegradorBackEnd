
const { v4: uuidv4 } = require("uuid");
module.exports = class TicketsDTO {
    constructor(ticket){
        this.code = uuidv4(),        
        this.date = new Date(),
        this.amount = ticket.amount
    }
}