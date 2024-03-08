const Score = require('../models/Score')

module.exports= {
    getScores: async (req, res, next) => {
        // in the req well have the user id
        // look for all the docs with that user id in the scores collection
        // return the array with all the docs
        const uid = req.query.uid
        try{

            const scoresArray = await Score.find({ createdBy: uid})
            res.send(scoresArray)
        }catch(err){
            res.send({ message: err.message })
        }
    },
    postScore: async (req, res, next) => {
        const newScore = new Score(req.body)
        try{
            const savedScore = await Score.create(newScore)
            res.send(savedScore)
        }catch(err){
            res.send({ message: err.message })
        }
    },
}