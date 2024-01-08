var express = require('express');
var router = express.Router();
const UpLoad=require("../models/eventlist")
/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    var all=await UpLoad.find()
    
    res.json(all);
  } catch (error) {
    res.send("error")
  }
});

module.exports = router;