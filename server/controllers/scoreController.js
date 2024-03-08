const Score = require('../models/Score')

module.exports= {
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