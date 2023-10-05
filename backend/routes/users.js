var express = require('express');
var router = express.Router();
const UpLoad=require("../models/eventlist")
/* GET users listing. */
router.get('/', async function(req, res, next) {

  var all=await UpLoad.find()
  res.json(all);


});router.get('/index', async function(req, res, next) {

  var all=await UpLoad.find()
  res.json(all);


});

module.exports = router;