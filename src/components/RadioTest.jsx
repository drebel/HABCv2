export default function RadioTest(){

    return (
        <>
        {/* <ul className="list-group list-group-horizontal list-group-checkable">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
        </ul> */}

            {/* <div className="d-flex ">
                
                <div className="list-group list-group-horizontal list-group-checkable d-grid gap-2 border-0">
                    <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios1" value="" />
                    <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios1">
                    Not At All
                        <span className="d-block small opacity-50">(0-1 days)</span>
                    </label>

                    <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios2" value="" />
                    <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios2">
                    Serveral Days
                        <span className="d-block small opacity-50">(2-6 days)</span>
                    </label>

                    <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios3" value="" />
                    <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios3">
                    More than half the days
                        <span className="d-block small opacity-50">(7-11 days)</span>
                    </label>

                    <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios4" value="" /> 
                    <label className="list-group-item rounded-3 py-3" htmlFor="listGroupCheckableRadios4">
                    Almost Daily
                        <span className="d-block small opacity-50">(12-14 days)</span>
                    </label>
                </div>
            </div> */}

            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
            <label className="btn btn-outline-primary"htmlFor="option1">Checked</label>

            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor="option2">Radio</label>

            <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
            <label className="btn btn-outline-primary"htmlFor="option3">Disabled</label>

            <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" />
            <label className="btn btn-outline-primary"htmlFor="option4">Radio</label>
        </>
    )
}