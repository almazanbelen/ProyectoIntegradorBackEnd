const config = require("../config/config");
const transporter = require("../utils/nodemailer");

async function getMail(req, res) {
  res.render("mail");
}

async function postMail(req, res) {
  const { email } = req.body;
  const mailOptions = {
    from: config.adminEMAIL,
    to: email,
    subject: "Confirmacion de compra",
    html: `
    <div>
        <h1>¡Felicitaciones! ¡Tu compra fue realizada con éxito!</h1>        
    </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error de envio");
    } else {
      console.log("Correo enviado", info.response);
      res.send(`Correo enviado con éxito a ${email}`);
    }
  });
}
module.exports = {
  getMail,
  postMail,
};
