import React from 'react'

function CalcDisplay(props) {
    return(
        <div className='container'>
            <div className='row'>
                <div className='pt-1 calcDisplay'>
                    <p className='text-end '>{props.textInput}</p>
                </div>
            </div>
        </div>
    )
}

export default CalcDisplay