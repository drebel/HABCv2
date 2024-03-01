

export default function Question(props){

    return(
        <>
                    <div className='row'>
                        <fieldset key={props.questionKey}> 
                            <div>
                                <div><legend className='col-12 col-lg-5 d-inline-block'>{props.question}</legend></div>
                                {/* <div className='col-7 d-inline-block'>test</div> */}
                                <div className='col-12 col-lg-7 d-inline-block d-flex justify-content-center align-items-center'>
                                    
                                    <input
                                        className="btn-check"
                                        id={`${props.name}_none`}
                                        type="radio"
                                        name={props.name}
                                        value={0}
                                        checked={props.formData[props.name] === 0}
                                        onChange={props.handleChange}
                                    />
                                    <label className='btn btn-outline-primary flex-grow-1 mx-1' htmlFor={`${props.name}_none`}>
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
                                    />
                                    <label className='btn btn-outline-primary flex-grow-1 mx-1' htmlFor={`${props.name}_several`}>
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
                                    />
                                    <label className='btn btn-outline-primary flex-grow-1 mx-1' htmlFor={`${props.name}_over`}>
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
                                    />
                                    <label className='btn btn-outline-primary flex-grow-1 mx-1' htmlFor={`${props.name}_daily`}>
                                        Almost Daily
                                        <span className="d-block small opacity-90">(12-14 days)</span>
                                    </label>

                                </div>
                            </div>
                        </fieldset>
                    </div>
            {/* <div className="row">
                <fieldset key={props.questionKey} >
                    <div>
                        <legend className="col-4 d-inline-block">{props.question}</legend>
                        <div className="col-8 ">
                            <input
                                className="btn-check"
                                id={`${props.name}_none`}
                                type="radio"
                                name={props.name}
                                value={0}
                                checked={props.formData[props.name] === 0}
                                onChange={props.handleChange}
                                />
                            <label className="btn btn-outline-primary mx-1 p-3 col-2" htmlFor={`${props.name}_none`}>
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
                            />
                            <label className="btn btn-outline-primary mx-1 p-3 col-2" htmlFor={`${props.name}_several`}>
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
                            />
                            <label className="btn btn-outline-primary mx-1 p-3 col-2" htmlFor={`${props.name}_over`}>
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
                            />
                            <label className="btn btn-outline-primary mx-1 p-3 col-2" htmlFor={`${props.name}_daily`}>
                                Almost Daily
                                <span className="d-block small opacity-90">(12-14 days)</span>
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div> */}
        </>

    )
}