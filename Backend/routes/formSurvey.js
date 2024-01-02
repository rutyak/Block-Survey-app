const express = require('express');
const { forms } = require('../model/forms');
const router = express.Router();

router.post('/forms',async (req, res)=>{

   try {
      const {title, desc, questions} = req.body;
 
      const newForm = new forms({
         title,
         desc,
         questions
      })
   
      await newForm.save();
      res.status(200).json({ data: newForm})
   } 
   catch (error) {
      console.log(error)
   }
 })
 
 
 module.exports = router