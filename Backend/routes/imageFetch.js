const express = require('express');
const { images } = require('../model/image');
const router = express.Router();

router.get('/imageData', async(req, res)=>{
    try {
        const imagesData = await images.find();
        res.status(200).json({data: imagesData});
    } catch (error) {
        res.status(200).send("Invalid");
        console.log(error);
    }
})

module.exports = router