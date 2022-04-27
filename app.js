const express = require('express');
const app = express();
const writtenRoute = require('./routes/Written')
const noteRoute = require('./routes/Notes')
const videoRoute = require('./routes/Videos')
const cors = require('cors')

app.use(cors())
app.use('/api/written', writtenRoute)
app.use('/api/video', videoRoute)
app.use('/api/note', noteRoute)


const port = process.env.PORT || 8080;
app.listen(port, async () => {
    console.log(`listening on port ${port}...`)
})