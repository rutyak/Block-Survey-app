const express = require('express');
const { videoAns } = require('../model/videoAns');
const router = express.Router();

router.post('/videoAns', async (req, res) => {

    try {
        const { name, title, answer, videoUrl, videoType} = req.body

        const newData =new videoAns({
            name,
            title,
            answer,
            videoUrl,
            videoType
        })

        await newData.save()

        res.status(200).json({ message: "Response recorded !!", data: newData })
    } catch (error) {
         console.log(error);
    }
})

router.get('/videoAnsData',async(req,res)=>{

    try {
        const videoData = await videoAns.find();
        res.status(200).json({data: videoData})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
