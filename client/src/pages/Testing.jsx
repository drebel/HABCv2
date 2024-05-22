import React from 'react'
import axios from 'axios'
import { getAuth } from 'firebase/auth'

// import Hero from '../components/Hero'
// import Feature1 from '../components/Feature1'
// import Feature2 from '../components/Feature2'
// import IconGrid from '../components/IconGrid'
// import FeatureWithIcons from '../components/FeatureWithIcons'

export default function Testing(){
    const prodURL = import.meta.env.VITE_REACT_APP_URL


    async function getScores(){
        const auth = getAuth()
        const user = auth.currentUser
        console.log(user.uid)

        const res = await axios.get(`/score?uid=${user.uid}`)
        const scoresArray = res.data
        console.log(scoresArray)
    }

    function handleSubmit(e){
        e.preventDefault()
        getScores()
    }

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className=" p-3 bg-danger-subtle border-2 border border-danger rounded">
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Cognitive</h4>
                            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" p-3 bg-warning-subtle border-2 border border-warning rounded">
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Physical Function</h4>
                            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" p-3 bg-success-subtle border-2 border border-success rounded">
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Behaviors and Mood</h4>
                            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className=" p-3 bg-info-subtle border-2 border border-info rounded">
                            <h4 className="fw-semibold mb-0 text-body-emphasis">Caregiver Stress</h4>
                            <p className="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}