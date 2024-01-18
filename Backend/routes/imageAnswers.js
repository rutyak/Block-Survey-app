const express = require('express');
const { imageAns } = require('../model/imageAns');
const router = express.Router();

router.post('/imageAns', async (req, res) => {

    try {
        const { name, title, answer} = req.body
        

        const newData =new imageAns({
            name,
            title,
            answer
        })

        await newData.save()

        res.status(200).json({ message: "Response recorded !!", data: newData })
    } catch (error) {
         console.log(error);
    }
})

router.get('/imageAnsData',async(req,res)=>{

    try {
        const imageData = await imageAns.find();
        res.status(200).json({data: imageData})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
