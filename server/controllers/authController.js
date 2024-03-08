const admin = require('firebase-admin')
const { signIn } = require('../utils/authUtils')

exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try{
        const response = await signIn(email, password)
        console.log(response)
        res.send(response)
    }catch(err){
        res.send({ message: err.message })
    }
}