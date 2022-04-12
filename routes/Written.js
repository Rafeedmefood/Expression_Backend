const express = require('express');
const router = express.Router();
const {written} = require("../models");


router.get('/all', async (request, response) => {
    const s = await written.findAll()
    response.send(JSON.stringify(s,null,2))
})



module.exports = router