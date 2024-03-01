

export default function Question(props){

    // change assest/question to name=qNum
    // change legend to the question


    return(
        <fieldset key={props.questionKey}>
                    <legend>{props.question}</legend>
                    <input
                            className="btn-check"
                            id={`${props.name}_none`}
                            type="radio"
                            name={props.name}
                            value={0}
                            checked={props.formData[props.name] === 0}
                            onChange={props.handleChange}
                        />  
                    <label className="btn btn-outline-primary m-1 p-3" for={`${props.name}_none`}>
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
                    <label className="btn btn-outline-primary m-1 p-3" for={`${props.name}_several`}>
                        Serveral Days 
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
                    <label className="btn btn-outline-primary m-1 p-3" for={`${props.name}_over`}>
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
                    <label className="btn btn-outline-primary m-1 p-3" for={`${props.name}_daily`}>
                        Almost Daily
                        <span className="d-block small opacity-90">(12-14 days)</span> 
                    </label>
                </fieldset>
    )
}