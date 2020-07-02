const express = require('express')
const nunjucks = require('nunjucks')
const about = require("./data-about") 
const course = require("./data-courses")

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {

    express: server,
    autoescape: false,
    noCache: true

})

server.get("/", function(req, res){

    return res.render("courses", {course})

})

server.get("/courses/:id", function(req, res) {
    
    const id = req.params.id;
  
    const desc = course.find(function(desc){

        return desc.id == id;

    })

    if(!desc){

        return res.render("not-found");

    }

    return res.render("description", {card: desc});
  
});

server.get("/about", function(req, res){


    return res.render("about", {about})

})

server.use(function(req,res){

    res.status(404).render("not-found");

})

server.listen(5000, function(){

    console.log("Server is running !")

})