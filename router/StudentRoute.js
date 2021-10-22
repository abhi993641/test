const express=require('express');
const router=express.Router();

const StudentC=require('../controllers/StudentController.js');

router.get('/show',StudentC.show);
router.post('/search',StudentC.search);
router.post('/store',StudentC.store);
router.post('/update',StudentC.update);
router.post('/delete',StudentC.destroy);

module.exports=router;