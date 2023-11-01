const mongoose = require("mongoose");

const ticketCollection = "tickets"

const ticketSchema = new mongoose.Schema({
    number_phone: { type: Number, required: true },
    users: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            require: true,
        }
        
    }]
})

ticketSchema.pre("find", function () {
    this.populate("users.user");
  });

const ticketModel = mongoose.model(ticketCollection, ticketSchema)

module.exports = { ticketModel };