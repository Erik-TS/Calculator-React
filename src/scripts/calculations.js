function equalBtt(params){
    let output = 0
    let paramsArray = [...params]
    let operands = []
    let operations = []
    let textCache = ''
    
    for(let i = 0; i < params.length; i++){
        if(paramsArray[i] === '+' || paramsArray[i] === '-' || paramsArray[i] === '*' || paramsArray[i] === '/')
        { 
            operations.push( paramsArray[i] )
            operands.push( parseInt(textCache) )
            textCache = ''
        }
        else
        { 
            textCache += ( paramsArray[i] )
            if( i === params.length - 1 )
            { 
                operands.push( parseInt(textCache) )
                textCache = ''
            }
        }
    }
    
    operations.forEach((element) => {
        let change = 0
        if(element === '+') change = parseInt(operands[0]) + parseInt(operands[1])
        else if(element === '-')  change = parseInt(operands[0]) - parseInt(operands[1])
        else if(element === '*') change = parseInt(operands[0]) * parseInt(operands[1])
        else if(element === '/') change = parseInt(operands[0]) / parseInt(operands[1])

        output = change
        operands.shift()
        operands[0] = (change)
    })

    return output
}

export default equalBtt