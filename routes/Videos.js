const express = require('express');
const router = express.Router();
const {video} = require("../models");


router.get('/all', async (request, response) => {
    const videoPieces = await video.findAll()
    response.send(JSON.stringify(videoPieces,null,2))
})

router.get('/:id', async (request, response) => {
    const videoSingular = await video.findByPk(request.params.id)
    response.send(JSON.stringify(videoSingular,null,2))
})



module.exports = router