const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {

    express: server,
    //Serve para 
    autoescape: false

})

server.get("/", function(req, res){

    const about = {

        avatar_url:"https://avatars3.githubusercontent.com/u/64103507?s=400&u=7fb2f781cf0eff6ef2e91758c08fecd83b48d5b1&v=4",
        name:"Bernardo Freguglia",
        role:"Aluno Rocketseat",
        descripition:'Programador FullStack Júnior, aluno da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a> ',
        links: [

            {
                name: "Github",
                url: "https://github.com/beefreguglia"

            },

            {
                name: "Twitter",
                url: "https://twitter.com/beefreguglia"

            },

            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/bernardo-freguglia/"

            }

        ]

    }

    return res.render("about", {about})

})

server.get("/portfolio", function(req, res){

    return res.render("portfolio", {items: videos})

})

server.listen(5000, function(){

    console.log("Server is running")

})