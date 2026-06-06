const express = require('express');
const {connectDB} = require('./db');
const method_override = require('method-override');
const router = require('./router/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(method_override("_method"));

app.set("view engine","ejs");
app.use("/",router);

app.listen(4000,()=>{
    console.log("running...");
})