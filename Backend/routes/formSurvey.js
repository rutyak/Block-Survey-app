const express = require('express');
const router = express.Router();

router.post('/forms',async (req, res)=>{
    console.log(req.body)
    const {title, desc, que, radioQue, checkboxQue} = req.body;
 
    const newForm = new forms({
       title,
       desc,
       que,
       radioQue,
       checkboxQue
    })
 
    await newForm.save();
    res.status(200).json({ data: newForm})
    
 })
 
 
 module.exports = router