const express=require("express");
const mongoose=require("mongoose");
const path=require("path");
const app=express();
const port=3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',require("./routes/user.js"))
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});
mongoose.connect("mongodb://127.0.0.1:27017/Algo")
.then(()=>console.log("MongoDB connection established"))
.catch(err=>console.log(err));







