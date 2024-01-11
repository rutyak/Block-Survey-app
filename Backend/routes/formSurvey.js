const express = require('express');
const { forms } = require('../model/forms');
const router = express.Router();

router.post('/forms',async (req, res)=>{

   try {
      const {type, title, desc, questions, stage} = req.body;
 
      const newForm = new forms({
         type,
         title,
         desc,
         questions,
         stage
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
      console.log("Stage: ",stage)
      const updatedForm = await forms.findByIdAndUpdate(
         {_id: id},
         {stage: stage},
         {new: true}
      );
      console.log("updated: ",updatedForm);
      if(!updatedForm){
        res.status(404).json({error: 'Not Published'})
      }
 
      res.status(200).json(updatedForm);
 
 
   } catch (error) {
      console.log(error);
   }
 })
 
 module.exports = router