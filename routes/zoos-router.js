const express = require("express");
const router = express.Router();
const zoosDB = require('../data/zoos-model');

//endpoints

router.get('/', async (req, res) => {
    try {
        const zoos = await zoosDB.find();

        res.status(200).json(zoos);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});


router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const zoo = await zoosDB.findById(id);

        res.status(200).json(zoo);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
}); 


router.post('/', async (req, res) => {
    try {
        const newZoo = await zoosDB.add(req.body);

        res.status(201).json(newZoo);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updateZoo = await zoosDB.update(id, req.body);

        updateZoo
        ? res.status(200).json({message: "successfully updated zoo"})
        : res.status(404).json({message: "Zoo not found"});
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const success = await zoosDB.remove(id);

        success 
        ? res.status(204).end()
        : res.status(404).end();
    }  catch(err) {
         res.status(500).json({success: false, err});
    }
});





module.exports = router;