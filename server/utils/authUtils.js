const admin = require('firebase-admin');

async function signIn(email, password){
    try{
        console.log('inside utils')
        const userCredential = await admin.auth().signInWithEmailAndPassword(email, password)
        console.log('got usercreds')
        const user = userCredential.user

        const userInfo = await admin.auth().getUser(user.uid)
        //create custom token

        const response = {
            uid: user.uid,
            email: userInfo.email,
            displayName: userInfo.displayName,
            // add token
        }
        return response
    }catch(err){
        throw err
    }
}

module.exports = { signIn }