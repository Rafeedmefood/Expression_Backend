const express = require('express');
const router = express.Router();
const {note} = require("../models");
const bodyParser = require('body-parser').json();


router.get('/all', async (request, response) => {
    const notes = await note.findAll()
    response.send(JSON.stringify(notes, null, 2))
})

router.get('/all/:tag', async (request, response) => {
    const notes = await note.findAll({
        where: {
            tag: request.params.tag
        }
    })
    response.send(JSON.stringify(notes, null, 2))
})

router.get('/:id', async (request, response) => {
    const noteSingular = await note.findByPk(request.params.id)
    response.send(JSON.stringify(noteSingular, null, 2))
})

process.env.API_POST ? router.post(process.env.API_POST, bodyParser, async (request, response) => {
    console.log(request.body)
    try {
        const newNote = await note.create(request.body)

        response.json(newNote)
    } catch (error) {
        console.log(error)
        response.send(error.message)
    }
}) : console.log("no post request access");

module.exports = router