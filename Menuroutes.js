const express = require('express');
const router = express.Router();
const Menuitem = require('./Menuitem')


router.post('/',async (req,res)=>{
    try{
        const data = req.body;

        const menuitem = new Menuitem(data);

        const response = await menuitem.save();
        console.log('DATA SAVED');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(200).json({error:"internal errror"})

    }
})
router.get('/',async (req,res)=>{
    try{
        const data = await Menuitem.find()
        console.log('DATA SAVED');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(200).json({error:"internal errror"})

    }
})

module.exports = router;