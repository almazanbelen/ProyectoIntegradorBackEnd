//imports
const { Router } = require("express");
const cartControllers = require("../controllers/cartControllers");

const router = Router();

//ver carritos
router.get("/", cartControllers.getCart);

//crear un carrito
router.post("/", cartControllers.postCart);

//modificar un carrito
router.put("/:cid", cartControllers.putCart);

// agregar un producto
router.put("/:cid/products/:pid", cartControllers.addProduct);

//eliminar un carrito
router.delete("/:cid", cartControllers.deleteCart);

//eliminar un producto
router.delete("/:cid/products/:pid", cartControllers.deleteProduct);



module.exports = router;
