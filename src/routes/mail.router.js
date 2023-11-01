const { Router } = require("express");

const mailControllers = require("../controllers/mailControllers");

const router = Router();

router.get("/", mailControllers.getMail);

router.post("/enviar-correo", mailControllers.postMail);

module.exports = router;
