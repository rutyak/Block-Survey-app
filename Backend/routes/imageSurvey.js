const express = require('express');
const { images } = require('../model/image');
const upload = require('../middleware/multer');
const cloudinary = require('../cloudinary');
const router = express.Router();

router.post('/images', upload.array('files'), async (req, res) => {
  try {
    let imageFile = []
    const uploadPromises = req.files.map(async (file) => {

      const result = await cloudinary.uploader.upload(file.path, { resource_type: 'auto', folder: 'Images' });
      imageFile.push(result.url);
    });

    const uploadedImages = await Promise.all(uploadPromises);
    console.log("Image uploaded", uploadedImages);

    const { type, title, desc, stage} = req.body;
    const answer = JSON.parse(req.body.answer);
    const newImage = new images({
      type,
      title,
      desc,
      imageFile,
      stage,
      answer
    });

    await newImage.save();
    res.status(200).json({ data: newImage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error uploading and saving images" });
  }
});

router.put('/updateImage/:id',async (req, res)=>{
  try {
     const id = req.params.id;
     
     const updatedImage = await images.findByIdAndUpdate(
        {_id: id},
        {$set: req.body},
        {new: true}
     );
    
     if(!updatedImage){
       res.status(404).json({error: 'Not Published'})
     }

     res.status(200).json(updatedImage);


  } catch (error) {
     console.log(error);
  }
})

module.exports = router;
