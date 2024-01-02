const express = require('express');
const { images } = require('../model/image');
const router = express.Router()

router.post('/images', async(req,res)=>{
    try {
        const {title, desc, imageUrls} = req.body;

        const newImages = new images({
              title,
              desc,
              imgUrl: imageUrls
        })
    
        await newImages.save();
        res.status(200).json({data: newImages})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router