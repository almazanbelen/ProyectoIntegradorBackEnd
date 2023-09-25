// funcion autenticadora
function auth(req, res, next) {
  if (req.session?.email === "coder@house.com" && req.session?.admin) {
    return next();
  }
  return res.status(401).send("Error en la auntenticacion");
}

module.exports = { auth };
