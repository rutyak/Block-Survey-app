const express = require('express');
const { videos } = require('../model/video');
const router = express.Router();



router.post('/videos', async (req, res)=>{
   console.log(req.body)
   
   const {title, desc, url} = req.body;

   const newVideo = new videos({
      title,
      desc,
      url
   })

   await newVideo.save();
   res.status(200).json({ data: newVideo})
   
})


module.exports = router