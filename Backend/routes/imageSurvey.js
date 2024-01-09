const express = require('express');
const { images } = require('../model/image');
const upload = require('../middleware/multer');
const router = express.Router()

router.post('/images',upload.array('files'), async(req,res)=>{

    cloudinary.uploader.upload(req.file.path,{resource_type: 'auto', folder: 'Images'}, async function(err, result){
        try {
         if(err){
           console.log(err);
           return res.status(500).json({
             success: false,
             message: "Error"
           })
         }
         else{
          console.log("Uploded Successfully!!");
          try {
            const {type, title, desc} = req.body;
            const imageFile = result.url;
    
            const newImages = new images({
                  type,
                  title,
                  desc,
                  imageFile
            })
        
            await newImages.save();
            res.status(200).json({data: newImages})
        } catch (error) {
            console.log(error)
        }
         }
        } catch (error) {
         console.log(error)
        }
     })
})

module.exports = router