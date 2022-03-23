import React, {useState} from 'react'
import CalcDisplay from './CalcDisplay'
import CalcKeyboard from './CalcKeyboard'
import EqualButtonOnClick from '../scripts/calculations'

function Calculator(props) {

    const [insertText, setInsertText] = useState('0')
    const [calculation, setCalculation] = useState(0)

    function handleInsertText(params) {
        setInsertText( prevValues => {
            return prevValues !== '0' ? prevValues + params.target.lastChild.data : params.target.lastChild.data
        } )
    }

    function handleCalculation(params) {
        params = parseInt(params)
        setCalculation(params)
    }

    function resetDisplay(){
        handleCalculation(0)
        setInsertText('0')
    }

    return(
        <div>
            <div className='justify-content-center pt-5 row d-inline-block'>
                <CalcDisplay textInput={insertText}/>
                <CalcKeyboard onCalcule={handleCalculation} setDisplayText={setInsertText} displayText={insertText} equalButtonOnClick={EqualButtonOnClick} reset={resetDisplay} onInsert={handleInsertText} />
            </div>
            <p className='text-white'>The operations are performed from left to right in no order of preference.</p>
        </div>
    )   
}

export default Calculator