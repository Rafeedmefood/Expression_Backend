const express = require('express');
const app = express();
const writtenRoute = require('./routes/Written')
const cors = require('cors')

app.use(cors())
app.use('/api/written', writtenRoute)


const port = process.env.PORT || 8080;
app.listen(port, async () => {
    console.log(`listening on port ${port}...`)
})