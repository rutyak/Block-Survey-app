const express = require('express');
const multer = require('multer')
let upload = multer({dest: './files'})
const { videos } = require('../model/video');
const router = express.Router();

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './files')
   },
   filename: function (req, file, cb) {
     const uniqueSuffix = Date.now()
     cb(null, uniqueSuffix + file.originalname)
   }
 })
 
//  upload = multer({ storage: storage })

router.post('/videos',upload.single("file"),async (req, res)=>{
   console.log(req.body)
   const {url} = req.file;
   console.log(url)
   const {title, desc} = req.body;

   const newVideo = new videos({
      title,
      desc,
      url
   })

   await newVideo.save();
   res.status(200).json({ data: newVideo})
   
})



module.exports = router