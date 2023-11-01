//imports
const Products = require("../dao/class/products.dao");

const productService = new Products();

//ver productos
async function getProducts(req, res) {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const sort = parseInt(req.query.sort) || "asc";
  const filter =
    req.query.category === "all"
      ? {}
      : req.query.category
      ? { category: req.query.category }
      : {};

  const options = {
    limit: limit,
    page: page,
    sort: { price: sort },
    lean: true,
  };
  let product = await productService.getProducts(filter, options);
  res.send({ result: "success", payload: product });
}

//ver productos by ID
async function productById(req, res) {
  const { pid } = req.params;
  const result = await productService.productById(pid);
  res.send({ status: "success", payload: result });
}

//agregar producto
async function postProduct(req, res) {
  let { title, description, code, price, stock, category } = req.body;

  if (!title || !description || !code || !price || !stock || !category) {
    if (code) res.send({ status: "error", error: "Faltan parámetros" });
  }

  let result = await productService.postProduct(
    title,
    description,
    code,
    price,
    stock,
    category,
  );
  res.send({ result: "success", payload: result });
}

//modificar producto
async function putProduct(req, res) {
  let { pid } = req.params;
  let productToReplace = req.body;
  if (
    !productToReplace.title ||
    !productToReplace.description ||
    !productToReplace.code ||
    !productToReplace.price ||
    !productToReplace.stock ||
    !productToReplace.category
  ) {
    res.send({ status: "error", error: "Faltan parámetros" });
  }
  let result = await productService.putProduct({ _id: pid }, productToReplace);
  res.send({ result: "success", payload: result });
}

//eliminar producto
async function deleteProduct(req, res) {
  let { pid } = req.params;
  let result = await productService.deleteProduct(pid);
  res.send({ result: "success", payload: result });
}

module.exports = {
  getProducts,
  productById,
  postProduct,
  putProduct,
  deleteProduct,
};
