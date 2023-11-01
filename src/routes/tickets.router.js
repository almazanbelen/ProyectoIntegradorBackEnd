//imports
const { Router } = require("express");

const ticketsControllers = require("../controllers/ticketsControllers")

const router = Router();

router.get("/", ticketsControllers.getTicket);

router.get("/:tid", ticketsControllers.getTicketById);

router.post("/", ticketsControllers.postTicket);

router.put("/:tid/user/:uid", ticketsControllers.putTicket);

module.exports = router;
