const mongoose = require('mongoose')

const ScoreSchema = new mongoose.Schema({
    createdBy:{
        type: String,
        required: true,
    },
    calculatedMetrics:{
        type: Object,
        required: true,
    },
    rawScores:{
        type: Object,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Score", ScoreSchema)