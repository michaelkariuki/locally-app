const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')

// const db = require("./models")


const app = express()

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(morgan('tiny'))
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(helmet())



// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.get('/', (req, res) => {
    res.json(
        {
            message: 'Hello word!!!'
        }
    )
})

// require("./api/routes/routes")(app);
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

