const express = require('express');
const router= express.Router();

/*Post home page*/
router.get('/',(req,res,next)=>{
    res.send('/posts');
});

module.exports = router;