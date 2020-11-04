const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')

const db = require("./api/models")


const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())


const apiRoutes =  require('./api/routes/api_routes')

// using the api routes
app.use('/api', apiRoutes)


const port = process.env.PORT || 8080

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`listening on http://localhost:${port}`)
    })
})
