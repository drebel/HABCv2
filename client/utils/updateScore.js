import axios from 'axios'

async function updateScore(docId, user, rawScores, calculatedMetrics) {
    try {
        const updatedDocValues = {
            createdBy: user.uid,
            rawScores: rawScores,
            calculatedMetrics: calculatedMetrics,
        }
        console.log(updatedDocValues)

        const response = await axios.put(`http://localhost:5000/score/${docId}`, updatedDocValues)
        // console.log(response)
        localStorage.removeItem('guestScore')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export default updateScore