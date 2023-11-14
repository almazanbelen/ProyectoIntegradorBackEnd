//imports
const config = require("../config/config.js")

// funcion autenticadora
function auth(req, res, next) {
  if (req.session?.email === config.adminNAME && req.session?.admin) {
    return next();
  }
  return res.status(401).send("Error en la auntenticacion");
}

module.exports = { auth };
