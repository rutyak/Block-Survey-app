const express = require('express');
const {videos} = require('../model/Video')
const router = express.Router();
const cloudinary = require('../cloudinary');
const upload = require('../middleware/multer')


router.post('/videos/upload',upload.single('file'), async (req, res)=>{
  
  const result = await cloudinary.uploader.upload(req.file.path,{resource_type: 'auto', folder: 'Videos'});

  try {
    const {title, desc, type, stage, videoType} = req.body;
    const answer = JSON.parse(req.body.answer);
    const videoUrl = result.url;
 
    const newVideo = new videos({
       title,
       desc,
       type,
       stage,
       videoType,
       videoUrl,
       answer
    })
 
    await newVideo.save();
    res.status(200).json({ data: newVideo})
   } catch (error) {
    console.log(error);
   }

})

router.put('/updateVideo/:id',async (req, res)=>{
   try {
      const id = req.params.id;
      console.log("id: ",id)
      const updatedVideo = await videos.findByIdAndUpdate(
         {_id: id},
         {$set: req.body},
         {new: true}
      );
    
      if(!updatedVideo){
        res.status(404).json({error: 'Not Published'})
      }

      res.status(200).json(updatedVideo);


   } catch (error) {
      console.log(error);
   }
})
module.exports = router