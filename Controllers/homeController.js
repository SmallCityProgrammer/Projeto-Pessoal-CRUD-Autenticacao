const Product = require("../Models/productSchema")

exports.post = ('/', async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).redirect('/')
})

exports.get = ('/', async (req,res) => {
  const product = await Product.find({});
  res.render('index', {product})
})

exports.getById = ('/:id', async (req,res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json(product)
})

exports.put = ('/:id', async (req,res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
    )
  res.status(200).json(product)
})

exports.delete = ('/:id', async (req,res) => {
  const product = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(product)
})