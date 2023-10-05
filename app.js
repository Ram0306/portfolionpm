const express = require("express");
const app = express();  // express function call
const hbs = require("hbs")

// db connection
require("./src/db/conn");

// Routes
const routes =require("./src/routes/main") //file import routes come from main.js file
app.use("/",routes);
 //connect public folder css images etc..
app.use('/static',express.static("public"))

//template engine hbs use

app.set("view engine","hbs")
app.set("views","views")  //app.set("views","views = this is foder file location ") 
//app.set('view', path.join('./home', 'view'));
hbs.registerPartials("views/partials") //connect hochuki hain partials ki file ab automaticaly navbar run krega or bhi files sath main okk


app.get("/server",(req,res)=>{
    res.send("im comming from server")   //http://localhost:6001/
})
app.get("/",(req,res)=>{
    res.send("home")   //http://localhost:6001/
})
app.get("/project",(req,res)=>{
    res.send("project")    // html -hbs file name
})
app.get("/about",(req,res)=>{
    res.send("About")  // html -hbs file name
})

app.get("/contact",(req,res)=>{
    res.send("Contact")//html - hbs file name 
})

app.listen(process.env. PORT | 6001,()=>{
    console.log("server started")
})

