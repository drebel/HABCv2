const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const connectDB = require("./config/database");


require('dotenv').config({ path: "./config/.env" })

const authRoutes = require('./routes/authRoute')
const scoreRoutes = require('./routes/scoreRoute')

const app = express()

app.use(cors())
app.use(express.json())


app.use('/auth', authRoutes)
app.use('/score', scoreRoutes)

connectDB().then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log("listening for requests")
    })
  }) 


// const connectDB = require('./config/firebase')








// connectDB().then(({db, auth}) => {
//     app.listen(process.env.PORT, () => {
//         console.log("Listening for requests");
//         console.dir(db)
//         console.dir(auth)
//     })
// }).catch(error => {
//     console.error('Error connecting to Firebase:', error)
//     process.exit(1)
// })

// app.listen(process.env.PORT || PORT, () => {
    //     console.log("listening for requests");
    // })

