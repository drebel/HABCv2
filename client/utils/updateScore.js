import axios from 'axios'

async function updateScore(docId, user, rawScores, calculatedMetrics) {
    const prodURL = import.meta.env.VITE_REACT_APP_URL

    try {
        const updatedDocValues = {
            createdBy: user.uid,
            rawScores: rawScores,
            calculatedMetrics: calculatedMetrics,
        }
        console.log(updatedDocValues)

        const response = await axios.put(`${prodURL}/score/${docId}`, updatedDocValues)
        // console.log(response)
        localStorage.removeItem('guestScore')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export default updateScore