const express = require('express')
const cors = require('cors')
require('dotenv').config({ path: "./config/.env" })
const admin = require('firebase-admin')
const serviceAccount = require('./config/habc-m-firebase-adminsdk-rcscs-5568042193.json')

const authRoutes = require('./routes/authRoute')

const app = express()

app.use(cors())
app.use(express.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})


app.use('/auth', authRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
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

