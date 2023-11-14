const mongoose = require("mongoose");

const ticketCollection = "tickets"

const ticketSchema = new mongoose.Schema({
    code: { type: String , require: true },
    date: { type: Date , require: true},
    purchase: [
        {
            cart: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "carts",
              require: true,
            },
        },
        ],
    amount: { type: Number }
})
ticketSchema.pre("find", function () {
    this.populate("purchase.cart");
  });


const ticketModel = mongoose.model(ticketCollection, ticketSchema)

module.exports = { ticketModel };