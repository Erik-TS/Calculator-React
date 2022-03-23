import React from "react";

function CalcKeyboard(props) {

    function opersOnClick(event){
        let lastIndex = (props.displayText.length - 1)
        let lastTextItem = props.displayText[lastIndex]
        !isNaN( parseInt( lastTextItem ) ) && props.onInsert(event)
    }
    
    return(
        <div className="calcKeyboard my-2">
            <div className="row">
                <div className="col">
                    <button onClick={props.onInsert} className="btn btn-light m-1">7</button>    
                    <button onClick={props.onInsert} className="btn btn-light m-1">8</button>   
                    <button onClick={props.onInsert} className="btn btn-light m-1">9</button>   
                    <button onClick={() => {
                        let result = props.equalButtonOnClick(props.displayText)
                        props.setDisplayText(result.toString())
                        props.onCalcule(result)
                    }} className="btn btn-light m-1">=</button>   
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={props.onInsert} className="btn btn-light m-1">4</button>   
                    <button onClick={props.onInsert} className="btn btn-light m-1">5</button>   
                    <button onClick={props.onInsert} className="btn btn-light m-1">6</button>   
                    <button onClick={(event) => opersOnClick(event)} className="btn btn-light m-1">+</button>   
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={props.onInsert} className="btn btn-light m-1">1</button>   
                    <button onClick={props.onInsert} className="btn btn-light m-1">2</button>   
                    <button onClick={props.onInsert} className="btn btn-light m-1">3</button>   
                    <button onClick={(event) => opersOnClick(event)} className="btn btn-light m-1">-</button>   
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={props.reset} className="btn btn-light m-1">C</button>    
                    <button onClick={props.onInsert} className="btn btn-light m-1">0</button>    
                    <button onClick={(event) => opersOnClick(event)} className="btn btn-light m-1">*</button>    
                    <button onClick={(event) => opersOnClick(event)} className="btn btn-light m-1">/</button>    
                </div>
            </div>
        </div>
    )
}

export default CalcKeyboard