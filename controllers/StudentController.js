const Student=require('../models/Student.js');
const mongoose=require('mongoose');


const show=(req,res)=>{
    Student.find()
    .then(data=>{
        res.send(data);
    }).catch(error=>{
        res.send(error);
    });
};


const search=(req,res)=>{
    let stdid=req.body.id;
    Student.findById(stdid)
    .then(data=>{
        res.send(data);
    }).catch(error=>{
        res.send(error);
    });
};


const store=(req,res)=>{
    let student=new Student({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender
    });

    student.save()
    .then(data=>{
        res.send(data);
    }).catch(error=>{
        res.send(error);
    });
};

const update=(req,res)=>{
    let stdid=req.body.id;
    let updateddata={
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender
    };

    Student.findByIdAndUpdate(stdid,{$set:updateddata})
    .then(data=>{
        res.send(data);
    }).catch(error=>{
        res.send(error);
    });
};

const destroy=(req,res)=>{
    let stdid=req.body.id;

    Student.findByIdAndRemove(stdid)
    .then(data=>{
        res.send(data);
    }).catch(error=>{
        res.send(error);
    });
};


module.exports={show,search,store,update,destroy};
