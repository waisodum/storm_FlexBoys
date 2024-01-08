const router=require('express').Router();
const upload=require('../controllers/MulterConfig')
const  model=require('../models/eventlist')

router.post('/',upload.single('eventImage'),async(req,res,next)=>{
   var data ={
     eventName: req.body.eventName,
    //  Date: Date,
     category: req.body.category,
     desc:req.body.eventDescription,
   //  oragnisedby: req.body.user,
 path: req.file.filename,
   }

// console.log(data);
try {
  
  await model(data).save().then(()=>{
   res.status(200).json({status:"success"})
  })
} catch (error) {
 console.log("error"); 
}


  })


module.exports=router