import React from 'react'

// import Hero from '../components/Hero'
// import Feature1 from '../components/Feature1'
// import Feature2 from '../components/Feature2'
// import IconGrid from '../components/IconGrid'
// import FeatureWithIcons from '../components/FeatureWithIcons'

export default function Testing(){

    return (
        <>
            <section className='container'>
                <form action="">
                    <div className='row'>
                        <fieldset id='test' className=''> 
                            <div>
                                <div><legend className='col-5 d-inline-block'>legend</legend></div>
                                {/* <div className='col-7 d-inline-block'>test</div> */}
                                <div className='col-7 d-inline-block d-flex justify-content-center align-items-center'>
                                    <button className='btn btn-primary flex-grow-1 mx-1'>
                                        Not At All
                                        <span className="d-block small opacity-90">(0-1 days)</span>
                                    </button>
                                    <button className='btn btn-primary flex-grow-1 mx-1'>
                                        Several Days
                                        <span className="d-block small opacity-90">(2-6 days)</span>
                                    </button>
                                    <button className='btn btn-primary flex-grow-1 mx-1'>
                                        Over half the days
                                        <span className="d-block small opacity-90">(7-11 days)</span>
                                        </button>
                                    <button className='btn btn-primary flex-grow-1 mx-1'>
                                        Almost Daily
                                        <span className="d-block small opacity-90">(12-14 days)</span>
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </section>
        </>
    )
}