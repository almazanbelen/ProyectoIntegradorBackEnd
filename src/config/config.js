const dotenv = require("dotenv");


const environment = "PRODUCTION";

dotenv.config();

module.exports = {
  port:process.env.PORT,
  mongoURL:process.env.MONGO_URL,
  adminNAME:process.env.ADMIN_NAME,
};
