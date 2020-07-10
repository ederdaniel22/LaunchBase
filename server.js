const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {

    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/60990935?s=460&u=6eac8c5d69de73a638cad6d0dab0889cb32f4283&v=4",
        name: "Eder Daniel Domingues",
        role: "Aluno Launchbase Rocketseat",
        description: 'Estudante de programação front-end <a href="https://github.com/ederdaniel22" target="_blank"> Portfólio</a>',
        links: [
            { name: "Github", url: "https://github.com/ederdaniel22" },
            { name: "Facebook", url: "https://facebook.com/ederdanieldomingues" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/ederdanieldomingues" }
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return res.send("Vídeo not found")
    }
    return res.render("video", { item: video })
})

server.listen(5000, function() {
    console.log("Meu Deus meu tudo")
})