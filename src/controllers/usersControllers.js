//imports

const { isValidatePassword } = require("../utils/utils");
const User = require("../dao/class/user.dao");

const userService = new User();

//login
async function getLogin(req, res) {
  res.render("login");
}
async function postLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).render("login", { error: "Valores erroneos" });

  // const user = await User.findOne(
  //   { email },
  //   {
  //     first_name: 1,
  //     last_name: 1,
  //     age: 1,
  //     password: 1,
  //     email: 1,
  //     carts: 1,
  //     role: 1,
  //   }
  // );
  const user = await userService.postLogin(email);
  if (email === "coder@house.com" && isValidatePassword(user, password)) {
    req.session.email = email;
    req.session.admin = true;
    res.redirect("/api/sessions/private");
  } else {
    if (!user) {
      return res
        .status(400)
        .render("login", { error: "Usuario no encontrado" });
    }

    if (!isValidatePassword(user, password)) {
      return res.status(401).render("login", { error: "Error en password" });
    }

    // Set the user session here if login is successful
    req.session.user = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      age: user.age,
      carts: user.carts,
      role: user.role,
    };
    // Redirect the user after successful login
    res.redirect("/api/sessions/profile");
  }
}

//agregar carrito de compras
async function addCart(req, res) {
  let { uid, cid } = req.params;
  // let user = await User.findById(uid);
  // user.carts.push({ cart: cid });
  // let result = await User.updateOne({ _id: uid }, user);
  const user = await userService.addCart(uid, cid);
  res.send({ result: "success", payload: user });
}

//private
async function getPrivate(req, res) {
  res.render("private");
}

//register
async function getRegister(req, res) {
  res.render("register");
}
async function postRegister(req, res) {
  const { first_name, last_name, email, age, password } = req.body;
  if (!first_name || !last_name || !email || !age || !password) {
    return res.status(400).send("Faltan datos.");
  } else {
    const user = userService.postRegister(
      first_name,
      last_name,
      email,
      age,
      password
    );
    res.redirect("/api/sessions/login");
    console.log("Usuario registrado con éxito.", user);
  }
  // const hashedPassword = createHash(password);
  // const user = await User.create({
  //   first_name,
  //   last_name,
  //   email,
  //   age,
  //   password: hashedPassword,
  // });
  //res.send({ result: "success", payload: user })
}

//login con GitHub
async function getLoginGit(req, res) {
  req.session.user = req.user;
  res.redirect("/api/sessions/profile");
}

//profile
async function getProfile(req, res) {
  if (!req.session.user) {
    return res.redirect("login");
  }

  const { first_name, last_name, email, age, carts, role } = req.session.user;

  res.render("profile", { first_name, last_name, age, email, carts, role });
}

//fail auth
async function failRegister(req, res) {
  console.log("Falla en autenticacion");
  res.send({ error: "Falla" });
}
async function failLogin(req, res) {
  console.log("Falla en autenticacion");
  res.send({ error: "Falla" });
}

//logout
async function logout(req, res) {
  delete req.session.user;
  res.redirect("login");
}

//restore
async function getRestore(req, res) {
  res.render("restore");
}
async function postRestore(req, res) {
  const { email, password } = req.body;

  // const userFound = await User.findOne({ email: email });
  const userFound = await userService.postRestore(email, password);
  if (!userFound) {
    return res
      .status(400)
      .send({ status: "error", error: "Usuario no encontrado" });
  } else {
    res.redirect("/api/sessions/login");
  }
  // const hashedPassword = createHash(password);

  // const newPassword = await User.updateOne(
  //   { email: userFound.email },
  //   { password: hashedPassword }
  // );
}

//current para jwt
function current(req, res) {
  res.send(req.user);
}

module.exports = {
  getLogin,
  postLogin,
  addCart,
  getPrivate,
  getRegister,
  postRegister,
  getLoginGit,
  getProfile,
  failRegister,
  failLogin,
  logout,
  getRestore,
  postRestore,
  current,
};
