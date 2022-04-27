const express = require('express');
const router = express.Router();
const {note} = require("../models");


router.get('/all', async (request, response) => {
    const notes = await note.findAll()
    response.send(JSON.stringify(notes,null,2))
})

router.get('/all/:tag', async (request, response) => {
    const notes = await note.findAll({
        where : {
            tag : request.params.tag
        }
    })
    response.send(JSON.stringify(notes,null,2))
})

router.get('/:id', async (request, response) => {
    const noteSingular = await note.findByPk(request.params.id)
    response.send(JSON.stringify(noteSingular,null,2))
})



module.exports = router