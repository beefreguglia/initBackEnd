const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {

    express: server

})

server.get("/", function(req, res){

    return res.render("desafio1")

})

server.get("/about", function(req, res){

    return res.render("about")

})

server.get("/courses", function(req, res){

    return res.render("courses")

})


server.listen(5000, function(){

    console.log("Server is running !")

})