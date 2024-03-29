const Score = require('../models/Score')

module.exports= {
    getScores: async (req, res, next) => {
        // in the req well have the user id
        // look for all the docs with that user id in the scores collection
        // return the array with all the docs
        const uid = req.query.uid
        try{
            const scoresArray = await Score.find({ createdBy: uid}).sort({createdAt: 1})
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
    updateScore: async (req, res, next) => {
        const docId = req.params.docId
        console.log(req.params)
        console.log(req.body)
        const putScore = req.body
        console.log(putScore)
        
        try{
            const updatedScore = await Score.findByIdAndUpdate(docId, putScore, {new: true})
            console.log(updatedScore)
            if (!updatedScore) {
                return res.status(404).send({ message: 'Score not found' });
            }
            res.send(updatedScore)
        }catch(err){
            res.send({message: err.message})
        }
    }
}