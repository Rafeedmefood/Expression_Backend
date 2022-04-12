const express = require('express');
const models = require('./models/index')
const app = express();


app.get('/api/written', async (request, response) => {
    response.send("hi")
    const s = await models.written.findAll()
    console.log(JSON.stringify(s,null,2))
    console.log(new Date())
})

const port = process.env.PORT || 8080;
app.listen(port, async () => {
    console.log(`listening on port ${port}...`)
})