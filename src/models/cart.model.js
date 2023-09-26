const mongoose = require("mongoose");

const cartCollection = "cart";

const cartSchema = new mongoose.Schema({    
    first_name: { type: String, required: true, max: 100 },
    last_name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 50 },
    products:[{
        product: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "products", require: true
        },
        quantity: {type: Number, default:1}
}]
})

cartSchema.pre("find", function(){
    this.populate("products.product")
})

const cartModel = mongoose.model(cartCollection, cartSchema)

module.exports = {cartModel}