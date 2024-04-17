const { Category } = require('../../Database');
const express = require('express');
const categoryRouter = express.Router();

categoryRouter.get('/', async function(req, res) {
    const categoryList = await Category.find();
    if (!categoryList){
        res.status(500).json({success: false})
    }
    res.status(200).send(categoryList);
});

categoryRouter.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if(category){
        res.status(200).send(category);
    }else{
        res.status(404).json({success: false, message: 'the category not found!'});
    }
});

categoryRouter.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color
        },
        {new: true}
    )
    if(category){
        res.status(200).send(category);
    }else{
        res.status(404).json({success: false, message: 'the category not found!'});
    }
});
categoryRouter.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })

    category = await category.save();

    if(!category) return res.status(404).send('the category cannot be created!')
    res.send(category);
});

categoryRouter.delete('/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id).then((category) => {
        if(!category) return res.status(404).json({success: false, message: 'the category not found!'})
        else res.status(200).json({ success: true, message: "category deleted successfully"});
    }).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    });
});

module.exports = categoryRouter;