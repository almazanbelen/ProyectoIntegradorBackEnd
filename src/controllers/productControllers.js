//imports
const { productModel } = require("../models/product.model");

//ver productos
async function getProducts(req, res) {
  try {
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

    let products = await productModel.paginate(filter, options);

    res.send({ result: "success", payload: products });
  } catch (error) {
    console.log(error);
  }
}

//ver productos by ID
async function productById(req, res) {
  const { pid } = req.params;
  const result = await productModel.find({ _id: pid });
  res.send({ status: "success", payload: result });
}

//agregar producto
async function postProduct(req, res) {
  let { title, description, code, price, stock, category } = req.body;

  if (!title || !description || !code || !price || !stock || !category) {
    if (code) res.send({ status: "error", error: "Faltan parámetros" });
  }

  let result = await productModel.create({
    title,
    description,
    code,
    price,
    stock,
    category,
  });
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
  let result = await productModel.updateOne({ _id: pid }, productToReplace);
  res.send({ result: "success", payload: result });
}

//eliminar producto
async function deleteProduct(req, res) {
  let { pid } = req.params;
  let result = await productModel.deleteOne({ _id: pid });
  res.send({ result: "success", payload: result });
}

module.exports = {
  getProducts,
  productById,
  postProduct,
  putProduct,
  deleteProduct,
};
