const express = require('express');
const productRouter = express.Router();
const { Product }  = require('../../Database')


productRouter.get('/', async function(req, res){
    const product = await Product.find();
    if(!product) return res.status(404).json({ success: false, message: 'Products not found'})
    else res.status(200).send(product);
});
productRouter.post(`/`, async function(req, res){
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        CountInStock: req.body.CountInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    });
    await product.save().then((pd) => {
        res.status(201).json(pd)
    }).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
});

module.exports = productRouter;
