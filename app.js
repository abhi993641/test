const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const bodyParser=require('body-parser');

const Student=require('./models/Student.js');
const StudentRoute=require('./router/StudentRoute.js');

const app=express();



mongoose.connect('mongodb://127.0.0.1:27017/abhidb1');

let db=mongoose.connection;

db.once("open",()=>{
console.log("connected");
});

db.on("error",()=>{
console.log("Error");
});

//use to get values from body into postman
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/student',StudentRoute);

// app.get("/",(req,res)=>{
// Student.find({name:req.query.name},(err,data)=>{
//     console.log(data);
//     res.send(data);
// });
// });




// //save
// app.get("/save",(req,res)=>{
// let st=new Student({name:"sivani",age:20,gender:"female"})

// st.save((err,data)=>{
// res.send("Data inserted");
// });

// });

// app.get("/update", (req, res) => {
//     Student.findOneAndUpdate({ name: "Mani" }, { age: 100 }, (err, data) => {
//         res.send(data);
//     })
// })

// app.get("/remove", (req, res) => {
//     Student.remove({ name: "Yuvi" }, (err, data) => {
//         res.send(data);
//     })
// })

app.listen(5000,()=>{
console.log("listening to port...");
});