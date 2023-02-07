var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){

  //returning arr of objects

    let data = [{Name: "John Smith", Money: 2, Owed:0}, 
    {Name: "John Doe", Money: 3, Owed :0}]

    res.json({
      data
    })

  

});

module.exports = router;
