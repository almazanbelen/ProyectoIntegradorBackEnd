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
    subject: "Recuperar contraseña",
    html: `
    <div>
        <h2>Tienes 60 minutos para reestablecer tu contraseña ingresando al siguiente</h2>
        <h2>
          <a href="http://localhost:8080/api/sessions/restore">Link</a>   
        </h2>
           
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
