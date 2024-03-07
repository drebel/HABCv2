const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/firebase')


const app = express()

app.use(cors())
app.use(express.json())


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening for requests");
    })
}).catch(error => {
    console.error('Error connecting to Firebase:', error)
    process.exit(1)
})

// app.listen(process.env.PORT || PORT, () => {
//     console.log("listening for requests");
// })