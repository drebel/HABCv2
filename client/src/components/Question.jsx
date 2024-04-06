

export default function Question(props){

    const noHrKeys = [0,6,17,27]

    return(
        <>
            {!noHrKeys.includes(props.questionKey) && <hr />}
            <div className='row my-3 mx-0 px-1'>
                    <div className="p-0 d-flex flex-wrap" key={props.questionKey}>
                        <div className="col-12 col-lg-5 d-flex align-items-center"><legend className='d-inline '>{props.question}</legend></div>
                        <div className='col-12 col-lg-7 d-inline-block d-flex justify-content-between align-items-center flex-wrap'>
                            <input
                                className="btn-check"
                                id={`${props.name}_none`}
                                type="radio"
                                name={props.name}
                                value={0}
                                checked={props.formData[props.name] === 0}
                                onChange={props.handleChange}
                                required
                            />
                            <label className='btn btn-outline-dark flex-grow-1 mx-1 my-2' htmlFor={`${props.name}_none`}>
                                Not At All
                                <span className="d-block small opacity-90">(0-1 days)</span>
                            </label>

                            <input
                                className="btn-check"
                                id={`${props.name}_several`}
                                type="radio"
                                name={props.name}
                                value={1}
                                checked={props.formData[props.name] === 1}
                                onChange={props.handleChange}
                                required
                            />
                            <label className='btn btn-outline-dark flex-grow-1 mx-1' htmlFor={`${props.name}_several`}>
                                Several Days
                                <span className="d-block small opacity-90">(2-6 days)</span>
                            </label>

                            <input
                                className="btn-check"
                                id={`${props.name}_over`}
                                type="radio"
                                name={props.name}
                                value={2}
                                checked={props.formData[props.name] === 2}
                                onChange={props.handleChange}
                                required
                            />
                            <label className='btn btn-outline-dark flex-grow-1 mx-1' htmlFor={`${props.name}_over`}>
                                Over half the days
                                <span className="d-block small opacity-90">(7-11 days)</span>
                            </label>

                            <input
                                className="btn-check"
                                id={`${props.name}_daily`}
                                type="radio"
                                name={props.name}
                                value={3}
                                checked={props.formData[props.name] === 3}
                                onChange={props.handleChange}
                                required
                            />
                            <label className='btn btn-outline-dark flex-grow-1 mx-1' htmlFor={`${props.name}_daily`}>
                                Almost Daily
                                <span className="d-block small opacity-90">(12-14 days)</span>
                            </label>

                        </div>
                    </div>
            </div>
        </>

    )
}