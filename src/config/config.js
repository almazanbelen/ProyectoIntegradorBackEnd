const dotenv = require("dotenv");


dotenv.config();

module.exports = {
  port:process.env.PORT,
  mongoURL:process.env.MONGO_URL,
  adminNAME:process.env.ADMIN_NAME,
  twilioACCOUNT:process.env.TWILIO_ACCOUNT,
  twilioAUTH:process.env.TWILIO_AUTH,
  twilioSMS:process.env.TWILIO_SMS,
  adminEMAIL:process.env.ADMIN_EMAIL
};
