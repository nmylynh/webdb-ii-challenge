const express = require("express");
const router = express.Router();
const bearsDB = require('../data/bears-model');

//endpoints

router.get('/', async (req, res) => {
    try {
        const bears = await bearsDB.find();

        res.status(200).json(bears);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const bear = await bearsDB.findById(id);

        res.status(200).json(bear);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
}); 


router.post('/', async (req, res) => {
    try {
        const newBear = await bearsDB.add(req.body);

        res.status(201).json(newBear);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updateBear = await bearsDB.update(id, req.body);

        updateBear
        ? res.status(200).json({message: "successfully updated bear"})
        : res.status(404).json({message: "bear not found"});
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const success = await bearsDB.remove(id);

        success 
        ? res.status(204).end()
        : res.status(404).end();
    }  catch(err) {
         res.status(500).json({success: false, err});
    }
});





module.exports = router;