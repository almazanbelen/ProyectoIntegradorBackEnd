const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  carts: [
    {
      cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "carts",
        require: true,
      },
    },
  ],
  role: { type: String, default: "user" },
});

userSchema.pre("find", function () {
  this.populate("carts.cart");
});

const User = mongoose.model("users", userSchema);

module.exports = User;
