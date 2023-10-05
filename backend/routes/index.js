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

console.log(req.body);
// console.log(data);
 await model(data).save().then(()=>{
  res.status(200).json({status:"success"})
 })
console.log(req.file.filename);
// console.log(req.file);


  })

  router.get('/', async function(req, res, next) {

    var all=await UpLoad.find()
    res.json(all);
  
  
  });

module.exports=router