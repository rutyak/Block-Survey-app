const express = require('express');
const { videos } = require('../model/video');
const router = express.Router();
const cloudinary = require('../cloudinary');
const upload = require('../middleware/multer')


router.post('/videos/upload',upload.single('file'), async (req, res)=>{
  
  const result = await cloudinary.uploader.upload(req.file.path,{resource_type: 'auto', folder: 'Videos'});

  try {
    const {title, desc, type} = req.body;
    const videoUrl = result.url;
 
    const newVideo = new videos({
       title,
       desc,
       videoUrl,
       type
    })
 
    await newVideo.save();
    res.status(200).json({ data: newVideo})
   } catch (error) {
    console.log(error);
   }

})
module.exports = router