const express = require('express');
const { forms } = require('../model/forms');
const router = express.Router();

router.post('/forms',async (req, res)=>{

   try {
      const {type, title, desc, questions, stage, answer} = req.body;
 
      const newForm = new forms({
         type,
         title,
         desc,
         questions,
         stage,
         answer
      })
   
      await newForm.save();
      res.status(200).json({ data: newForm})
   } 
   catch (error) {
      console.log(error)
   }
 })
 
 router.put('/updateForm/:id',async (req, res)=>{
   try {
      const id = req.params.id;
      const {stage} = req.body;
   
      const updatedForm = await forms.findByIdAndUpdate(
         {_id: id},
         {stage: stage},
         {new: true}
      );
     
      if(!updatedForm){
        res.status(404).json({error: 'Not Published'})
      }
 
      res.status(200).json(updatedForm);
 
 
   } catch (error) {
      console.log(error);
   }
 })
 
 module.exports = router