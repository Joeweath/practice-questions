const calculator = (num1, num2, operation) => {
    let expression;
    if(operation == "+"){
        expression = num1 + num2;
    } else if (operation == "-"){
        expression = num2 - num2;
    } else if (operation == "*"){
        expression = num2 * num2;
    }else if (operation == "/"){
        expression = num2 / num2;
    }
    return expression
}


console.log(calculator(10,10,"*"))