const express = require('express');
const { videos } = require('../model/Video');
const router = express.Router();

router.get('/videoData', async(req,res)=>{
    
    try {
        const videoData = await videos.find();
        res.status(200).json({data: videoData});
    } catch (error) {
        res.status(404).send('Invalid');
        console.log(error);
    }
})

module.exports = router