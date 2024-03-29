import axios from 'axios'

async function updateScore(docId, user, formData, calculatedMetrics) {
    try {
        const updatedDocValues = {
            createdBy: user.uid,
            rawScores: formData,
            calculatedMetrics: calculatedMetrics,
        }

        const response = await axios.put(`http://localhost:5000/score/${docId}`, updatedDocValues)
        console.log(response)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export default updateScore