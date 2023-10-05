const express = require("express")
const { route } = require('express/lib/application')
const routes = express.Router()  //alag alag pages pr kaam krna hain toh routes bna kr krskte hain 

routes.get("/",(req,res)=>{
    res.render("home")
})

routes.get("/project",(req,res)=>{
    res.render("project")  //html - hbs fsile name 
})
routes.get("/about",(req,res)=>{
    res.render("About")//html - hbs file name 
})

routes.get("/contact",(req,res)=>{
    res.render("Contact")//html - hbs file name 
})

module.exports = routes   // imort in app.js file  code line no