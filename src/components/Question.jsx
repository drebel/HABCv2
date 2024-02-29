

export default function Question(props){

    // change assest/question to name=qNum
    // change legend to the question


    return(
        <fieldset key={props.questionKey}>
                    <legend>{props.question}</legend>
                    <label className="btn btn-outline-primary m-1 p-3">
                        <input
                            className="btn-check"
                            type="radio"
                            name={props.name}
                            value={0}
                            checked={props.formData[props.name] === 0}
                            onChange={props.handleChange}
                         />
                        Not At All
                        <span className="d-block small opacity-90">(0-1 days)</span>
                    </label>
                    <label className="btn btn-outline-primary m-1 p-3">
                        <input 
                            className="btn-check"
                            type="radio"
                            name={props.name}
                            value={1}
                            checked={props.formData[props.name] === 1}
                            onChange={props.handleChange}
                         />
                        Serveral Days 
                        <span className="d-block small opacity-90">(2-6 days)</span>
                    </label>
                    <label className="btn btn-outline-primary m-1 p-3">
                        <input 
                            className="btn-check"
                            type="radio"
                            name={props.name}
                            value={2}
                            checked={props.formData[props.name] === 2}
                            onChange={props.handleChange}
                         />
                        More than half the days
                        <span className="d-block small opacity-90">(7-11 days)</span>
                    </label>
                    <label className="btn btn-outline-primary m-1 p-3">
                        <input
                            className="btn-check" 
                            type="radio"
                            name={props.name}
                            value={3}
                            checked={props.formData[props.name] === 3}
                            onChange={props.handleChange}
                         />
                        Almost Daily
                        <span className="d-block small opacity-90">(12-14 days)</span> 
                    </label>
                </fieldset>
    )
}