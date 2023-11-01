const { Router } = require("express");
const smsConrollers = require("../controllers/smsControllers")

const router = Router();

router.post("/", smsConrollers.postSms);

module.exports = router;
