const express = require('express');
const { videos } = require('../model/video');
const router = express.Router();
const cloudinary = require('../cloudinary');
const upload = require('../middleware/multer')


router.post('/videos/upload',upload.single('file'), async (req, res)=>{
  
  const result = await cloudinary.uploader.upload(req.file.path,{resource_type: 'auto', folder: 'Videos'});

  try {
    const {title, desc, type, stage} = req.body;
    const videoUrl = result.url;
 
    const newVideo = new videos({
       title,
       desc,
       videoUrl,
       type,
       stage
    })
 
    await newVideo.save();
    res.status(200).json({ data: newVideo})
   } catch (error) {
    console.log(error);
   }

})

router.put('/updateVideo/:id',async (req, res)=>{
   try {
      const {stage} = req.body;
      const id = req.params.id;
      console.log("id: ",id)
      const updatedVideo = await videos.findByIdAndUpdate(
         {_id: id},
         {stage: stage},
         {new: true}
      );
      console.log("updated: ",updatedVideo);
      if(!updatedVideo){
        res.status(404).json({error: 'Not Published'})
      }

      res.status(200).json(updatedVideo);


   } catch (error) {
      console.log(error);
   }
})
module.exports = router