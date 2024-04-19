const express = require('express');
const router = express.Router();
const Person = require('./person')

router.post('/',async (req,res)=>{
    try{
        const data = req.body;

        const newperson = new Person(data);

        const response = await newperson.save();
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
        const data = await Person.find()
        console.log('DATA SAVED');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(200).json({error:"internal errror"})

    }
})



router.get('/:worktype', async (req,res)=>{
    try{
        const worktype = req.params.worktype

          if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
            
            const response = await Person.find({work: worktype})
            console.log('response fatched')
            res.status(200).json(response)

          }
           else{
                res.status(404).json({error: 'Not Found'});
            }
        }catch(err){
            console.log(err);
        }
})

// DEFINE END POINT//////

//// make data update function///

router.put('/:id', async (req,res)=>{

    try{
        const personid = req.params.id;

        const updatedpersondata = req.body;

        const response = await Person.findByIdAndUpdate(personid,updatedpersondata, {

            new:true,
            runValidators:true
        })

        if(!response){
            return res.status(404).json({error: 'Not Found'})
        }

        console.log("data updated1")
        res.status(200).json(response);
    }
    catch(err){
        console.log("error")
    }
})


router.delete('/:id', async (req,res)=>{

    try{
        const personid = req.params.id;

        const response = await Person.findByIdAndDelete(personid);
    
        if(!response){
            return res.status(404).json({error:"data not found"})
        }
    
        console.log("person deleted")
        return res.status(200).json({error:"person deleted successfully"})

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"data not found"})
    }
})
module.exports = router;