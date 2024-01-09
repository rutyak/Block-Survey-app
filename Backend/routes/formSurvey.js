const express = require('express');
const { forms } = require('../model/forms');
const router = express.Router();

router.post('/forms',async (req, res)=>{

   try {
      const {type, title, desc, questions} = req.body;
 
      const newForm = new forms({
         type,
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