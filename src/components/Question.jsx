

export default function Question(props){

    // change assest/question to name=qNum
    // change legend to the question


    return(
        <fieldset key={props.questionKey}>
                    <legend>{props.question}</legend>
                    <label >
                        <input 
                            type="radio"
                            name={props.name}
                            value={0}
                            checked={props.formData[props.name] === 0}
                            onChange={props.handleChange}
                         />
                        Not At All (0-1 days)
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name={props.name}
                            value={1}
                            checked={props.formData[props.name] === 1}
                            onChange={props.handleChange}
                         />
                        Serveral Days (2-6 days)
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name={props.name}
                            value={2}
                            checked={props.formData[props.name] === 2}
                            onChange={props.handleChange}
                         />
                        More than half the days (7-11 days)
                    </label>
                    <label >
                        <input 
                            type="radio"
                            name={props.name}
                            value={3}
                            checked={props.formData[props.name] === 3}
                            onChange={props.handleChange}
                         />
                        Almost Daily (12-14 days)
                    </label>
                </fieldset>
    )
}